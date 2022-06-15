let setMirrorButton = document.getElementById("setMirror");

setMirrorButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setMirroringMode,
  });
});

function setMirroringMode() {
  var els = document.getElementsByClassName("video-element");
  Array.prototype.forEach.call(els, function(el) {
    if (el.style.transform == "scale(-1, 1)") {
      el.style = 'transform: unset';
      chrome.runtime.sendMessage({ msg: "removeBadge" });
    } else {
      el.style = 'transform: scale(-1, 1)';
      chrome.runtime.sendMessage({ msg: "setBadge" });
    }
  });
}