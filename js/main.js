
//GLOBAL SCOPE

// DATA

/****************************************************************************** */

// HOW DO I CREATE MY QUIZ QUESTIONS AND ANSWERS 

const quizData = [
    {
        question:"What is the capital of France?",
        A: "Berlin",
        B: "Madrid",
        C: "Paris",
        D: "Rome",
        correct: "C"
    },
    {
        question: "Which planet is known as the Red Planet?",
        A: "Earth",
        B: "Mars",
        C: "Jupiter",
        D: "Venus",
        correct: "B"
    },
    {
        question: "What is the largest ocean on Earth?",
        A: "Atlantic Ocean",
        B: "Indian Ocean",
        C: "Arctic Ocean",
        D: "Pacific Ocean",
        correct: "D"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        A: "William Shakespeare",
        B: "Mark Twain",
        C: "Charles Dickens",
        D: "Jane Austen",
        correct: "A"
    },
    {
        question: "What is the chemical symbol for gold?",
        A: "Au",
        B: "Ag",
        C: "Fe",
        D: "Pb",
        correct: "A"
    }
]
/********************************************************************************* */


/********************************************************************************* */ 
//HOW DO I GET NECESSARY DOM ELEMENTS TO ADD THE DATA FROM THE QUESTION AND QUIZ DATABASE

const questionEL = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


const ulContainer = document.getElementById("ul-container");
const input_a = document.getElementById("a");
const input_b = document.getElementById("b");
const input_c = document.getElementById("c");
const input_d = document.getElementById("d");


const endMessage = document.getElementById("end-message");
const newElement = document.createElement("h3"); // Corrected here


/********************************************************************************* */





//BEHAVIOUR

/********************************************************************************* */


//HOW DO I UPDATE DOM ELEMENTS WITH QUIZ DATA FORM THE QUESTION AND ANSWER DATABASE

//HOW DO I LOAD ONE QUIZ QUESTION AND ANSWER OPTIONS AT A TIME ? (INDEXING)
let currentQuestion = 0;

function loadquiz() {

            input_a.style.visibility = "visible";
            input_b.style.visibility = "visible";
            input_c.style.visibility = "visible";
            input_d.style.visibility = "visible";
            submitBtn.style.visibility = "visible";

            // Clear previous selection
            const answers = document.querySelectorAll('input[name="answer"]');
            answers.forEach(answer => {
                answer.checked = false; // Uncheck all radio buttons
            });
       
            const currentQuizQuestion = quizData[currentQuestion];
            //we are currently at index **, perform the comands below.
            //add object at index 0 of the array and its properties into this variable.

            questionEL.innerText = currentQuizQuestion.question;
            //Assign content to this element /* from this object, select this specific property  */
            a_text.innerText = currentQuizQuestion.A;
            //Assign content to this element /* from this object, select this specific property  */
            b_text.innerText = currentQuizQuestion.B;
            //Assign content to this element/* from this object, select this specific property  */
            c_text.innerText = currentQuizQuestion.C;
            //Assign content to this element/* from this object, select this specific property  */
            d_text.innerText = currentQuizQuestion.D;
            //Assign content to this element /* from this object, select this specific property  */

}

//HOW CAN I  EXECUTE THE FUNCTION ABOVE EVERYTIME I REFRESH THE PAGE
loadquiz();    
/************************************************************************** */


/************************************************************************** */
// WHAT BEHAVIOUR OD I WANT WHEN I CLICK THE SUBMIT BUTTON
/** */

// submitBtn.addEventListener("click",function(){
//     //LOCAL SCOPE
//     // currentQuestion++;
//     //HOW DO I MOVE ON TO THE NEXT QUESTION ONCE IVE CLICKED THE SUBMIT BUTTON ?
//     if (currentQuestion < quizData.length-1) {
//         currentQuestion++;
//         loadquiz()
//     }else {
        
//         //How can i Add content to new h2 content and style it ?

//         questionEL.innerText = "Congradulations!!!";
//         questionEL.style.fontSize = "clamp(1rem, 3vw, 2rem)";
//         questionEL.style.margin = "10px";

//          // How can i Add content to new h3 element and style it ?
//         newElement.textContent = "You have finished the quiz:)"; 
//         endMessage.appendChild(newElement);
          
//         newElement.style.textAlign = "center";
//         newElement.style.fontSize = "clamp(1rem, 3vw, 1.5rem)";
//         endMessage.style.margin = "10px";
        
 
//         //How can i remove Specific Dom elements ?
//         ulContainer.remove();
//         submitBtn.remove();
//     }
  
// })

//HOW DO I CHECK MY SELECTED ANSWER FOR EACH QUESTION AGAINST THE CORRECT ANSWER WHEN I CLICK THE SUBMIT BUTTON 

submitBtn.addEventListener("click", function() {
    // How can i get the selected answer ?
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;
    answers.forEach(answer => {
        if (answer.checked) {
            selectedAnswer = answer.id;
        }
    });

    // How can i check if an answer is selected ?
    if (selectedAnswer) {
        // Compare the selected answer with the correct answer
        const currentQuizQuestion = quizData[currentQuestion];
        const isCorrect = selectedAnswer.toUpperCase() === currentQuizQuestion.correct;

        //How can i Display if the answer is correct or wrong

        const resultMessage = document.createElement("p");

        // questionEL.innerText = "";

        // a_text.innerText = "";

        // b_text.innerText = "";

        // c_text.innerText = "";

        // d_text.innerText = "";

        // input_a.style.visibility = "hidden";
        // input_b.style.visibility = "hidden";
        // input_c.style.visibility = "hidden";
        // input_d.style.visibility = "hidden";
        // submitBtn.style.visibility = "hidden";


        if (isCorrect) {
            resultMessage.textContent = "Correct!";
            resultMessage.style.color = "green";
            // resultMessage.style.textAlign = "center";
            resultMessage.style.fontSize = "clamp(1rem, 2vw, 1.5rem)";
            endMessage.style.margin = "10px";
        } else {
            resultMessage.textContent = `Wrong! The correct answer is ${currentQuizQuestion[currentQuizQuestion.correct.toUpperCase()]}`;
            resultMessage.style.color = "red";
            // resultMessage.style.textAlign = "center";
            resultMessage.style.fontSize = "clamp(1rem, 2vw, 1.5rem)";
            endMessage.style.margin = "10px";
        }

        // Append the result message to the DOM
        endMessage.appendChild(resultMessage);

        // Disable the submit button temporarily to prevent skipping the message
        submitBtn.disabled = true;

        // Wait a few seconds before moving to the next question
        setTimeout(() => {
            // Remove the result message
            resultMessage.remove();
            
            // Enable the submit button
            submitBtn.disabled = false;

            // Move to the next question or finish the quiz
            if (currentQuestion < quizData.length - 1) {
                currentQuestion++;
                loadquiz();
            } else {
                questionEL.innerText = "Congratulations!!!";
                questionEL.style.fontSize = "clamp(1rem, 4vw, 2rem)";
                questionEL.style.margin = "10px";

                newElement.textContent = "You have finished the quiz :)";
                endMessage.appendChild(newElement);
                newElement.style.textAlign = "center";
                newElement.style.fontSize = "clamp(1rem, 3vw, 1.5rem)";
                endMessage.style.margin = "10px";

                ulContainer.remove();
                submitBtn.remove();
            }
        }, 2000); // 2-second delay before moving to the next question
    } else {
        alert("Please select an answer before submitting.");
    }
});
