
 
  const toggleBtn = document.getElementById('dark-mode-toggle');

  // Check saved preference first
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    document.body.classList.add(savedTheme === 'dark' ? 'dark-mode' : '');
    toggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  } else {
    // If no saved preference, detect system theme
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark-mode');
      toggleBtn.textContent = '☀️';
    } else {
      toggleBtn.textContent = '🌙';
    }
  }

  // Toggle button click
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      toggleBtn.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      toggleBtn.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  });

