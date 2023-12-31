import { useCallback } from "react";
// import Particles from "react-particles";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { Color2Particles, ColorParticles, DiwaliParticles, NeuralParticles } from "./../data/particlesData";
import { loadFull } from "tsparticles";

export default function Particle(props) {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
    // await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
  const options = {
    "neural": NeuralParticles("#000000", "#ffffff"),
    "colorDot1": ColorParticles(),
    "colorDot2": Color2Particles(),
    "diwali": DiwaliParticles()
  }
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{ zIndex: 0 }}
      className="fireworks"
      loaded={particlesLoaded}
      options={options[props?.option_name]}
    // options={{
    //   fullScreen: true,
    //   background: {
    //     image: " linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
    //   },
    //   particles: {
    //     number: { value: 10, density: { enable: true, value_area: 600 } },
    //     color: { value: "#ffffff" },
    //     shape: {
    //       type: "square",
    //       stroke: { width: 0, color: "#000000" },
    //       polygon: { nb_sides: 5 },
    //     },
    //     opacity: {
    //       value: 0.25,
    //       random: true,
    //       anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    //     },
    //     size: {
    //       value: 29,
    //       random: true,
    //       anim: { enable: false, speed: 2, size_min: 0.1, sync: false },
    //     },
    //     line_linked: {
    //       enable: false,
    //       distance: 300,
    //       color: "#ffffff",
    //       opacity: 0,
    //       width: 0,
    //     },
    //     move: {
    //       enable: true,
    //       speed: 0.5,
    //       direction: "top",
    //       straight: true,
    //       out_mode: "out",
    //       bounce: false,
    //       attract: { enable: false, rotateX: 600, rotateY: 1200 },
    //     },
    //   },
    //   interactivity: {
    //     detect_on: "canvas",
    //     events: {
    //       onhover: { enable: false, mode: "repulse" },
    //       onclick: { enable: false, mode: "push" },
    //       resize: true,
    //     },
    //     modes: {
    //       grab: { distance: 800, line_linked: { opacity: 1 } },
    //       bubble: {
    //         distance: 790,
    //         size: 79,
    //         duration: 2,
    //         opacity: 0.8,
    //         speed: 3,
    //       },
    //       repulse: { distance: 400, duration: 0.4 },
    //       push: { particles_nb: 4 },
    //       remove: { particles_nb: 2 },
    //     },
    //   },
    //   retina_detect: true,
    // }}
    />
  );
}
