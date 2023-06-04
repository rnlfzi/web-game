const compRandom = () => {
  const choice = ["batu", "gunting", "kertas"];
  const randomChoice = choice[Math.floor(Math.random() * choice.length)];
  
  return randomChoice;
}

const findWinner = (player, comp) => {
  if (player === "batu" && comp === "kertas") return "kalah";
  else if (player === "batu" && comp === "gunting") return "menang";
  else if (player === "kertas" && comp === "gunting") return "kalah";
  else if (player === "kertas" && comp === "batu") return "menang";
  else if (player === "gunting" && comp === "batu") return "kalah";
  else if (player === "gunting" && comp === "kertas") return "menang";
  else return "draw";
}

const generatePoint = (result) => {
  if (result === "menang") return 3;
  else if (result === "draw") return 1;
  else return 0;
}

export const startGame = (player) => {
  const comp = compRandom();
  const result = findWinner(player, comp);
  const point = generatePoint(result)

  return {
    comp, result, point
  }
}