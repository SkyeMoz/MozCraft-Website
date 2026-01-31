// -------------------------
// Scroll / Get Started
// -------------------------
const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', () => {
  document.body.style.overflow = 'auto'; // unlock scroll
  scrollToSection('about');
  showNotification("Welcome to MozCraft!");
});

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// -------------------------
// Notifications
// -------------------------
function showNotification(msg){
  const notif = document.getElementById('notification');
  notif.textContent = msg;
  notif.style.display = 'block';
  setTimeout(()=> notif.style.display = 'none', 2500);
}

// -------------------------
// Dynamic Tutorials (open link)
// -------------------------
const tutorials = [
  { title: "Keybinds", desc: "Learn all the hotkeys and controls.", thumbnail: "settings/thumbnails/keybinds.png", link: "https://example.com/keybinds" },
  { title: "Commands", desc: "Master Minecraft commands with MozCraft.", thumbnail: "settings/thumbnails/commands.png", link: "https://example.com/commands" },
  { title: "Editor", desc: "Customize your blocks with the editor.", thumbnail: "settings/thumbnails/editor.png", link: "https://example.com/editor" }
];

const tutorialContainer = document.getElementById('tutorialCards');

tutorials.forEach(t => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${t.thumbnail}" alt="${t.title}">
    <h3>${t.title}</h3>
  `;
  card.addEventListener('click', () => {
    window.open(t.link,'_blank');
    showNotification(`Opened ${t.title}`);
  });
  tutorialContainer.appendChild(card);
});

// -------------------------
// Dynamic Scripts (copy to clipboard)
// -------------------------
const scripts = [
  { name: "MozCraft", code: "print('Fast Build Activated')" },
  { name: "Build and Bricks", code: "print('Block Breaker Activated')" }
];

const scriptList = document.getElementById('scriptList');

scripts.forEach(s => {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `<h3>${s.name}</h3><p>Click to copy code</p>`;
  div.addEventListener('click', () => {
    navigator.clipboard.writeText(s.code).then(()=>{
      showNotification(`Copied "${s.name}" code`);
    });
  });
  scriptList.appendChild(div);
});
