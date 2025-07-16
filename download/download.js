// download.js
const langBtn = document.getElementById("lang-btn");

const texts = {
  ar: {
    title: "📥 تحميل البرامج",
    btn: "🇫🇷 Français",
    categories: ["🧰 الأدوات المساعدة", "🎨 مجموعة أدوبي"],
    downloads: "تحميل"
  },
  fr: {
    title: "📥 Télécharger les programmes",
    btn: "🇸🇦 عربي",
    categories: ["🧰 Outils Utiles", "🎨 Suite Adobe"],
    downloads: "Télécharger"
  }
};

let currentLang = "ar";

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "fr" : "ar";

  document.getElementById("page-title").textContent = texts[currentLang].title;
  langBtn.textContent = texts[currentLang].btn;

  const sectionTitles = document.querySelectorAll(".section-title");
  sectionTitles.forEach((title, index) => {
    title.textContent = texts[currentLang].categories[index];
  });

  const downloadBtns = document.querySelectorAll(".btn-download");
  downloadBtns.forEach(btn => {
    btn.textContent = texts[currentLang].downloads;
  });

  const dir = currentLang === "ar" ? "rtl" : "ltr";
  const lang = currentLang === "ar" ? "ar" : "fr";
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", lang);
});
