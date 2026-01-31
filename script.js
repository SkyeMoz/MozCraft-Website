// Scroll button
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Dynamic Tutorials
const tutorials = [
  { title: "How to Install MozCraft", desc: "Step by step guide", thumbnail: "settings/thumbnails/install.png" },
  { title: "R15 Animations", desc: "Learn how to use R15 scripts", thumbnail: "settings/thumbnails/r15.png" },
  { title: "Block Placement Tricks", desc: "Fastest block placement tips", thumbnail: "settings/thumbnails/blocks.png" }
];

const tutorialContainer = document.getElementById('tutorialCards');

tutorials.forEach(t => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${t.thumbnail}" alt="${t.title}" style="width:100%; border-radius:10px;">
    <h3>${t.title}</h3>
    <p>${t.desc}</p>
  `;
  tutorialContainer.appendChild(card);
});

// Dynamic Scripts
const scripts = [
  { name: "Fast Build", desc: "Place blocks faster than ever." },
  { name: "Block Breaker", desc: "Easily break blocks with animation." }
];

const scriptList = document.getElementById('scriptList');

scripts.forEach(s => {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `<h3>${s.name}</h3><p>${s.desc}</p>`;
  scriptList.appendChild(div);
});
