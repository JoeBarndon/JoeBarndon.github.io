const questions = [
    "Is today Monday?",
    "Is today Tuesday?",
    "Is today Wednesday?",
    "Is today Thursday?",
    "Is today Friday?"
  ];
  
  let currentQuestion = 0;
  
  const questionContainer = document.getElementById("question-container");
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");
  
  function showQuestion() {
    questionContainer.textContent = questions[currentQuestion];
  }
  
  yesButton.addEventListener("click", function() {
    currentQuestion++;
    if (currentQuestion === questions.length) {
      questionContainer.textContent = "Thank you for answering the questions!";
      yesButton.style.display = "none";
      noButton.style.display = "none";
    } else {
      showQuestion();
    }
  });
  
  noButton.addEventListener("click", function() {
    currentQuestion++;
    if (currentQuestion === questions.length) {
      questionContainer.textContent = "Thank you for answering the questions!";
      yesButton.style.display = "none";
      noButton.style.display = "none";
    } else {
      showQuestion();
    }
  });
  
  showQuestion();
  