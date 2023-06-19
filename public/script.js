const backgroundButtons = document.querySelector('.background-buttons')
const skillAnimations = document.querySelector('.video-container')
const skillsEven = document.querySelectorAll('.skills-grid-container li:nth-child(even)');
const skillsOdd = document.querySelectorAll('.skills-grid-container li:nth-child(odd)');
const simplifyButton = document.querySelector('.simplify-cv')
const skillAnimationsBanner = document.querySelector('.skills-animation-container')
const details = document.querySelectorAll('details')
const skillsRefined = document.querySelector('.skills-refined')
const refinedIntro = document.querySelector('.refined-intro')
const refinedExperience = document.querySelector('.refined-experience')

const skillsArray = Array.from(skillsEven);
const skillsArray2 = Array.from(skillsOdd);
const vid1 = document.querySelector('.video1')
const vid2 = document.querySelector('.video2')


// JavaScript Enabled?

backgroundButtons.classList.add('js-enabled')
skillAnimations.classList.add('js-enabled')
simplifyButton.classList.add('js-enabled')

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

lottiePlayer.addEventListener('click', () => {
  lottiePlayer.play();
});



// simplify button pressed

simplifyButton.addEventListener('click', () => {

  skillAnimationsBanner.classList.toggle('display-none')
  skillsRefined.classList.toggle('display-block')
  refinedIntro.classList.toggle('display-block')
  refinedExperience.classList.toggle('display-block')


    details.forEach(detail => {
      detail.classList.toggle('display-none')
    })
    
});


// skills animation continuous test

const ulElements = skillAnimationsBanner.querySelectorAll('ul');

  // Bereken de totale breedte van de ul-elementen
  let totalWidth = 0;
  ulElements.forEach((ul) => {
    totalWidth = ul.offsetWidth;
  });

  // Pas de breedte van de container aan
// skillAnimationsBanner.style.width = `${totalWidth}px`;

console.log(`${totalWidth}px`)