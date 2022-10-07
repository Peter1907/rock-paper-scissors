const getWinner = (player_1, player_2) => {
  if (player_1 === 'rock') {
    switch (player_2) {
      case 'rock':
        return "IT'S A TIE";
      case 'paper':
        return "YOU LOSE";
      case 'scissors':
        return "YOU WIN";
      case 'lizard':
        return "YOU WIN";
      case 'spock':
        return "YOU LOSE";
      default:
        return;
    }
  } else if (player_1 === 'paper') {
    switch (player_2) {
      case 'rock':
        return "YOU WIN";
      case 'paper':
        return "IT'S A TIE";
      case 'scissors':
        return "YOU LOSE";
      case 'lizard':
        return "YOU LOSE";
      case 'spock':
        return "YOU WIN";
      default:
        return;
    }
  } else if (player_1 === 'scissors') {
    switch (player_2) {
      case 'rock':
        return "YOU LOSE";
      case 'paper':
        return "YOU WIN";
      case 'scissors':
        return "IT'S A TIE";
      case 'lizard':
        return "YOU WIN";
      case 'spock':
        return "YOU LOSE";
      default:
        return;
    }
  } else if (player_1 === 'lizard') {
    switch (player_2) {
      case 'rock':
        return "YOU LOSE";
      case 'paper':
        return "YOU WIN";
      case 'scissors':
        return "YOU LOSE";
      case 'lizard':
        return "IT'S A TIE";
      case 'spock':
        return "YOU WIN";
      default:
        return;
    }
  } else if (player_1 === 'spock') {
    switch (player_2) {
      case 'rock':
        return "YOU WIN";
      case 'paper':
        return "YOU LOSE";
      case 'scissors':
        return "YOU WIN";
      case 'lizard':
        return "YOU LOSE";
      case 'spock':
        return "IT'S A TIE";
      default:
        return;
    }
  }
};

export default getWinner;
