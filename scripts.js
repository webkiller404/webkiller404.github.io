
// Open the menu on click
document.querySelector('.open').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.add('active');
})

// Close the menu on click
document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.remove('active');
})


setTimeout(() => {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const splash = document.querySelector('.splash');

    header.style.display = 'initial';
    main.style.display = 'initial';
    footer.style.display = 'initial';

    splash.style.display = 'none';


}, 5000);


document.getElementById('navMission').addEventListener('touchend', () => {
  const mjMission = document.getElementById('mjMission');
  mjMission.play();
})

document.getElementById('navVision').addEventListener('touchend', () => {
  const mjVision = document.getElementById('mjVision');
  mjVision.play();
})


observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('fly-social');
      } else {
        entry.target.classList.remove('fly-social');
      }
    });
  });

  
const socialLinks = document.querySelector('.social-links');
observer1.observe(socialLinks);




observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('fly-intro');
      } else {
        entry.target.classList.remove('fly-intro');
      }
    });
  });

const mainMsg = document.querySelector('.main-msg');
observer2.observe(mainMsg);


observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('fly-intro-2');
      } else {
        entry.target.classList.remove('fly-intro-2');
      }
    });
  });

const subMsg = document.querySelector('.sub-msg');
observer3.observe(subMsg);
