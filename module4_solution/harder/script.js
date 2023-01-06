(function (window) {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "jim",
  ];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLocaleLowerCase();

    if (firstLetter === "j") {
      window.byeSpeaker.speak(names[i]);
    } else {
      window.helloSpeaker.speak(names[i]);
    }
  }
})(window);
