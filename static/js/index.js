document.addEventListener("scroll", (event) => {
  const arrow = document.querySelector('#header-arrow');
  arrow.setAttribute("style", `opacity: ${Math.max(100 - 0.3* window.scrollY, 0)}%`)
});
