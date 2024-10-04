window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const content = document.querySelector('.content');
  
  // After page load, fade out preloader and show content
  preloader.classList.add('fade-out');
  setTimeout(() => {
    content.style.display = 'block'; // Show the main content
  }, 5000); // Wait for fade-out to complete
});

gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 2.5,
      delay: 5,
    }
  );
  
  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
    }
  );