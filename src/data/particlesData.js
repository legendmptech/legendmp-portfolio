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
export const DiwaliParticles = async () => {
  return await {
    fullScreen: {
      enable: true,
    },
    detectRetina: true,
    background: {
      color: "#000",
    },
    fpsLimit: 60,
    emitters: {
      direction: "top",
      life: {
        count: 0, //no. of fireworks
        duration: 0.1,
        delay: 0.1,
      },
      rate: {
        delay: 0.03,
        quantity: 1,
      },
      size: {
        width: 100,
        height: 0,
      },
      position: {
        y: 100,
        x: 50,
      },
    },
    particles: {//properties of the main firework particle
      number: {
        value: 0, //to randomiser the number of particles
      },
      destroy: {
        mode: "split", //to get the fireworks effect
        split: {
          rate: {
            value: 100, //amount of splits
          },
          particles: {
            // setting properties of those particles formed after splitting
            color: {
              value: [
                "#FFC0CB" /*Pink*/,
                "#FFB6C1" /*LightPink*/,
                "#FF69B4" /*HotPink*/,
                "#FF1493" /*DeepPink*/,
                "#DB7093" /*PaleVioletRed*/,
                "#C71585" /*MediumVioletRed*/,
                "#00FFFF", //acqua
                "rgb(124, 252, 0)", //grassy green
              ],
            },
            opacity: {
              value: 1,
              animation: {
                enable: true,
                speed: 0.2,
                minimumValue: 0.1,
                sync: false,
                startValue: "max", //multiple fireworks
                destroy: "min",
              },
            },
            shape: {
              type: "star",
            },
            size: {
              value: 1,
              animation: {
                enable: false, //to get the sparkly feeling
              },
            },
            life: {
              count: 1, //amount of time
              duration: {
                value: {
                  min: 1,
                  max: 2,
                },
              },
            },
            move: {
              //all about firework showers
              enable: true, // to get the fireworks effect
              gravity: {
                enable: false, //stops gravity from pulling them up
              },
              speed: 3, //speed of the fireworks
              direction: "none", //direction of the fireworks
              outMode: "destroy", // avoids overlapping of fireworks
            },
          },
        },
      },
      life: {
        count: 1,
      },
      shape: {
        type: "line",
      },
      size: {
        value: { min: 1, max: 100 },
        animation: {
          enable: true,
          sync: true,
          speed: 150,
          startValue: "random",
          destroy: "min",
        },
      },
      stroke: {
        color: {
          value: "#383838",
        },
        width: 1,
      },
      rotate: {
        path: true,//single path
      },
      move: {
        enable: true,
        gravity: {
          acceleration: 15,
          enable: true,
          inverse: true,//to avoid projectiles and follow a st line
          maxSpeed: 100,
        },
        speed: { min: 10, max: 20 },
        outModes: {
          default: "destroy",
        },
        trail: {// to give the split particle a trail so that we can see its dirn
          enable: true,
          length: 10,
        },
      },
    },
  }
}