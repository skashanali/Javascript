var score = 0 , count = 0 , counter = 1 , correctAnswers = 0 , answer , call,
    question = document.getElementById('question');
var radio1 = document.getElementById('opt1') , radio2 = document.getElementById('opt2'), 
    radio3 = document.getElementById('opt3');
var questionsCounter = document.getElementById('counter');

var Questions = [
        {
    question: 'Which of the following country is not the member of UNO?',
    option1: ' Vatican City',
    option2: ' Afghanistan',
    option3: ' Vaitnam',
    correctAnswer: ' Vatican City'
    },
        {
    question: 'The Great Wall of China is about ________ km long.',
    option1: ' 18,196',
    option2: ' 19,196',
    option3: ' 21,196',
    correctAnswer: ' 21,196'
    },
        {
    question: 'The United Nation was founded on?',
    option1: ' March 24, 1945',
    option2: ' October 24, 1945',
    option3: ' October 24, 1949',
    correctAnswer: ' October 24, 1945'    
    },
        {
    question: 'The SI unit of Charge is?',
    option1: ' Ampere',
    option2: ' Coulomb',
    option3: ' Ohm',
    correctAnswer: ' Coulomb'    
    },
        {
    question: 'When the light passes through a prism, it splits into how many colours?',
    option1: ' 3',
    option2: ' 5',
    option3: ' 7',
    correctAnswer: ' 7'    
    },
        {
    question: 'A device which converts chemical energy into electrical energy is called?',
    option1: ' Motor',
    option2: ' Generator',
    option3: ' Battery',
    correctAnswer: ' Battery'    
    },
        {
    question: 'The most abundant element in the universe is?',
    option1: ' Hydrogen',
    option2: ' Carbon Dioxide',
    option3: ' Oxygen',
    correctAnswer: ' Hydrogen'    
    },
        {
    question: 'The substance which increases the rate of chemical reaction is called?',
    option1: ' Enzyme',
    option2: ' Metal',
    option3: ' Catalyst',
    correctAnswer: ' Catalyst'    
    },
        {
    question: 'Red + Green + Blue = ?',
    option1: ' White',
    option2: ' Cyan',
    option3: ' Black',
    correctAnswer: ' White'    
    },
        {
    question: 'The Great Wall of China is how many km long?',
    option1: ' 19,196',
    option2: ' 21,196',
    option3: ' 18,196',
    correctAnswer: ' 21,196'    
    }
];

function timer(min){
    var time=min*60 , temp=time;
    var x= setInterval(function(){
    var total_time=--temp, minutes=Math.floor((total_time/60)>>0),seconds=(total_time-minutes*60)+'';
    document.getElementById('timer').innerHTML="Time Remaining: " +minutes+ ':' 
    +(seconds.length>1?'':'0')+seconds;
    if(temp<0 && call != true){
        alert("Time is up."); clearInterval(x); result();
    }},1000);
}

function startQuiz(){
    document.getElementById('start').style.display = 'none';
    document.getElementById('quiz_body').style.display = 'block';
    questionsCounter.innerHTML = "Question : " + counter + " of " + Questions.length + ".";
    question.innerHTML = "Q." + Questions[count].question;
    radio1.nextSibling.nodeValue = Questions[count].option1;
    radio2.nextSibling.nodeValue = Questions[count].option2;
    radio3.nextSibling.nodeValue = Questions[count].option3;
}

function next(){
    if(radio1.checked == true || radio2.checked == true || radio3.checked == true){
        var answer= document.querySelector('input[name="option"]:checked').nextSibling.nodeValue;
        if(answer == Questions[count].correctAnswer){
            correctAnswers++;
            score = Math.round((correctAnswers/Questions.length)*100);
        }
        count++; counter++;
        if(count < Questions.length){
            questionsCounter.innerHTML = "Question : " + counter + " of " + Questions.length + ".";
            question.innerHTML = "Q." + Questions[count].question;
            radio1.nextSibling.nodeValue = Questions[count].option1;
            radio1.checked = false;
            radio2.nextSibling.nodeValue = Questions[count].option2;
            radio2.checked = false;
            radio3.nextSibling.nodeValue = Questions[count].option3;
            radio3.checked = false;
        }
        else{
            result();
        }    
        if(count == Questions.length-1){
            document.getElementById('submit').innerHTML = 'Finish';
        }
    }    
    
    else{
        alert("Please first select any one of the option.");
    }
}

function result(){ 
    call = true;
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('end').style.display = 'block';
    if(score < 50){
        document.getElementById('result').innerHTML = "Failed. Better luck next time!"
    }
    else{
        document.getElementById('result').innerHTML = "Congratulations you are passed. Keep it up."
        }
    document.getElementById('score').innerHTML = "Score = " + score + "%";
    document.getElementById('correctanswers').innerHTML = "Correct Answers = " +correctAnswers+ " out of " +Questions.length+ ".";
    return call;
}