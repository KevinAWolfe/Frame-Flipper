var setBadge = function(){
  chrome.action.setBadgeText({text: "ON"});
};

var removeBadge = function(){
  chrome.action.setBadgeText({ text: ""});
};

var setDarkIcon = function(){
  console.log("setDarkIcon called.");

  chrome.action.setIcon({
    path: {
      "16": "images/frame_flipper_dark16.png",
      "32": "images/frame_flipper_dark32.png",
      "48": "images/frame_flipper_dark48.png",
      "128": "images/frame_flipper_dark128.png"
    }
  });
};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
      if(request.msg == "setBadge") setBadge();
      if(request.msg == "removeBadge") removeBadge();
      if(request.scheme == "dark") setDarkIcon();
  }
);