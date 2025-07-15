// download/download.js

const langBtn = document.getElementById('lang-btn');
let lang = 'ar'; // اللغة الافتراضية

const translations = {
  ar: {
    pageTitle: '📥 تحميل البرامج',
    sections: [
      { title: '🧰 الأدوات المساعدة' },
      { title: '🎨 مجموعة أدوبي' }
    ],
    cards: [
      ['Google Chrome', 'متصفح سريع وآمن', '⬇️ حمل الآن', 'تحميلات'],
      ['WinRAR', 'برنامج فك الضغط', '⬇️ حمل الآن', 'تحميلات'],
      ['VLC Player', 'مشغل فيديوهات شامل', '⬇️ حمل الآن', 'تحميلات'],
      ['Photoshop', 'برنامج تعديل الصور الشهير', '⬇️ حمل الآن', 'تحميلات'],
      ['Illustrator', 'تصميم الرسومات المتجهة', '⬇️ حمل الآن', 'تحميلات'],
      ['Acrobat Reader', 'قراءة ملفات PDF', '⬇️ حمل الآن', 'تحميلات']
    ],
    footer: 'Atelier Electronique Médenine © 2025'
  },
  fr: {
    pageTitle: '📥 Téléchargement des logiciels',
    sections: [
      { title: '🧰 Utilitaires' },
      { title: '🎨 Suite Adobe' }
    ],
    cards: [
      ['Google Chrome', 'Navigateur rapide et sécurisé', '⬇️ Télécharger', 'téléchargements'],
      ['WinRAR', 'Logiciel de décompression', '⬇️ Télécharger', 'téléchargements'],
      ['VLC Player', 'Lecteur vidéo polyvalent', '⬇️ Télécharger', 'téléchargements'],
      ['Photoshop', 'Logiciel célèbre de retouche photo', '⬇️ Télécharger', 'téléchargements'],
      ['Illustrator', 'Conception graphique vectorielle', '⬇️ Télécharger', 'téléchargements'],
      ['Acrobat Reader', 'Lecture de fichiers PDF', '⬇️ Télécharger', 'téléchargements']
    ],
    footer: 'Atelier Electronique Médenine © 2025'
  }
};

const sectionEls = document.querySelectorAll('section > h2');
const cardEls = document.querySelectorAll('.card');
const pageTitle = document.querySelector('header > h1');
const footerText = document.querySelector('footer > p');

function loadDownloadCounts() {
  const counts = {};
  cardEls.forEach(card => {
    const key = card.querySelector('.count').dataset.key;
    const count = localStorage.getItem('dl-count-' + key) || '0';
    counts[key] = count;
  });
  return counts;
}

function saveDownloadCount(key) {
  let count = localStorage.getItem('dl-count-' + key) || '0';
  count = parseInt(count) + 1;
  localStorage.setItem('dl-count-' + key, count);
  return count;
}

function updateCounts() {
  const counts = loadDownloadCounts();
  cardEls.forEach(card => {
    const key = card.querySelector('.count').dataset.key;
    const count = counts[key] || '0';
    card.querySelector('.count').textContent = `${count} ${translations[lang].cards[Array.from(cardEls).indexOf(card)][3]}`;
  });
}

function updateTexts() {
  pageTitle.textContent = translations[lang].pageTitle;
  footerText.textContent = translations[lang].footer;

  sectionEls.forEach((h2, idx) => {
    h2.textContent = translations[lang].sections[idx].title;
  });

  cardEls.forEach((card, idx) => {
    const t = translations[lang].cards[idx];
    card.querySelector('h3').textContent = t[0];
    card.querySelector('p').textContent = t[1];
    card.querySelector('a.btn-download').textContent = t[2];
  });

  updateCounts();
}

langBtn.addEventListener('click', () => {
  lang = (lang === 'ar') ? 'fr' : 'ar';
  langBtn.textContent = (lang === 'ar') ? '🇫🇷 Français' : '🇸🇦 العربية';
  updateTexts();
});

// تتبع عدد التحميلات
cardEls.forEach(card => {
  const link = card.querySelector('a.btn-download');
  const key = card.querySelector('.count').dataset.key;
  link.addEventListener('click', () => {
    const newCount = saveDownloadCount(key);
    card.querySelector('.count').textContent = `${newCount} ${translations[lang].cards[Array.from(cardEls).indexOf(card)][3]}`;
  });
});

// تهيئة النصوص والعدادات عند تحميل الصفحة
updateTexts();
