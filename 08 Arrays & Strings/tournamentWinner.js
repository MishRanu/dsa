function tournamentWinner(competitions, results) {
  // Write your code here.
  const scoreboard = {};
  for (let competition of competitions) {
    scoreboard[competition[0]]=0;
    scoreboard[competition[1]]=0;
  }

  for (let i = 0; i < results.length; i++) {
    const competition = competitions[i];
    const result = results[i];
    if(result===1) {
      scoreboard[competition[0]] =  scoreboard[competition[0]] + 1;
    } else if(result === 0) {
      scoreboard[competition[1]] = scoreboard[competition[1]] + 1;
    }
  }
  let maxWins = 0;
  let winner ='';
  for(team in scoreboard) {
    if(scoreboard[team] > maxWins) {
      maxWins = scoreboard[team];
      winner = team;
    }
  }
  return winner;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
