const checkAnswer = document.getElementById('check-answer');
const refresh = document.getElementById('refresh');
var question = document.getElementById('question');
var result = document.getElementById('result');
const randomNumber = Math.floor(Math.random() * 50);
const optionList = document.querySelectorAll('.quiz-option li');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');

const score = document.getElementById('score');
const total = document.getElementById('total');
const totalEl = document.querySelector('.total');
var attempts = document.getElementById('attempts');
let attempt = parseInt(localStorage.getItem('attempt')) ||0;
let counter = parseInt(localStorage.getItem('counter')) || 0;
score.textContent = counter;
attempts.textContent = attempt;

window.onload = function() {
    // Check if the previous page was index.html
    if(document.referrer.endsWith("index.html")) {
        attempt = 0;
        localStorage.setItem('attempt',0);
        attempts.textContent = attempt;
        counter = 0;
        localStorage.setItem('counter', 0);
        score.textContent = counter;
        totalEl.classList.add('hide');
    }
}

if (attempt >= 10) {
    totalEl.classList.remove('hide');
    total.textContent = counter;
    counter =0;
}

document.getElementById('try').addEventListener('click',()=>{
      counter = 0;
      localStorage.setItem('counter', 0);
      score.textContent = counter;
      attempt = 0;
      attempts.textContent = attempt;
      totalEl.classList.add('hide');
});

// refresh
refresh.addEventListener('click',()=>{
    attempt++;
            attempts.textContent = attempt;
            localStorage.setItem('attempt', attempt.toString());
   
    window.location.reload();
  
});

// fetch data
 fetch('question.json')
.then(response => response.json())
.then(data => {
   
    const randomID = data[randomNumber];
   
    question.innerHTML = randomID.question;
     option1.textContent = randomID.options[0];
     option2.textContent = randomID.options[1];
     option3.textContent = randomID.options[2];
     option4.textContent = randomID.options[3];
    console.log(randomNumber)
    optionList.forEach(item => {
        item.addEventListener('click', () => {
            // Remove the 'selected' class from all list items
            optionList.forEach(li => {
                li.classList.remove('selected');
            });

            // Add the 'selected' class to the clicked list item
            item.classList.add('selected');

            // Get the content of the clicked list item
            
           checkAnswer.addEventListener("click",()=>{
            const selectedItemContent = item.textContent;
           
         var answer = randomID.answer;
            if(answer === selectedItemContent) {
                result.textContent = "Correct";
                result.style.background = 'green';
               
                counter++;
            score.textContent = counter;

            localStorage.setItem('counter', counter.toString());
            }else{
               result.textContent =  `Wrong (${answer})`;
               result.style.background = 'red';
            } 
         
           });
          
           // or do whatever you want with the content
        });
    });

})
.catch(error => {
console.log(error);
});

console.log(randomNumber);

