var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var reachedlevel = 0;
var curLevel = 0;
var gameStarted = false;
var delay = 1000;

// Main Enterance
if (navigator.userAgent.match(/Mobile/)) {
  $('#level-title').text('Tap Play to Start');
}

$('body').keypress(gameStarter);
$('.mobile-play').click(function() {
  $(this).hide();
  setTimeout(gameStarter, 1000);
});

function gameStarter() {
  // Bind Click Only if Key pressed
  $('.btn').click(function() {
    animatePress(this.id);
    playSound(this.id);
    checkAnswer(this.id);
  });

  //Main
  if (!gameStarted) {
    gameStarted = true;
    nextSequence();
  }
}

function nextSequence() {
  curLevel = 0;
  delay -= reachedlevel * 5;
  reachedlevel++;
  $('#level-title').text('Level ' + reachedlevel);
  $('#msg-head').text('> Watch Me <');
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  $('.btn').prop('disabled', true);
  // Play Complete nextSequence
  gamePattern.forEach(function(item, index) {
    setTimeout(function() {
      $('#' + item).fadeOut(100).fadeIn(100);
      playSound(item);
    }, delay * index);
  });
  setTimeout(function() {
    $('#msg-head').text('> Play Now <');
    $('.btn').prop('disabled', false);
  }, delay * gamePattern.length - 800);
}

function checkAnswer(curColor) {
  if (gamePattern[curLevel] !== curColor) {
    gameOver();
  } else {
    curLevel++;
    if (gameStarted && curLevel === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, delay);
    }
  }
}

function gameOver() {
  gamePattern = [];
  reachedlevel = 0;
  gameStarted = false;
  playSound('wrong');
  $('.btn').unbind('click');
  $('#level-title').text('Game Over!');
  $('#msg-head').text('Press Any Key to Restart');
  $('body').addClass('game-over');
  setTimeout(function() {
    $('body').removeClass('game-over');
  }, 200);
  console.log('Game Over!')
  // Mobile Changes
  if (navigator.userAgent.match(/Mobile/)) {
    $('#msg-head').text('Tap Play to Start');
    $('.mobile-play').show();
  }
}

function playSound(name) {
  audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

function animatePress(currentColour) {
  $('#' + currentColour).addClass('pressed');
  setTimeout(function() {
    $('#' + currentColour).removeClass('pressed');
  }, 100);
}
