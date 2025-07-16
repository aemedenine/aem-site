// الوقت المباشر
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("ar-TN", { hour12: false });
  document.getElementById("clock").textContent = `🕒 ${timeString}`;
}
setInterval(updateClock, 1000);
updateClock();

// عدد الزيارات
let visits = localStorage.getItem("download_visits") || 0;
visits++;
localStorage.setItem("download_visits", visits);
document.getElementById("visit-count").textContent = `👁️ ${visits} زيارة`;

// POPUP LOGIC مع صورة ووصف وعداد
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupLink = document.getElementById("popup-link");
const popupImg = document.getElementById("popup-img");
const popupDesc = document.getElementById("popup-desc");
const popupCount = document.getElementById("popup-count");
const closeBtn = document.querySelector(".close-btn");

// أوصاف البرامج
const programDescriptions = {
  "Google Chrome": "متصفح سريع وآمن لتصفح الإنترنت.",
  "Mozilla Firefox": "متصفح مفتوح المصدر بميزات حماية متقدمة.",
  "WinRAR": "أداة ضغط واستخراج الملفات بسهولة.",
  "Adobe Reader": "لقراءة ملفات PDF باحترافية.",
  "Adobe Photoshop": "برنامج تصميم الصور الأشهر.",
  "Adobe Illustrator": "تصميم الرسومات المتجهة والفيكتور.",
  "Adobe Premiere": "تحرير الفيديوهات بشكل احترافي."
};

// عند الضغط على أي زر تحميل
document.querySelectorAll(".btn-download").forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const programCard = button.closest(".program");
    const title = programCard.querySelector("h3").textContent;
    const link = button.href;
    const img = programCard.querySelector("img").src;
    const desc = programDescriptions[title] || "برنامج مميز من اختيارك.";

    // تحميلات لكل برنامج
    const key = `downloads_${title}`;
    let count = localStorage.getItem(key) || 0;
    count++;
    localStorage.setItem(key, count);

    // تحديث محتوى النافذة
    popupTitle.textContent = `📥 ${title}`;
    popupLink.href = link;
    popupImg.src = img;
    popupDesc.textContent = desc;
    popupCount.textContent = count;

    popup.style.display = "block";
  });
});

// إغلاق النافذة
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// الضغط خارج النافذة
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
