(function() {
  function overrideDialogs() {
    window.alert = function(message) {
      console.log("Blocked alert:", message);
    };
    window.confirm = function(message) {
      console.log("Auto-confirmed:", message);
      return true;
    };
    window.prompt = function(message, defaultText) {
      console.log("Auto-filled prompt:", message);
      return defaultText || "";
    };
  }

  function clickConfirmationButton() {
    const confirmButton = document.querySelector(".layui-layer-btn0");
    if (confirmButton) {
      console.log("Auto-clicking confirmation button:", confirmButton);
      confirmButton.click();
    }
  }

  overrideDialogs();

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(overrideDialogs, 1000);
    setInterval(clickConfirmationButton, 1000);
  });
})();