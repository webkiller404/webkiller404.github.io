
// Open the menu on click
document.querySelector('.open').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.add('active');
})

// Close the menu on click
document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.remove('active');
})





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
if (socialLinks) {
  observer1.observe(socialLinks);
}

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
if(mainMsg) {
  observer2.observe(mainMsg);
}


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
if(subMsg) {
  observer3.observe(subMsg);
}
