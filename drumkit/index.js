numberOfbuttons = document.querySelectorAll('.drum').length;

var audioMap = {
  'w': 'tom-1',
  'a': 'tom-2',
  's': 'tom-3',
  'd': 'tom-4',
  'j': 'crash',
  'k': 'kick-bass',
  'l': 'snare'
}

for (var i=0; i<numberOfbuttons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    playDrum(this.innerHTML);
    addAnimation(this.innerHTML);
  });
}

document.addEventListener('keydown', function (event) {
  playDrum(event.key);
  addAnimation(event.key);
});

function playDrum(key) {
  var trackToPlay = audioMap[key.toLowerCase()];
  if (trackToPlay) {
    var curAudioFile = 'sounds/' + trackToPlay + '.mp3';
    audio = new Audio(curAudioFile).play();
  }
}

function addAnimation(currentKey) {
  var animatingCSSClass = 'pressed';
  var curButton = document.querySelector("." + currentKey.toLowerCase());
  curButton.classList.add(animatingCSSClass);
  setTimeout(function () {
    curButton.classList.remove(animatingCSSClass);
  }, 100);
}
