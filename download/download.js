document.querySelectorAll('.btn-download').forEach((btn, index) => {
  const countSpan = btn.parentElement.querySelector('.downloads');
  let count = localStorage.getItem(`download_${index}`) || 0;
  countSpan.textContent = count;

  btn.addEventListener('click', () => {
    count++;
    localStorage.setItem(`download_${index}`, count);
    countSpan.textContent = count;
  });
});

document.getElementById('lang-btn').addEventListener('click', () => {
  const current = document.documentElement.lang;
  if (current === 'ar') {
    document.documentElement.lang = 'fr';
    document.documentElement.dir = 'ltr';
    document.querySelector('h1').textContent = '📥 Téléchargement';
    document.getElementById('lang-btn').textContent = '🇬🇧 English';
    document.querySelectorAll('h2')[0].textContent = '🧰 Utilitaires';
    document.querySelectorAll('h2')[1].textContent = '🎨 Suite Adobe';
  } else if (current === 'fr') {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    document.querySelector('h1').textContent = '📥 Software Downloads';
    document.getElementById('lang-btn').textContent = '🇸🇦 عربي';
    document.querySelectorAll('h2')[0].textContent = '🧰 Utilities';
    document.querySelectorAll('h2')[1].textContent = '🎨 Adobe Suite';
  } else {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.querySelector('h1').textContent = '📥 تحميل البرامج';
    document.getElementById('lang-btn').textContent = '🇫🇷 Français';
    document.querySelectorAll('h2')[0].textContent = '🧰 الأدوات المساعدة';
    document.querySelectorAll('h2')[1].textContent = '🎨 مجموعة أدوبي';
  }
});
