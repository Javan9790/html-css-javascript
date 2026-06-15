const footballTeam = {
  team: "Chelsea FC",
  year: 2026,
  headCoach: "Thomas Tuchel",
  players: [
    { name: "Didier Drogba", position: "forward", isCaptain: false },
    { name: "Terry John", position: "midfielder", isCaptain: true },
    { name: "Ivanovic", position: "defender", isCaptain: false },
    { name: "Thibaut Courtois", position: "goalkeeper", isCaptain: false },
      { name: "Eden Hazard", position: "forward", isCaptain: false },
  ],
};

// Destructure for easy access
const { team, year, headCoach, players } = footballTeam;

// Display Team Meta Data
document.getElementById("team").textContent = team;
document.getElementById("year").textContent = year;
document.getElementById("head-coach").textContent = headCoach;

const playerCards = document.getElementById("player-cards");
const playersDropdown = document.getElementById("players");

// Function to render cards
const displayPlayers = (playerList) => {
  // Clear the container first to pass filtering tests
  playerCards.innerHTML = "";

  playerList.forEach(({ name, position, isCaptain }) => {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");

    playerCard.innerHTML = `
      <h2>${isCaptain ? "(Captain) " : ""}${name}</h2>
      <p>Position: ${position}</p>
    `;
    playerCards.appendChild(playerCard);
  });
};

// Initial Render
displayPlayers(players);

// Filter Event Listener
playersDropdown.addEventListener("change", (e) => {
  const value = e.target.value;
  
  if (value === "all") {
    displayPlayers(players);
  } else {
    const filteredPlayers = players.filter(player => player.position === value);
    displayPlayers(filteredPlayers);
  }
});
