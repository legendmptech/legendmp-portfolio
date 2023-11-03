export const NeuralParticles = (pColor, bgColor) => {
  return {
    background: {
      color: {
        value: bgColor || "#0d47a1",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: pColor || "#ffffff",
      },
      links: {
        color: pColor || "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };
};
export const ColorParticles = () => {
  return {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#FF6F61", "#6B4226", "#D9BF77", "#ACD8AA", "#5E738F"]
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.8,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 8,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 3,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#FFFFFF",
        "opacity": 0.6,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "random",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "bubble"
        }
      },
      "modes": {
        "repulse": {
          "distance": 100,
          "duration": 0.4
        },
        "bubble": {
          "distance": 200,
          "size": 10,
          "duration": 1,
          "opacity": 0.8
        }
      }
    }
  }

};
export const Color2Particles = () => {
  return {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#e83fd4", "#7a3fe8", "#eb5d4d", "#eba14d", "#4deb5b"]
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.8,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 8,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 3,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#FFFFFF",
        "opacity": 0.6,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "random",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "bubble"
        }
      },
      "modes": {
        "repulse": {
          "distance": 100,
          "duration": 0.4
        },
        "bubble": {
          "distance": 200,
          "size": 10,
          "duration": 1,
          "opacity": 0.8
        }
      }
    }
  }

};
