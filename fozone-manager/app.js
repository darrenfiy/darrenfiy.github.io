(() => {
  'use strict';

  const APP_ID = '1568936054556947';
  const GRAPH_VERSION = 'v25.0';
  const REDIRECT_URI = 'https://three-quarters.net/fozone-manager/';
  const OAUTH_STATE_KEY = 'fozone_manager_oauth_state';
  const PREFERRED_PAGE_ID = '102964529136383';
  const REQUESTED_SCOPES = [
    'pages_show_list',
    'pages_read_engagement',
    'pages_read_user_content',
  ];

  const connectButton = document.querySelector('#connect-button');
  const clearButton = document.querySelector('#clear-button');
  const statusBox = document.querySelector('#app-status');
  const errorBox = document.querySelector('#app-error');
  const workspace = document.querySelector('#review-workspace');
  const viewerSummary = document.querySelector('#viewer-summary');
  const pageSelect = document.querySelector('#page-select');
  const postSelect = document.querySelector('#post-select');
  const resultCount = document.querySelector('#result-count');
  const emptyState = document.querySelector('#empty-state');
  const commentList = document.querySelector('#comment-list');

  let userAccessToken = null;
  const pageAccessTokens = new Map();

  function randomState() {
    const bytes = new Uint8Array(24);
    window.crypto.getRandomValues(bytes);
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
  }

  function setStatus(message, tone = 'neutral') {
    statusBox.textContent = message;
    statusBox.className = `app-status ${tone}`;
  }

  function showError(message) {
    errorBox.textContent = message;
    errorBox.hidden = false;
  }

  function clearError() {
    errorBox.textContent = '';
    errorBox.hidden = true;
  }

  function setBusy(isBusy) {
    connectButton.disabled = isBusy;
    pageSelect.disabled = isBusy || !userAccessToken;
    postSelect.disabled = isBusy || postSelect.options.length <= 1 || !pageSelect.value;
  }

  async function graphGet(path, accessToken, params = {}) {
    const url = new URL(`https://graph.facebook.com/${GRAPH_VERSION}/${path.replace(/^\//, '')}`);
    Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
      cache: 'no-store',
      credentials: 'omit',
      referrerPolicy: 'no-referrer',
    });

    let payload;
    try {
      payload = await response.json();
    } catch {
      throw new Error('Meta returned a response that was not valid JSON.');
    }

    if (!response.ok || payload.error) {
      const code = payload.error?.code ? ` (Meta error ${payload.error.code})` : '';
      throw new Error(`${payload.error?.message || 'Meta rejected the request.'}${code}`);
    }

    return payload;
  }

  function resetSelect(select, label) {
    select.replaceChildren();
    const option = document.createElement('option');
    option.value = '';
    option.textContent = label;
    select.append(option);
  }

  function postLabel(post, index) {
    const date = post.created_time
      ? new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(post.created_time))
      : 'Unknown date';
    const excerpt = typeof post.message === 'string' && post.message.trim()
      ? ` · ${post.message.trim().replace(/\s+/g, ' ').slice(0, 72)}`
      : '';
    return `Post ${index + 1} · ${date}${excerpt} · ${post.id}`;
  }

  function renderComments(comments) {
    commentList.replaceChildren();
    resultCount.textContent = `${comments.length} comment${comments.length === 1 ? '' : 's'}`;
    emptyState.hidden = comments.length > 0;

    if (!comments.length) {
      emptyState.textContent = 'No public comments were returned for this post.';
      return;
    }

    comments.forEach((comment) => {
      const card = document.createElement('article');
      card.className = 'comment-card';

      const author = document.createElement('div');
      author.className = 'comment-author';

      const authorName = document.createElement('strong');
      const authorProof = document.createElement('span');
      authorProof.className = 'field-proof';

      if (comment.from?.id && comment.from?.name) {
        authorName.textContent = comment.from.name;
        authorProof.textContent = `from.name: ${comment.from.name} · from.id: ${comment.from.id}`;
      } else {
        authorName.textContent = 'Author not returned by Meta';
        authorName.className = 'missing-author';
        authorProof.textContent = 'The app does not infer or reconstruct missing identity fields.';
      }
      author.append(authorName, authorProof);

      const message = document.createElement('p');
      message.className = 'comment-message';
      message.textContent = comment.message || '[No text content]';

      const meta = document.createElement('div');
      meta.className = 'comment-meta';
      const created = comment.created_time
        ? new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'long' }).format(new Date(comment.created_time))
        : 'Unknown time';
      const idText = document.createElement('span');
      idText.textContent = `Comment ID: ${comment.id || 'not returned'}`;
      const timeText = document.createElement('span');
      timeText.textContent = created;
      meta.append(idText, timeText);

      card.append(author, message, meta);
      commentList.append(card);
    });
  }

  async function loadComments() {
    clearError();
    commentList.replaceChildren();
    const postId = postSelect.value;
    const pageId = pageSelect.value;
    if (!postId || !pageId) return;

    const pageToken = pageAccessTokens.get(pageId);
    if (!pageToken) {
      showError('No in-memory Page token is available. Clear the session and authorize again.');
      return;
    }

    try {
      setBusy(true);
      setStatus('Reading public comments from the selected Page post…', 'busy');
      const response = await graphGet(`${postId}/comments`, pageToken, {
        fields: 'id,created_time,message,from,parent{id}',
        filter: 'stream',
        summary: 'true',
        limit: '100',
      });
      renderComments(response.data || []);
      setStatus('Read-only request completed. No Facebook content was changed.', 'success');
    } catch (error) {
      renderComments([]);
      showError(error.message);
      setStatus('The comment request did not complete.', 'neutral');
    } finally {
      setBusy(false);
    }
  }

  async function loadPosts() {
    clearError();
    renderComments([]);
    resetSelect(postSelect, 'Select a post');
    const pageId = pageSelect.value;
    if (!pageId) {
      postSelect.disabled = true;
      return;
    }

    const pageToken = pageAccessTokens.get(pageId);
    if (!pageToken) {
      showError('No in-memory Page token is available. Clear the session and authorize again.');
      return;
    }

    try {
      setBusy(true);
      setStatus('Reading recent posts from the selected Page…', 'busy');
      const response = await graphGet(`${pageId}/posts`, pageToken, {
        fields: 'id,created_time,permalink_url,message',
        limit: '25',
      });
      (response.data || []).forEach((post, index) => {
        const option = document.createElement('option');
        option.value = post.id;
        option.textContent = postLabel(post, index);
        postSelect.append(option);
      });
      postSelect.disabled = postSelect.options.length <= 1;
      setStatus('Page posts loaded. Select the post containing the App Review test comment.', 'success');
      if (postSelect.options.length <= 1) {
        emptyState.hidden = false;
        emptyState.textContent = 'No recent Page posts were returned.';
      }
    } catch (error) {
      showError(error.message);
      setStatus('The Page post request did not complete.', 'neutral');
    } finally {
      setBusy(false);
    }
  }

  async function initializeSession(accessToken) {
    clearError();
    userAccessToken = accessToken;
    try {
      setBusy(true);
      setStatus('OAuth completed. Verifying the administrator and available Pages…', 'busy');

      const [viewer, accounts] = await Promise.all([
        graphGet('me', accessToken, { fields: 'name' }),
        graphGet('me/accounts', accessToken, {
          fields: 'id,name,access_token',
          limit: '100',
        }),
      ]);

      const pages = accounts.data || [];
      resetSelect(pageSelect, 'Select a Page');
      pageAccessTokens.clear();
      pages.forEach((page) => {
        if (!page.id || !page.access_token) return;
        pageAccessTokens.set(page.id, page.access_token);
        const option = document.createElement('option');
        option.value = page.id;
        option.textContent = `${page.name || 'Unnamed Page'} · ${page.id}`;
        pageSelect.append(option);
      });

      viewerSummary.textContent = `Connected as ${viewer.name || 'an authorized administrator'}.`;
      workspace.hidden = false;
      clearButton.hidden = false;
      connectButton.hidden = true;

      if (!pageAccessTokens.size) {
        setStatus('OAuth succeeded, but no manageable Facebook Pages were returned.', 'neutral');
        showError('Make sure the signed-in account has Page access and granted all requested permissions.');
        return;
      }

      if (pageAccessTokens.has(PREFERRED_PAGE_ID)) {
        pageSelect.value = PREFERRED_PAGE_ID;
        await loadPosts();
      } else {
        setStatus('OAuth completed. Select an authorized Facebook Page.', 'success');
      }
    } catch (error) {
      userAccessToken = null;
      pageAccessTokens.clear();
      showError(error.message);
      setStatus('OAuth returned, but the read-only verification did not complete.', 'neutral');
    } finally {
      setBusy(false);
    }
  }

  function beginOAuth() {
    clearError();
    const state = randomState();
    window.sessionStorage.setItem(OAUTH_STATE_KEY, state);
    const authorize = new URL(`https://www.facebook.com/${GRAPH_VERSION}/dialog/oauth`);
    authorize.searchParams.set('client_id', APP_ID);
    authorize.searchParams.set('redirect_uri', REDIRECT_URI);
    authorize.searchParams.set('response_type', 'token');
    authorize.searchParams.set('scope', REQUESTED_SCOPES.join(','));
    authorize.searchParams.set('state', state);
    authorize.searchParams.set('auth_type', 'rerequest');
    window.location.assign(authorize.toString());
  }

  function clearSession() {
    userAccessToken = null;
    pageAccessTokens.clear();
    window.sessionStorage.removeItem(OAUTH_STATE_KEY);
    resetSelect(pageSelect, 'Select a Page');
    resetSelect(postSelect, 'Select a post');
    renderComments([]);
    workspace.hidden = true;
    clearButton.hidden = true;
    connectButton.hidden = false;
    connectButton.disabled = false;
    clearError();
    setStatus('Session cleared. The in-memory access token has been discarded.', 'neutral');
  }

  async function handleOAuthReturn() {
    if (!window.location.hash) return;

    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const returnedState = fragment.get('state');
    const accessToken = fragment.get('access_token');
    const oauthError = fragment.get('error_description') || fragment.get('error');

    window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
    const expectedState = window.sessionStorage.getItem(OAUTH_STATE_KEY);
    window.sessionStorage.removeItem(OAUTH_STATE_KEY);

    if (oauthError) {
      showError(`Facebook authorization did not complete: ${oauthError}`);
      setStatus('Not connected.', 'neutral');
      return;
    }

    if (!accessToken) {
      showError('Facebook returned without an access token.');
      return;
    }

    if (!expectedState || returnedState !== expectedState) {
      showError('OAuth state verification failed. No Facebook data was requested. Please try again.');
      return;
    }

    await initializeSession(accessToken);
  }

  connectButton.addEventListener('click', beginOAuth);
  clearButton.addEventListener('click', clearSession);
  pageSelect.addEventListener('change', loadPosts);
  postSelect.addEventListener('change', loadComments);

  handleOAuthReturn().catch((error) => {
    showError(error.message);
    setStatus('The OAuth return could not be processed.', 'neutral');
  });
})();
