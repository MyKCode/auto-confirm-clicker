chrome.runtime.onInstalled.addListener(() => {
  console.log("Auto Confirm Clicker extension installed.");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "log") {
    console.log("[Auto Confirm Clicker]:", message.data);
  }
});