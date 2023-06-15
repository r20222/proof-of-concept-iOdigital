const backgroundButtons = document.querySelector('.background-buttons')
const skillAnimations = document.querySelector('.video-container')
const skillsEven = document.querySelectorAll('.skills-grid-container li:nth-child(even)');
const skillsOdd = document.querySelectorAll('.skills-grid-container li:nth-child(odd)');

const skillsArray = Array.from(skillsEven);
const skillsArray2 = Array.from(skillsOdd);
const vid1 = document.querySelector('.video1')
const vid2 = document.querySelector('.video2')


// JavaScript Enabled?

backgroundButtons.classList.add('js-enabled')
skillAnimations.classList.add('js-enabled')


// verander body background 

const radioButtons = document.querySelectorAll('input[type="radio"]');
const bodyElement = document.querySelector('body');

// De onderstaande code kijkt welke radiobutton aangevinkt is, daarna verwijderd het alle classnames, en voegt alleen de value classname toe.
radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', () => {
      if (radioButton.checked) {
        bodyElement.className = ''; // Verwijder alle bestaande achtergrondklassen
        bodyElement.classList.add(radioButton.value); // Voeg de geselecteerde achtergrondklasse toe
      }
    });
  });


  // skills animation

  skillsArray.forEach(skill => {
    skill.addEventListener('click', () => {
      if (vid2.classList.contains('skill-clicked')) {
        vid2.classList.remove('skill-clicked');
        vid1.classList.add('skill-clicked');
      } else {
        vid1.classList.add('skill-clicked');
      }
    })
  });

  skillsArray2.forEach(skill => {
    skill.addEventListener('click', () => {
      if (vid1.classList.contains('skill-clicked')) {
        vid1.classList.remove('skill-clicked');
        vid2.classList.add('skill-clicked');
      } else {
        vid2.classList.add('skill-clicked');
      }
      
    })
  });


// hire button animatie
  const lottiePlayer = document.getElementById('lottiePlayer');
  // const partyParty = document.getElementById('lottiePlayer2');

lottiePlayer.addEventListener('click', () => {
  // partyParty.classList.add('hire-clicked')

  lottiePlayer.play();
  // partyParty.play()
});

// setTimeout(() => {
//   partyParty.classList.remove('hire-clicked');
// }, 3000);


