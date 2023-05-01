export const makeSmoothScroll = () => {
  const intViewportHeight = window.innerHeight;

  window.scrollBy({
    top: intViewportHeight * 0.8,
    behavior: "smooth",
  });
};
