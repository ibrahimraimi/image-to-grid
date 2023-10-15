import Lenis from "@studio-freight/lenis";

const initSmoothScrolling = () => {
  const lenis = new Lenis({
    lerp: 0.4,
    smoothWheel: true,
  });
  const scrollFn = () => {
    lenis.raf();
    requestAnimationFrame(scrollFn);
  };
  requestAnimationFrame(scrollFn);
};

export default initSmoothScrolling;
