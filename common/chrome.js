/* 共通ヘッダー・フッターを注入する。
   使い方: body 先頭に <div id="common-header"></div>、末尾に <div id="common-footer"></div> を置き、
   <script src="/common/chrome.js" defer></script> を読み込む */
(async function () {
  async function inject(id, url) {
    const slot = document.getElementById(id);
    if (!slot) return;
    const res = await fetch(url);
    slot.outerHTML = await res.text();
  }
  await inject('common-header', '/common/header.html');
  await inject('common-footer', '/common/footer.html');

  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (ham && menu) {
    ham.addEventListener('click', () => menu.classList.add('open'));
    document.getElementById('close-menu').addEventListener('click', () => menu.classList.remove('open'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }
})();
