// downloads.js
const langBtn = document.getElementById('lang-btn');
const isArabic = () => document.documentElement.lang === 'ar';

const translations = {
  ar: {
    utils: '🧰 الأدوات المساعدة',
    adobe: '🎨 مجموعة أدوبي',
    download: 'تحميل',
    title: '📥 تحميل البرامج',
    btnLang: '🇫🇷 Français',
  },
  fr: {
    utils: '🧰 Utilitaires',
    adobe: '🎨 Suite Adobe',
    download: 'Télécharger',
    title: '📥 Téléchargements',
    btnLang: '🇬🇧 English',
  },
  en: {
    utils: '🧰 Utilities',
    adobe: '🎨 Adobe Suite',
    download: 'Download',
    title: '📥 Downloads',
    btnLang: '🇦🇪 عربي',
  },
};

let currentLang = 'ar';

const programs = {
  util: [
    { name: 'Google Chrome', link: 'https://www.google.com/chrome/', img: 'icons/chrome.png', desc: 'متصفح سريع وآمن' },
    { name: 'Mozilla Firefox', link: 'https://www.mozilla.org/', img: 'icons/firefox.png', desc: 'متصفح حر ومفتوح المصدر' },
    { name: 'VLC Media Player', link: 'https://www.videolan.org/', img: 'icons/vlc.png', desc: 'مشغل فيديو يدعم جميع الصيغ' },
    { name: 'WinRAR', link: 'https://www.win-rar.com/', img: 'icons/winrar.png', desc: 'ضغط وفك ضغط الملفات' },
    { name: '7-Zip', link: 'https://www.7-zip.org/', img: 'icons/7zip.png', desc: 'برنامج أرشفة مجاني' },
    { name: 'CCleaner', link: 'https://www.ccleaner.com/', img: 'icons/ccleaner.png', desc: 'تنظيف النظام وتحسين الأداء' },
    { name: 'TeamViewer', link: 'https://www.teamviewer.com/', img: 'icons/teamviewer.png', desc: 'تحكم عن بعد بالحواسيب' },
    { name: 'AnyDesk', link: 'https://anydesk.com/', img: 'icons/anydesk.png', desc: 'التحكم عن بعد بأمان وسرعة' },
    { name: 'Notepad++', link: 'https://notepad-plus-plus.org/', img: 'icons/notepad.png', desc: 'محرر نصوص مطورين' },
    { name: 'Revo Uninstaller', link: 'https://www.revouninstaller.com/', img: 'icons/revo.png', desc: 'إزالة البرامج نهائيًا' },
    { name: 'CPU-Z', link: 'https://www.cpuid.com/softwares/cpu-z.html', img: 'icons/cpuz.png', desc: 'تحليل مكونات الجهاز' },
    { name: 'Rufus', link: 'https://rufus.ie/', img: 'icons/rufus.png', desc: 'تهيئة USB للإقلاع' },
  ],
  adobe: [
    { name: 'Adobe Acrobat Reader', link: 'https://get.adobe.com/reader/', img: 'icons/acrobat.png', desc: 'قراءة ملفات PDF' },
    { name: 'Adobe Photoshop', link: '#', img: 'icons/photoshop.png', desc: 'تعديل الصور باحتراف' },
    { name: 'Adobe Illustrator', link: '#', img: 'icons/illustrator.png', desc: 'تصميم فيكتور' },
    { name: 'Adobe Premiere Pro', link: '#', img: 'icons/premiere.png', desc: 'مونتاج فيديو احترافي' },
    { name: 'Adobe After Effects', link: '#', img: 'icons/aftereffects.png', desc: 'مؤثرات بصرية للفيديو' },
    { name: 'Adobe InDesign', link: '#', img: 'icons/indesign.png', desc: 'تصميم المجلات والكتب' },
    { name: 'Adobe Lightroom', link: '#', img: 'icons/lightroom.png', desc: 'تحرير صور فوتوغرافية' },
  ]
};

function renderPrograms(category, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  programs[category].forEach(program => {
    const countKey = `downloads-${program.name}`;
    let count = parseInt(localStorage.getItem(countKey)) || 0;

    const card = document.createElement('div');
    card.className = 'program-card';
    card.innerHTML = `
      <img src="${program.img}" alt="${program.name}">
      <h3>${program.name}</h3>
      <p>${program.desc}</p>
      <button class="download-btn">${translations[currentLang].download}</button>
      <div class="download-count">${count} تحميل</div>
    `;

    const btn = card.querySelector('.download-btn');
    btn.onclick = () => {
      count++;
      localStorage.setItem(countKey, count);
      card.querySelector('.download-count').textContent = `${count} تحميل`;
      window.open(program.link, '_blank');
    };

    container.appendChild(card);
  });
}

function switchLanguage() {
  currentLang = currentLang === 'ar' ? 'fr' : currentLang === 'fr' ? 'en' : 'ar';
  const t = translations[currentLang];
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('page-title').textContent = t.title;
  document.querySelector('[data-i18n="utils"]').textContent = t.utils;
  document.querySelector('[data-i18n="adobe"]').textContent = t.adobe;
  document.getElementById('lang-btn').textContent = t.btnLang;
  renderPrograms('util', 'util-programs');
  renderPrograms('adobe', 'adobe-programs');
}

langBtn.addEventListener('click', switchLanguage);

// Init
renderPrograms('util', 'util-programs');
renderPrograms('adobe', 'adobe-programs');
