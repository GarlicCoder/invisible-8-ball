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
  
  let displayAnswer = function()
  {
    let index = Math.floor(Math.random() * answers.length);
    let answer = answers[index];
    let element = document.getElementById( 'answer' );
    element.innerHTML = '<br>' + answer;
  }


  const rotateBall = () => {
    let rotation = Math.floor(Math.random() * 180) + 90;
    const rotateInterval = setInterval(() => {
      rotation += Math.floor(Math.random() * 10) + 30;
      ballElement.style.transform = `rotate(${rotation}deg)`;
      if (rotation >= 360) {
        clearInterval(rotateInterval);
        setTimeout(() => {
          showAnswer();
          ballElement.style.transform = 'rotate(0deg)';
        }, 1000);
      }
    }, 10);
  };

  function myFunction() {
    var popup = document.getElementById("instructions");
    popup.classList.toggle("show");
  }