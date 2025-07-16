document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.getElementById('lang-btn');
  let currentLang = 'ar';

  const translate = {
    ar: {
      title: '📥 تحميل البرامج',
      categories: ['🧰 الأدوات المساعدة', '🎨 مجموعة أدوبي'],
      downloads: 'تحميل',
      button: '🇫🇷 Français'
    },
    fr: {
      title: '📥 Télécharger les logiciels',
      categories: ['🧰 Utilitaires', '🎨 Suite Adobe'],
      downloads: 'téléchargement',
      button: '🇸🇦 العربية'
    }
  };

  // حفظ التحميلات المحلية
  document.querySelectorAll('.btn-download').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const key = `download-count-${index}`;
      let count = parseInt(localStorage.getItem(key)) || 0;
      count++;
      localStorage.setItem(key, count);
      btn.previousElementSibling.querySelector('.downloads').textContent = count;
    });
  });

  // استرجاع التحميلات من localStorage
  document.querySelectorAll('.program').forEach((el, i) => {
    const key = `download-count-${i}`;
    let count = parseInt(localStorage.getItem(key)) || 0;
    el.querySelector('.downloads').textContent = count;
  });

  // تبديل اللغة
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'fr' : 'ar';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    document.querySelector('h1').textContent = translate[currentLang].title;
    langBtn.textContent = translate[currentLang].button;

    const catTitles = document.querySelectorAll('.category h2');
    catTitles[0].textContent = translate[currentLang].categories[0];
    catTitles[1].textContent = translate[currentLang].categories[1];

    document.querySelectorAll('.program').forEach((el) => {
      const count = el.querySelector('.downloads').textContent;
      el.querySelector('p').innerHTML = `<span class="downloads">${count}</span> ${translate[currentLang].downloads}`;
    });
  });
});
