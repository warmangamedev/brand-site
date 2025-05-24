// === Inject brightModeSound audio element ===
const brightModeSound = document.createElement('audio');
brightModeSound.id = 'brightModeSound';
brightModeSound.preload = 'auto';

const source = document.createElement('source');
source.src = './resources/flashbang.wav';
source.type = 'audio/mpeg';

brightModeSound.appendChild(source);
document.body.appendChild(brightModeSound);

// === Set initial theme BEFORE DOMContentLoaded ===
// Default to dark mode if no preference saved
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  document.documentElement.classList.add('dark');
} else if (savedTheme === 'light') {
  document.documentElement.classList.remove('dark');
} else {
  // No preference? Default to dark
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
}

// === Add toggle functionality after DOM loads ===
document.addEventListener("DOMContentLoaded", () => {
  const toggleDark = document.getElementById('toggleDark');
  const brightModeSound = document.getElementById('brightModeSound');

  toggleDark?.addEventListener('click', function () {
    const isDark = document.documentElement.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';

    // Apply new theme
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);

    // Play sound only when switching *to* dark
    if (newTheme !== 'dark') {
      brightModeSound.currentTime = 0;
      brightModeSound.volume = 0.1;
      brightModeSound.play().catch(e => console.log("Sound play failed:", e));
    }

    console.log("Dark mode toggled to:", newTheme);
  });
});