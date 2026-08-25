(function(){
  const translations = {
    zh: {
      title: "S-zj 的自然笔记",
      h1: '“在心中建造一片田园”',
      prefaceTitle: '序言',
      preface: '“在当今繁忙的城市中，寻找与自然的连接常常显得艰难。然而，古代诗人陶渊明教导我们真正的平静来自内心。”',
      autumn: '秋季',
      autumnPara: '如今，人们似乎与四季变换失去了联系。为了帮助我们重新与自然建立联系，我们可以借助一种古老的中国工具——日晷（Gnomon）。',
      imgAlt: '日晷照片',
      footer: '© 2026 s-zj · 由 GitHub Pages 提供'
    },
    en: {
      title: "S-zj's Notes Of Nature",
      h1: '\"Building a country in the heart\"',
      prefaceTitle: 'Preface',
      preface: '\"In today\'s busy cities, finding a connection with nature often feels like a challenge. Yet, the ancient Chinese poet Tao Yuanming taught us that true peace comes from within.\"',
      autumn: 'Autumn',
      autumnPara: 'Nowadays, people seem to have lost touch with the changing seasons. To help us reconnect with nature, we can turn to an ancient Chinese tool called the Gnomon.',
      imgAlt: 'Gnomon photo',
      footer: '© 2026 s-zj · By GitHub Pages'
    }
  };

  const btnZh = document.getElementById('btn-zh');
  const btnEn = document.getElementById('btn-en');
  const setActiveButton = (lang) => {
    if(lang === 'zh'){
      btnZh.classList.add('active'); btnZh.setAttribute('aria-pressed','true');
      btnEn.classList.remove('active'); btnEn.setAttribute('aria-pressed','false');
    } else {
      btnEn.classList.add('active'); btnEn.setAttribute('aria-pressed','true');
      btnZh.classList.remove('active'); btnZh.setAttribute('aria-pressed','false');
    }
  };

  function applyTranslations(lang){
    const map = translations[lang] || translations.en;
    document.title = map.title;
    document.documentElement.lang = (lang === 'zh') ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if(map[key]) el.textContent = map[key];
    });
    const img = document.getElementById('main-img');
    if(img) img.alt = map.imgAlt || img.alt;
    setActiveButton(lang);
  }

  // choose initial lang: saved preference -> browser -> default zh
  const saved = localStorage.getItem('site-lang');
  let initial = saved || (navigator.language && navigator.language.startsWith('en') ? 'en' : 'zh');

  // wait for DOM ready if script placed in head
  function onReady(fn){
    if(document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  onReady(() => {
    applyTranslations(initial);
    if(btnZh) btnZh.addEventListener('click', () => { localStorage.setItem('site-lang','zh'); applyTranslations('zh'); });
    if(btnEn) btnEn.addEventListener('click', () => { localStorage.setItem('site-lang','en'); applyTranslations('en'); });
  });
})();
