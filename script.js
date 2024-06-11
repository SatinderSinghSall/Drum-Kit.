
var NumberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < NumberOfDrumButtons; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function ()
  {
    var ButtonInnerHTML = this.innerText;

    MakeSound(ButtonInnerHTML);
    ButtonAnimation(ButtonInnerHTML);
  });
}

document.addEventListener("keypress",  function ()
{
  MakeSound(event.key);
  ButtonAnimation(event.key);
});

function MakeSound(key)
{
  switch (key)
  {
    case "w":
      var DrumAudio_tom1 = new Audio('./sounds/tom-1.mp3');
      DrumAudio_tom1.play();
    break;

    case "a":
      var DrumAudio_tom2 = new Audio('./sounds/tom-2.mp3');
      DrumAudio_tom2.play();
    break;

    case "s":
      var DrumAudio_tom3 = new Audio('./sounds/tom-3.mp3');
      DrumAudio_tom3.play();
    break;

    case "d":
      var DrumAudio_tom4 = new Audio('./sounds/tom-4.mp3');
      DrumAudio_tom4.play();
    break;

    case "j":
      var DrumAudio_snare = new Audio('./sounds/snare.mp3');
      DrumAudio_snare.play();
    break;

    case "k":
      var DrumAudio_crash = new Audio('./sounds/crash.mp3');
      DrumAudio_crash.play();
    break;

    case "l":
      var DrumAudio_kick = new Audio('./sounds/kick-bass.mp3');
      DrumAudio_kick.play();
    break;

    default:
    console.log("Invalid Entry. Please try with proper key.");
  }
}

function ButtonAnimation(CurrentKey)
{
  var ActiveButton = document.querySelector("." + CurrentKey);
  ActiveButton.classList.add("pressed");
  setTimeout(function()
  {
    ActiveButton.classList.remove("pressed");
  }, 100);
}
