const backgroundButtons = document.querySelector('.background-buttons')
const skillAnimations = document.querySelector('.video-container')
const skillsEven = document.querySelectorAll('.skills-grid-container li:nth-child(even)');
const skillsOdd = document.querySelectorAll('.skills-grid-container li:nth-child(odd)');
const simplifyButton = document.querySelector('.simplify-cv')
const skillAnimationsBanner = document.querySelector('.skills-animation-container')
const details = document.querySelectorAll('details')
const skillsRefined = document.querySelectorAll('.skills-refined')
const refinedIntro = document.querySelectorAll('.refined-intro')
const refinedExperience = document.querySelectorAll('.refined-experience')
const introduction = document.querySelectorAll('.introduction')
const compareButton = document.querySelector('.compare-cv')
const main = document.querySelector('main')
const resumeOne = document.querySelector('.first-resume')
const resumeTwo = document.querySelector('.second-resume')
const profilePicture = document.querySelectorAll('.profile-picture')
const skillsGridRefined = document.querySelectorAll('.skills-grid-container-refined')
const favorite = document.querySelector('.hire-button')
const skillsArray = Array.from(skillsEven);
const skillsArray2 = Array.from(skillsOdd);
const vid1 = document.querySelector('.video1')
const vid2 = document.querySelector('.video2')

// JavaScript Enabled?
backgroundButtons.classList.add('js-enabled')
skillAnimations.classList.add('js-enabled')
simplifyButton.classList.add('js-enabled')
compareButton.classList.add('js-enabled')

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

  skillsRefined.forEach(skill =>{
    skill.classList.toggle('display-block')
  })
  refinedIntro.forEach(refinedIntro =>{
    refinedIntro.classList.toggle('display-block')
  })
  refinedExperience.forEach(experience =>{
    experience.classList.toggle('display-block')
  })
  introduction.forEach(intro => {
    intro.classList.toggle('display-none')
  })
  details.forEach(detail => {
    detail.classList.toggle('display-none')
  })
    
  // simplifyButton.classList.toggle('simplify-clicked')

});

// bron voor maken doorlopende banner: https://codepen.io/Jaskaranbir/pen/JKNgMb?editors=1100
// skills animation continuous test

// const ulElements = skillAnimationsBanner.querySelectorAll('ul');

//   // Bereken de totale breedte van de ul-elementen
//   let totalWidth = 0;
//   ulElements.forEach((ul) => {
//     totalWidth = ul.offsetWidth;
//   });

  // Pas de breedte van de container aan
// skillAnimationsBanner.style.width = `${totalWidth}px`;


// compare button

compareButton.addEventListener('click', () => {
  main.classList.toggle('compare-clicked')
  resumeTwo.classList.toggle('display-block')
  resumeOne.classList.toggle('compare-clicked')
  resumeTwo.classList.toggle('compare-clicked')
  profilePicture.forEach(picture => {
    picture.classList.toggle('compare-clicked')
  })
  skillAnimationsBanner.classList.toggle('compare-clicked')

  compareButton.classList.toggle('compare-button-clicked')

  skillAnimations.classList.toggle('display-none')
  favorite.classList.toggle('display-none')
});


// popover 
elementSupportsAttribute("popover")

function elementSupportsAttribute(attribute) {
  var popover = document.querySelector('#my-popover');
  if (attribute in popover) {
    console.log(true);

  } else {
    console.log(false);
  }
};