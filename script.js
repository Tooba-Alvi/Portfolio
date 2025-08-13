
  const aboutSection = document.querySelector('.about');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.classList.add('in-view');
        observer.unobserve(aboutSection); // Runs once
      }
    });
  }, { threshold: 0.2 });

  observer.observe(aboutSection);

