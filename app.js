/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */


const lightParticlesColor = {
  "value": "#dedede"
};
const darkParticlesColor = {
  "value": "#3c3c3c"
};

function initTheme() {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === null) {
    localStorage.setItem('theme', 'light');
    return 'light';
  }
  return currentTheme;
}

let theme = initTheme();
document.body.classList.add(theme);

console.log('theme', theme)

runParticles =  (theme) => {
  particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 7,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": theme==='dark' ? darkParticlesColor : lightParticlesColor,
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000"
        },
        "polygon": {
          "nb_sides": 6
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 156.33267593438848,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 40,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 1,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 8,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);
};


runParticles(theme);



function toggleTheme(theme) {
  localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
  return theme === 'light' ? 'dark' : 'light';
}

const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

toggleBtn.onclick = () => {
  console.log("on cliiiick");
  body.classList.remove(theme);
  theme = toggleTheme(theme);
  body.classList.add(theme);
  runParticles(theme);
};

