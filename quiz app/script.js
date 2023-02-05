const quizDB =[
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans:"ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a:"Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans:"ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a:"JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JustSuper",
        ans:"ans1" 
    },
    {
        question: "Q5: What is the full form of XML?",
        a:"Extensible Makeup Language",
        b: "Extensible Markup Language",
        c: "Extend Marker Language",
        d: "None",
        ans:"ans2" 

    },
    {
        question: "Q6: Who is the founder of JAVA ",
        a:"Bill Gates ",
        b: "Dennis Ritchie",
        c: "Brendan Eich",
        d: "James Gosling",
        ans:"ans4"  
    },
    {
        question: "Q7: Who is the founder of C",
        a:"Bill Gates ",
        b: "Dennis Ritchie",
        c: "Brendan Eich",
        d: "James Gosling",
        ans:"ans2"  
    },
    {
        question: "Q8: Who is the father of Computers",
        a:"Bill Gates",
        b: "Galileo Galilei",
        c: "Brendan Eich",
        d: "Charles Babbage",
        ans:"ans4" 
    },
    {
        question: "Q9:  Which among the following is not a computer language?",
        a:"ALGOL",
        b: "COBOL",
        c: "PASCAL",
        d: "DRAM",
        ans:"ans4" 
    },
    {
        question: "Q10: Which among the following is a permanent storage device? ",
        a:"ROM",
        b: "RAM",
        c: "Flash Drive",
        d: " A & C",
        ans:"ans1"
    },
    {
        question: "Q11: The largest unit of measuring computer storage capacity?",
        a:"TB",
        b: "MB",
        c: "GB",
        d: "KB",
        ans:"ans1"
    },
    {
        question: "Q12: Which among the following is known as computer programmer?",
        a:"The person who can fix the computer errors",
        b: "The person who can fix the hardware",
        c: "The person who can writes and tests computer program",
        d: "The person who fix computer program",
        ans:"ans3"
    },
    {
        question: "Q13:  Which among the following defines rules that all computers must follow to communicate with each other on the internet?",
        a:"Transmission Control Protocol",
        b: "File Transfer Protocol",
        c: "Hyper Text Markup Language",
        d: "HTTP",
        ans:"ans1"
    },
    {
        question: "Q14: Which among the following types of memories get refreshed several times per second?",
        a:"ROM",
        b: "Dynamic RAM",
        c: "Static RAM",
        d: " Running RAM",
        ans:"ans2"
    },
    {
        question: "Q15: Which among the following is the correct sequence of information processing in a computer … ",
        a:"Data, input, output, storage",
        b: "Input, process, output, storage",
        c: "Input, storage, process, output",
        d: "Input, display, process, output",
        ans:"ans2"
    },
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers= document.querySelectorAll('.answer');
const showScore= document.querySelector('#showScore');
let questionCount=0;
let score=0;
const loadQuestion=()=>{
    const questionList= quizDB[questionCount];
   question.innerText= questionList.question;

   option1.innerText= questionList.a;
   option2.innerText= questionList.b;
   option3.innerText= questionList.c;
   option4.innerText= questionList.d;

}
loadQuestion();

const getCheckAnswer=()=>{
    let answer;

    answers.forEach(curAnsElem => {
    if(curAnsElem.checked){
        answer=curAnsElem.id;

    }

    
    });
    return answer; 


}

const deselectAll=()=>{
    answers.forEach((curAnsElem) => curAnsElem.checked=false);
}
submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer=== quizDB[questionCount].ans )
    {
        score++;
    };
    questionCount++;
    deselectAll();
    
    if( questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML=`
        <h3> You scored ${score}/${quizDB.length} ✌
        <button class="btn" onclick="location.reload()">play Again</button>`;
        showScore.classList.remove('scoreArea'); 
    }


});
