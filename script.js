let answers = [
    'Uhh, no.',
    'It\'s likely!',
    'Can you ask again?',
    'Let me Google that....',
    'Yes, I think so!.',
    'No, and don\'t ask me again.',
    'My heart says...maybe!',
    'You\'re better off flipping a coin.',
    'Signs point to yes.',
    'No.',
    'Yes.',
    'Nope.',
    'Don\'t count on it.',
    'Heck yeah!',
    'No, no noo!!!!!',
    'Refresh the page',
  ]
  
  let displayAnswer = function()
  {
    let index = Math.floor(Math.random() * answers.length);
    let answer = answers[index];
    let element = document.getElementById( 'answer' );
    element.innerHTML = '<br>' + answer;
  }