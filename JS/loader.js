document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById('loader');
  const minimumDisplayTime = 2000;
  const loadStartTime = Date.now();

  function hideLoadingScreen() {
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.display = 'none';
    }, 1000);
  }

  window.addEventListener('load', () => {
    const timeElapsed = Date.now() - loadStartTime;
    if (timeElapsed < minimumDisplayTime) {
      setTimeout(hideLoadingScreen, minimumDisplayTime - timeElapsed);
    } else {
      hideLoadingScreen();
    }
  });
});
