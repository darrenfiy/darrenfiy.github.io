// 電子名片：點名片翻面、分享連結。沒有 JS 時名片停在正面，背面的資訊在下面的按鈕都有。
(function () {
  var card = document.querySelector('.card');
  if (!card) return;

  // 鍵盤與報讀器走下面那顆「翻面」按鈕；點名片本身只是手指的捷徑。
  var flipBtn = document.querySelector('.flip-btn');
  function flip() {
    var flipped = card.classList.toggle('is-flipped');
    if (flipBtn) flipBtn.setAttribute('aria-pressed', flipped ? 'true' : 'false');
  }
  card.addEventListener('click', flip);
  if (flipBtn) flipBtn.addEventListener('click', flip);

  // 第一次打開時輕輕晃一下，讓人知道可以翻。
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) {
    setTimeout(function () {
      if (card.classList.contains('is-flipped')) return;
      card.classList.add('is-nudging');
      setTimeout(function () { card.classList.remove('is-nudging'); }, 1200);
    }, 1400);
  }

  var shareBtn = document.querySelector('.share-btn');
  var status = document.querySelector('.share-status');
  if (shareBtn) {
    shareBtn.addEventListener('click', function () {
      var url = shareBtn.getAttribute('data-url');
      var title = document.title;
      if (navigator.share) {
        navigator.share({ title: title, url: url }).catch(function () {});
        return;
      }
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function () {
          if (status) status.textContent = '已複製連結';
        }, function () {
          if (status) status.textContent = url;
        });
      } else if (status) {
        status.textContent = url;
      }
    });
  }
})();
