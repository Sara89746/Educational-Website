
  const html       = document.documentElement;
  const toggleBtn  = document.getElementById('themeToggle');
  const icon       = document.getElementById('themeIcon');

  const saved = localStorage.getItem('learnverse-theme') || 'dark';
  html.setAttribute('data-theme', saved);
  icon.className = saved === 'dark' ? 'fas fa-moon' : 'fas fa-sun';

  toggleBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('learnverse-theme', next);
    icon.className = next === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  });

  // ── Stars (Dark Mode Only) ──
  const starsContainer = document.getElementById('stars');
  for (let i = 0; i < 80; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    s.style.cssText = `
      left:${Math.random()*100}vw;
      top:${Math.random()*100}vh;
      width:${Math.random()*2.5+1}px;
      height:${Math.random()*2.5+1}px;
      --d:${Math.random()*4+2}s;
      --op:${Math.random()*0.5+0.2};
      animation-delay:${Math.random()*5}s
    `;
    starsContainer.appendChild(s);
  }

  // ── Hamburger ──
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });

  // ── Reveal on Scroll ──
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
