// Co Me Time 聯名款頁的小機器人（2026-11-04，Claude）。
// 三個班底照粉專貼文畫：白色圓頭（寫初稿）、青綠方頭（排版）、細長高個（上線前檢查），這裡改成墨色剪影。
// 眼睛跟著游標或手指轉，偶爾眨眼；點一下會說話。首屏的「四分之三圓」把缺的那一角轉向游標。
// 純裝飾：沒有 JS 時不畫，頁面內容不受影響。
(function () {
  var BOTS = {
    round: {
      box: '0 0 120 150',
      eyes: [[49, 56, 9], [71, 56, 9]],
      body:
        '<line class="line" x1="60" y1="24" x2="60" y2="11"/><circle class="glow" cx="60" cy="8" r="5.5"/>' +
        '<circle class="acc" cx="24" cy="56" r="10"/><circle class="acc" cx="96" cy="56" r="10"/>' +
        '<circle class="ink" cx="60" cy="56" r="34"/>' +
        '<rect class="ink" x="38" y="92" width="44" height="36" rx="15"/><circle class="acc" cx="60" cy="108" r="4.5"/>' +
        '<path class="line" d="M41 100Q29 104 27 116"/><path class="line" d="M79 100Q93 98 97 87"/>' +
        '<g transform="rotate(-32 100 80)"><rect class="acc" x="96" y="62" width="7" height="24" rx="2"/><path class="ink" d="M96 86h7l-3.5 8z"/></g>' +
        '<rect class="ink" x="44" y="125" width="11" height="15" rx="5"/><rect class="ink" x="65" y="125" width="11" height="15" rx="5"/>',
    },
    square: {
      box: '0 0 120 150',
      eyes: [[46, 47, 10], [74, 47, 10]],
      body:
        '<line class="line" x1="60" y1="21" x2="60" y2="10"/><circle class="glow" cx="60" cy="7" r="5.5"/>' +
        '<rect class="acc" x="11" y="38" width="10" height="20" rx="3"/><rect class="acc" x="99" y="38" width="10" height="20" rx="3"/>' +
        '<rect class="ink" x="19" y="20" width="82" height="60" rx="14"/>' +
        '<path class="mark" d="M52 66q8 6 16 0"/>' +
        '<rect class="ink" x="34" y="84" width="52" height="42" rx="10"/>' +
        '<rect class="acc" x="43" y="94" width="10" height="7" rx="2"/><rect class="glow" x="57" y="94" width="20" height="7" rx="2"/>' +
        '<path class="line" d="M37 97Q24 101 21 111"/><path class="line" d="M83 97Q96 104 97 116"/>' +
        '<g transform="rotate(-10 18 120)"><rect class="paper" x="5" y="104" width="25" height="32" rx="3"/>' +
        '<path class="card-line" d="M10 112h15M10 118h9M10 124h13M10 130h7"/></g>' +
        '<rect class="ink" x="41" y="123" width="12" height="16" rx="5"/><rect class="ink" x="67" y="123" width="12" height="16" rx="5"/>',
    },
    tall: {
      box: '0 0 100 190',
      eyes: [[42, 34, 7.5], [58, 34, 7.5]],
      body:
        '<rect class="glow" x="45" y="3" width="10" height="10" rx="3"/>' +
        '<rect class="ink" x="29" y="9" width="42" height="54" rx="21"/>' +
        '<line class="line" x1="50" y1="62" x2="50" y2="74"/>' +
        '<rect class="ink" x="38" y="72" width="24" height="58" rx="9"/>' +
        '<path class="line" d="M41 84Q29 100 27 119"/><path class="line" d="M59 84Q73 82 78 71"/>' +
        '<circle class="glass" cx="83" cy="58" r="11"/><path class="line" d="M80 68l-2 6"/>' +
        '<path class="line" d="M45 128l-3 46M55 128l3 46"/>' +
        '<rect class="ink" x="33" y="172" width="14" height="7" rx="3.5"/><rect class="ink" x="53" y="172" width="14" height="7" rx="3.5"/>',
    },
  };

  var bots = [];
  var eyeCount = 0;
  var motionQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  // 系統設了「減少動態」（開頁後才設也算）：機器人照樣出現、點了照樣說話，但眼睛、圓弧、眨眼都不動。
  function still() { return !!(motionQuery && motionQuery.matches); }

  document.querySelectorAll('.cm-bot[data-bot]').forEach(function (host) {
    var def = BOTS[host.getAttribute('data-bot')];
    if (!def) return;
    var eyeMarkup = def.eyes.map(function (e) {
      return '<g class="eye"><circle class="eye-white" cx="' + e[0] + '" cy="' + e[1] + '" r="' + e[2] + '"/>' +
        '<circle class="pupil" cx="' + e[0] + '" cy="' + e[1] + '" r="' + (e[2] * 0.5) + '"/></g>';
    }).join('');
    host.innerHTML = '<svg viewBox="' + def.box + '" aria-hidden="true" focusable="false">' + def.body + eyeMarkup + '</svg>';
    host.setAttribute('aria-hidden', 'true');
    var whites = host.querySelectorAll('.eye-white');
    host._eyes = [];
    host.querySelectorAll('.pupil').forEach(function (pupil, i) {
      host._eyes.push({ white: whites[i], pupil: pupil, reach: def.eyes[i][2] * 0.42 });
    });
    eyeCount += host._eyes.length;
    bots.push(host);
    host.addEventListener('click', function () {
      host.classList.add('is-saying');
      clearTimeout(host._sayTimer);
      host._sayTimer = setTimeout(function () { host.classList.remove('is-saying'); }, 2200);
    });
  });

  // 首屏的四分之三圓：缺口原本朝左上（-135°），轉到游標的方向。角度連續累加，避免繞遠路轉一圈。
  var arcs = document.querySelector('.cm-arcs');
  var arcTurn = 0;

  if (!eyeCount && !arcs) return;

  // 先把位置都讀完再寫；畫面外的機器人與圓弧跳過。
  function lookAt(x, y) {
    if (still()) return;
    var vh = window.innerHeight;
    var moves = [];
    var arcBox = arcs && arcs.getBoundingClientRect();
    bots.forEach(function (host) {
      var b = host.getBoundingClientRect();
      if (b.bottom < 0 || b.top > vh) return;
      host._eyes.forEach(function (e) {
        var r = e.white.getBoundingClientRect();
        var dx = x - (r.left + r.width / 2);
        var dy = y - (r.top + r.height / 2);
        var d = Math.sqrt(dx * dx + dy * dy) || 1;
        var m = Math.min(1, d / 120) * e.reach;
        moves.push([e.pupil, (dx / d * m).toFixed(2), (dy / d * m).toFixed(2)]);
      });
    });
    moves.forEach(function (mv) { mv[0].setAttribute('transform', 'translate(' + mv[1] + ' ' + mv[2] + ')'); });
    if (arcBox && arcBox.bottom > 0 && arcBox.top < vh) {
      var target = Math.atan2(y - (arcBox.top + arcBox.height / 2), x - (arcBox.left + arcBox.width / 2)) * 180 / Math.PI + 135;
      arcTurn += ((target - arcTurn) % 360 + 540) % 360 - 180;
      arcs.style.setProperty('--cm-arc-turn', arcTurn.toFixed(1) + 'deg');
    }
  }

  var pending = null;
  var lastMove = 0;
  function queue(x, y) {
    lastMove = Date.now();
    if (pending) { pending = [x, y]; return; }
    pending = [x, y];
    requestAnimationFrame(function () { lookAt(pending[0], pending[1]); pending = null; });
  }
  window.addEventListener('pointermove', function (ev) { queue(ev.clientX, ev.clientY); }, { passive: true });
  window.addEventListener('pointerdown', function (ev) { queue(ev.clientX, ev.clientY); }, { passive: true });

  // 游標停在聯絡按鈕上，天線燈會閃（減少動態時 styles.css 會把動畫關掉）。
  document.querySelectorAll('a[href*="line.me"]').forEach(function (a) {
    a.addEventListener('pointerenter', function () { document.body.classList.add('cm-cta-hover'); });
    a.addEventListener('pointerleave', function () { document.body.classList.remove('cm-cta-hover'); });
  });

  // 沒有人動的時候（手機上大多是這樣），眼睛偶爾東張西望。
  setInterval(function () {
    if (Date.now() - lastMove < 4000) return;
    lookAt(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
  }, 2600);

  bots.forEach(function (host) {
    (function blink() {
      setTimeout(function () {
        if (still()) { blink(); return; }
        host.classList.add('is-blinking');
        setTimeout(function () { host.classList.remove('is-blinking'); blink(); }, 140);
      }, 2400 + Math.random() * 4200);
    })();
  });
})();
