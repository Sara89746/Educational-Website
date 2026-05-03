
(function () {
  const html = document.documentElement;
  const saved = localStorage.getItem('learnverse-theme') || 'dark';
  html.setAttribute('data-theme', saved);
  document.addEventListener('DOMContentLoaded', () => {
    const btn  = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');
    function updateIcon(theme) {
      if (!icon) return;
      icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }
    updateIcon(saved); 
    if (btn) {
      btn.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next    = current === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', next);
        localStorage.setItem('learnverse-theme', next);
        updateIcon(next);
    console.log
      });
    }
  });
})();