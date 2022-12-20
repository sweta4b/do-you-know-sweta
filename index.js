var readlineSync = require('readline-sync')

var score = 0
var userName = readlineSync.question("What's your name? ")

console.log('Welcome ' + userName + ' to - DO YOU KNOW SWETA?')
console.log('\n')

// data of high score
var highScores = [
  {
    name: "SUMIT",
    score: 5,
  },
  {
    name: 'REENA',
    score: 4,
  },
]

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log('Right! Seems like you really know Sweta.')
    score = score + 1
  } else {
    console.log('Oops! the correct answer is ' + answer)

  }

  console.log('Current Score: ', score)
  console.log('-----------------')
}

// array of objects
var questions = [
  {
    question: 'Where do I live? ',
    answer: 'Pune',

  },
  {
    question: 'Which is my favorite series? ',
    answer: 'Sherlock holmes',
  },

  {
    question: 'Which is my favorire cartoon character? ',
    answer: 'Doraemon',
  },

  {
    question: 'Which is my favorite drink? ',
    answer: 'Cocacola',
  },
  {
    question: "Here's the last question - Which is my favorite song? ",
    answer: 'Memories',
  },
]

// loop
for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}


if (score > 3) {
  console.log('YAY! You SCORED: ', score)
} else {
  console.log('You SCORED: ', score)
}
console.log('-------------------')

console.log('Check out the high scorers - ')
for (var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + ': ' + highScores[i].score)
}
console.log('-------------------')

console.log(
  'If you have scored better than the current high scorers then send me a screenshot of your score, so that I can add you to the high scorers list.'
)
console.log('Thank you for playing!')
