class racer{
  constructor(name, speed, handling, power, points = 0){
    this.name = name;
    this.speed = speed;
    this.handling = handling;
    this.power = power;
    this.points = points;
  }
}
const mario = new racer("Mario", 4, 3, 3);
const luigi = new racer("Luigi", 3, 4, 4);
const bowser = new racer("Bowser", 5, 2, 5);
const peach = new racer("Peach", 3, 4, 2);
const donkeyKong = new racer("Donkey Kong", 2, 2, 5);

const racersList = [mario, luigi, bowser, peach, donkeyKong];

function pickTwoRacers(list) {
  const firstIndex = Math.floor(Math.random() * list.length);
  const secondIndex = (firstIndex + Math.floor(Math.random() * (list.length - 1)) + 1) % list.length;
  return [list[firstIndex], list[secondIndex]];
}

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}


async function getRandomBlock() {
  let random = Math.random();
  if (random < 0.33) return "RETA";
  if (random < 0.66) return "CURVA";
  return "CONFRONTO";
}


async function logRollResult(racerName, block, diceResult, attribute) {
  console.log(
    `${racerName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(racer1, racer2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + racer1.speed;
      totalTestSkill2 = diceResult2 + racer2.speed;

      await logRollResult(
        racer1.name,
        "velocidade",
        diceResult1,
        racer1.speed
      );

      await logRollResult(
        racer2.name,
        "velocidade",
        diceResult2,
        racer2.speed
      );
    }

    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + racer1.handling;
      totalTestSkill2 = diceResult2 + racer2.handling;

      await logRollResult(
        racer1.name,
        "manobrabilidade",
        diceResult1,
        racer1.handling
      );

      await logRollResult(
        racer2.name,
        "manobrabilidade",
        diceResult2,
        racer2.handling
      );
    }

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + racer1.power;
      let powerResult2 = diceResult2 + racer2.power;

      console.log(`${racer1.name} confrontou com ${racer2.name}! 🥊`);

      await logRollResult(
        racer1.name,
        "poder",
        diceResult1,
        racer1.power
      );

      await logRollResult(
        racer2.name,
        "poder",
        diceResult2,
        racer2.power
      );

      if (powerResult1 > powerResult2 && racer2.points > 0) {
        console.log(
          `${racer1.name} venceu o confronto! ${racer2.name} perdeu 1 ponto 🐢`
        );
        racer2.points--;
      }

      if (powerResult2 > powerResult1 && racer1.points > 0) {
        console.log(
          `${racer2.name} venceu o confronto! ${racer1.name} perdeu 1 ponto 🐢`
        );
        racer1.points--;
      }

      console.log(
        powerResult2 === powerResult1
          ? "Confronto empatado! Nenhum ponto foi perdido"
          : ""
      );
    }

    // verificando o vencedor
    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${racer1.name} marcou um ponto!`);
      racer1.points++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${racer2.name} marcou um ponto!`);
      racer2.points++;
    }

    console.log("-----------------------------");
  }
}

async function declareWinner(racer1, racer2) {
  console.log("Resultado final:");
  console.log(`${racer1.name}: ${racer1.points} ponto(s)`);
  console.log(`${racer2.name}: ${racer2.points} ponto(s)`);

  if (racer1.points > racer2.points)
    console.log(`\n${racer1.name} venceu a corrida! Parabéns! 🏆`);
  else if (racer2.points > racer1.points)
    console.log(`\n${racer2.name} venceu a corrida! Parabéns! 🏆`);
  else console.log("A corrida terminou em empate");
}

(async function main() {
  const [player1, player2] = pickTwoRacers(racersList);
  console.log(
    `🏁🚨 Corrida entre ${player1.name} e ${player2.name} começando...\n`
  );

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();
