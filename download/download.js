document.addEventListener("DOMContentLoaded", () => {
  // إعداد عداد التحميل
  document.querySelectorAll(".download-btn").forEach(button => {
    const key = "downloads_" + button.dataset.key;
    const counter = document.getElementById("count-" + button.dataset.key);

    // عرض العدد الحالي
    const count = localStorage.getItem(key) || 0;
    counter.textContent = count;

    // زيادة العداد عند التحميل
    button.addEventListener("click", () => {
      const newCount = parseInt(localStorage.getItem(key) || 0) + 1;
      localStorage.setItem(key, newCount);
      counter.textContent = newCount;
    });
  });

  // زر تغيير اللغة (اختياري - للتطوير لاحقًا)
  const langBtn = document.getElementById("lang-btn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      alert("🌍 ميزة تغيير اللغة ستُفعّل قريبًا");
    });
  }
});
