(function () {
  const key = 'mrzsomi-cookie-consent';
  const language = () => localStorage.getItem('lang') === 'hu' ? 'hu' : 'en';
  const copy = {
    en: {
      title: 'A small note about storage',
      text: 'This site uses local storage for your language, theme, and form-rate-limit preferences. No advertising or analytics cookies are used.',
      privacy: 'Read privacy & cookie details',
      necessary: 'Continue',
      accept: 'Agree'
    },
    hu: {
      title: 'Egy rövid megjegyzés a tárolásról',
      text: 'Az oldal helyi tárolót használ a nyelv, a téma és az űrlap-korlátozás beállításaihoz. Reklám- vagy analitikai sütiket nem használunk.',
      privacy: 'Adatvédelem és sütik',
      necessary: 'Folytatás',
      accept: 'Elfogadom'
    }
  };

  function render() {
    if (localStorage.getItem(key) || document.querySelector('.consent-banner')) return;
    const t = copy[language()];
    const banner = document.createElement('aside');
    banner.className = 'consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-labelledby', 'consent-title');
    banner.innerHTML = `
      <div>
        <strong id="consent-title">${t.title}</strong>
        <p>${t.text}</p>
        <a href="legal.html#cookies">${t.privacy}</a>
      </div>
      <div class="consent-actions">
        <button type="button" class="btn btn-secondary" data-consent="necessary">${t.necessary}</button>
        <button type="button" class="btn btn-primary" data-consent="accept">${t.accept}</button>
      </div>`;
    document.body.appendChild(banner);
    banner.querySelectorAll('[data-consent]').forEach((button) => {
      button.addEventListener('click', () => {
        localStorage.setItem(key, button.dataset.consent);
        banner.remove();
      });
    });
  }

  window.addEventListener('DOMContentLoaded', render);
  window.addEventListener('languagechange', () => {
    document.querySelector('.consent-banner')?.remove();
    render();
  });
})();
