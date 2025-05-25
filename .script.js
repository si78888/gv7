// script.js
function turnOn() {
    document.getElementById("device-status").textContent = "تشغيل";
    document.getElementById("device-status").style.color = "green";
}

function turnOff() {
    document.getElementById("device-status").textContent = "إيقاف";
    document.getElementById("device-status").style.color = "red";
}

// إعداد اسم الجهاز
document.getElementById("device-name").textContent = "جهاز ذكي";