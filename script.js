const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");

function moveButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Desktop
noBtn.addEventListener("mouseover", moveButton);

// Mobile
noBtn.addEventListener("touchstart", moveButton);

function flipCard() {
  card.classList.add("flip");
}
