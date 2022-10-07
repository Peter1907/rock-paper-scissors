const getWinner = (playerOne, playerTwo) => {
  if (playerOne === 'rock') {
    switch (playerTwo) {
      case 'rock':
        return "IT'S A TIE";
      case 'paper':
        return 'YOU LOSE';
      case 'scissors':
        return 'YOU WIN';
      case 'lizard':
        return 'YOU WIN';
      case 'spock':
        return 'YOU LOSE';
      default:
    }
  } else if (playerOne === 'paper') {
    switch (playerTwo) {
      case 'rock':
        return 'YOU WIN';
      case 'paper':
        return "IT'S A TIE";
      case 'scissors':
        return 'YOU LOSE';
      case 'lizard':
        return 'YOU LOSE';
      case 'spock':
        return 'YOU WIN';
      default:
    }
  } else if (playerOne === 'scissors') {
    switch (playerTwo) {
      case 'rock':
        return 'YOU LOSE';
      case 'paper':
        return 'YOU WIN';
      case 'scissors':
        return "IT'S A TIE";
      case 'lizard':
        return 'YOU WIN';
      case 'spock':
        return 'YOU LOSE';
      default:
    }
  } else if (playerOne === 'lizard') {
    switch (playerTwo) {
      case 'rock':
        return 'YOU LOSE';
      case 'paper':
        return 'YOU WIN';
      case 'scissors':
        return 'YOU LOSE';
      case 'lizard':
        return "IT'S A TIE";
      case 'spock':
        return 'YOU WIN';
      default:
    }
  } else if (playerOne === 'spock') {
    switch (playerTwo) {
      case 'rock':
        return 'YOU WIN';
      case 'paper':
        return 'YOU LOSE';
      case 'scissors':
        return 'YOU WIN';
      case 'lizard':
        return 'YOU LOSE';
      case 'spock':
        return "IT'S A TIE";
      default:
    }
  }
};

export default getWinner;
