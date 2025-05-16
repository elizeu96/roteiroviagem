const cities = [
  { name: "Berlim", x: 635, y: 180, day: "Dias 1-2", country: "Alemanha" },
  { name: "Cracóvia", x: 675, y: 215, day: "Dia 3-4", country: "Polônia" },
  { name: "Praga", x: 620, y: 195, day: "Dia 5-6", country: "República Tcheca" },
  { name: "Viena", x: 630, y: 220, day: "Dia 7-8", country: "Áustria" },
  { name: "Bratislava", x: 640, y: 215, day: "Dia 9-10", country: "Eslováquia" },
  { name: "Budapeste", x: 650, y: 240, day: "Dia 11-12", country: "Hungria" },
  { name: "Liubliana", x: 610, y: 245, day: "Dia 13-14", country: "Eslovênia" },
  { name: "Veneza", x: 570, y: 270, day: "Dia 15-16", country: "Itália" },
  { name: "Zurique", x: 560, y: 230, day: "Dia 17-18", country: "Suíça" },
  { name: "Paris", x: 500, y: 200, day: "Dia 19-20", country: "França" },
  { name: "Bruxelas", x: 520, y: 180, day: "Dia 21 (manhã)", country: "Bélgica" },
  { name: "Luxemburgo", x: 540, y: 190, day: "Dia 21 (tarde)", country: "Luxemburgo" },
];

const mapWidth = 1000;
const mapHeight = 500;
const markersContainer = document.getElementById("markers");

// Cria marcadores dinamicamente com posição percentual
cities.forEach(({ name, x, y, day, country }) => {
  const marker = document.createElement("div");
  marker.classList.add("marker");

  // Converte px para %
  const leftPercent = (x / mapWidth) * 100;
  const topPercent = (y / mapHeight) * 100;

  marker.style.left = `${leftPercent}%`;
  marker.style.top = `${topPercent}%`;

  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.textContent = `${name}, ${country} - ${day}`;

  marker.appendChild(tooltip);
  markersContainer.appendChild(marker);
});

// Controle de zoom
const mapContainer = document.querySelector(".map-container");
let scale = 1;

function setZoom(newScale) {
  scale = Math.min(Math.max(newScale, 1), 5); // limita entre 1 e 5
  mapContainer.style.transform = `scale(${scale})`;
}

document.getElementById("zoom-in").addEventListener("click", () => {
  setZoom(scale + 0.5);
});

document.getElementById("zoom-out").addEventListener("click", () => {
  setZoom(scale - 0.5);
});

document.getElementById("reset-zoom").addEventListener("click", () => {
  setZoom(1);
});
