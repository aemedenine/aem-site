document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("lang-toggle");
  let currentLang = "ar";

  const content = {
    ar: {
      title: "📥 تحميل البرامج",
      utilities: "🧰 الأدوات المساعدة",
      adobe: "🎨 برامج أدوبي",
      downloads: "عدد التحميلات: ",
      downloadText: "تحميل"
    },
    fr: {
      title: "📥 Téléchargement des logiciels",
      utilities: "🧰 Utilitaires",
      adobe: "🎨 Suite Adobe",
      downloads: "Nombre de téléchargements : ",
      downloadText: "Télécharger"
    },
    en: {
      title: "📥 Software Downloads",
      utilities: "🧰 Utilities",
      adobe: "🎨 Adobe Suite",
      downloads: "Downloads: ",
      downloadText: "Download"
    }
  };

  function updateLang() {
    const lang = currentLang;
    document.querySelector("h1").textContent = content[lang].title;
    document.getElementById("utilities-title").textContent = content[lang].utilities;
    document.getElementById("adobe-title").textContent = content[lang].adobe;

    document.querySelectorAll(".program-card").forEach((card) => {
      const count = card.getAttribute("data-count") || "0";
      card.querySelector(".download-count").textContent =
        content[lang].downloads + count;
      card.querySelector(".download-btn").textContent = content[lang].downloadText;
    });
  }

  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "ar" ? "fr" : currentLang === "fr" ? "en" : "ar";
    updateLang();
  });

  // تحديث عدّاد التحميلات (محليًا فقط)
  document.querySelectorAll(".download-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const parent = btn.closest(".program-card");
      let count = parseInt(parent.getAttribute("data-count")) || 0;
      count++;
      parent.setAttribute("data-count", count);
      parent.querySelector(".download-count").textContent =
        content[currentLang].downloads + count;
    });
  });

  updateLang();
});
