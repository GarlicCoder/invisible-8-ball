let answers = [
    'Uhh, no.',
    'It\'s likely!',
    'Can you ask again?',
    'Let me Google that....',
    'Yes, I think so!',
    'No, and don\'t ask me again.',
    'My heart says...maybe!',
    'You\'re better off flipping a coin.',
    'Signs point to yes.',
    'No.',
    'Yes.',
    'That\s a weird question!',
    'Nope.',
    'Don\'t count on it.',
    'Heck yeah!',
    'No, no, noo!!!!!',
    'Refresh the page.',
    'I\'m leaning towards yes!',
    'I\'m leaning towards no!',
    'Try asking someone else...',
    'Uh, I actually don\'t know the answer to this one.',
    'Sorry, I had my airpods in. Can you ask again?',
    '100% yes, no questions asked.',
    '100% no, that sounds ridiculous.',
    'I\m like 50-50 (rip fifty fifty 😢)'
  ]
  


  // JavaScript
function displayAnswer() {
  const ball = document.querySelector('.ball');
  const answer = document.getElementById('answer');

  // Add animation class
  ball.classList.add('animate');

  // Simulate getting an answer
  const answers = ["Yes", "No", "Maybe", "Ask again later"];
  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  answer.textContent = randomAnswer;

  // Remove the animation class after the animation duration
  setTimeout(() => {
      ball.classList.remove('animate');
  }, 500); 
}


  