// -------------------------
// Scroll / Get Started
// -------------------------
const startBtn = document.getElementById('startBtn');
const clickSound = document.getElementById('clickSound');

startBtn.addEventListener('click', () => {
  playClick();
  document.body.style.overflow = 'auto'; 
  scrollToSection('about');
  showNotification("Welcome to MozCraft!");
});

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// -------------------------
// Play click sound
// -------------------------
function playClick(){
  clickSound.currentTime = 0;
  clickSound.play();
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
// Dynamic Tutorials
// -------------------------
const tutorials = [
  { title: "Keybinds", desc: "Learn all the hotkeys and controls. Customize every key to your preference and master MozCraft Legacy with efficiency in Roblox and Minecraft environments.", thumbnail: "settings/thumbnails/keybinds.png", link: "https://example.com/keybinds" },
  { title: "Commands", desc: "Master Minecraft and Roblox commands to execute scripts faster, automate tasks, and become a pro builder or gamer with MozCraft Legacy.", thumbnail: "settings/thumbnails/commands.png", link: "https://example.com/commands" },
  { title: "Editor", desc: "Customize your blocks and scripts with our editor. Adjust settings, create new builds, and fully control your gameplay experience dynamically.", thumbnail: "settings/thumbnails/editor.png", link: "https://example.com/editor" }
];

const tutorialContainer = document.getElementById('tutorialCards');

tutorials.forEach(t => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${t.thumbnail}" alt="${t.title}">
    <h3>${t.title}</h3>
    <p>${t.desc}</p>
  `;
  card.addEventListener('click', () => {
    playClick();
    window.open(t.link,'_blank');
    showNotification(`Opened ${t.title}`);
  });
  tutorialContainer.appendChild(card);
});

// -------------------------
// Dynamic Scripts
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
    playClick();
    navigator.clipboard.writeText(s.code).then(()=>{
      showNotification(`Copied "${s.name}" code`);
    });
  });
  scriptList.appendChild(div);
});

// -------------------------
// Particle Background
// -------------------------
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
class Particle {
  constructor(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = `rgba(255,255,255,${Math.random()})`;
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if(this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw(){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();
  }
}

for(let i=0;i<100;i++){
  particlesArray.push(new Particle());
}

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(p=>{
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

animateParticles();

window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
