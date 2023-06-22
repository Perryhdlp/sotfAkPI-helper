document.addEventListener("DOMContentLoaded", function () {
    const retrieveCookieBtn = document.getElementById("retrieveCookieBtn");
    const navigateBtn = document.getElementById("navigateBtn");
    const cookieValue = document.getElementById("cookieValue");
    const copyBtn = document.getElementById("copyBtn");
  
    retrieveCookieBtn.addEventListener("click", retrieveCookie);
    copyBtn.addEventListener("click", copyToClipboard);
    navigateBtn.addEventListener("click", navigateToWebsite);
  
    function retrieveCookie() {
      chrome.cookies.get({ url: "https://www.seaofthieves.com", name: "rat" }, function (cookie) {
        if (cookie) {
          cookieValue.value = cookie.value;
          copyBtn.style.display = cookieValue.value ? "inline-block" : "none";
          navigateBtn.style.display = cookieValue.value ? "inline-block" : "none";
        } else {
          cookieValue.value = "Cookie not found.";
          copyBtn.style.display = "none";
          navigateBtn.style.display = "none";
        }
      });
    }
  
    function copyToClipboard() {
      cookieValue.select();
      document.execCommand("copy");
      // Optionally provide visual feedback or display a message
      alert("Copied to clipboard!");
    }
  
    function navigateToWebsite() {
      window.open("https://www.google.com", "_blank");
    }
  });
  