HTML CSS BabelResult Skip Results Iframe
const postDetails = document.querySelector(".post-details");
const postSidebar = document.querySelector(".post-sidebar");
const postSidebarContent = document.querySelector(".post-sidebar > div");

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: postSidebar,
  triggerHook: 0,
  duration: getDuration
}).addTo(controller);

if (window.matchMedia("(min-width: 768px)").matches) {
  scene.setPin(postSidebar, {pushFollowers: false});
}

// in your projects, you might want to debounce resize event for better performance
window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    scene.setPin(postSidebar, {pushFollowers: false});
  } else {
    scene.removePin(postSidebar, true);
  }
});

function getDuration() {
  return postDetails.offsetHeight - postSidebarContent.offsetHeight;
}
View Compiled

Resources1× 0.5× 0.25×Rerun