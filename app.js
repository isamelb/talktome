const btn = document.querySelector(".talk");
const btn1 = document.querySelector(".random");
const content = document.querySelector(".content");
const image2 = document.querySelector(".image2");
const maindiv = document.querySelector(".maindiv");




const speechrecognition = window.speechrecognition || window.webkitSpeechRecognition;
const recognition = new speechrecognition();
recognition.onstart = function(){
    console.log("voice is activated")
}

recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
    
};

array_of_choices = ["motivate","affirmation","affirmation","gratitude","principle","love","finance","relax","health",];

function select_random (){
   var item = array_of_choices[Math.floor(Math.random()*array_of_choices.length)];
   readOutLoud(item);
   maindiv.style.background  = "lightblue"

};


function readOutLoud(message){

const speech = new SpeechSynthesisUtterance();
speech.text = 'I dont know what you said, you can ask me anything about the following subjects:\
motivation, self love, good affirmations, gratitude, relaxation, good principals of life, financial advice and health advice\
'

document.body.style.backgroundColor = "white";
if ((message.includes("motivate"))||(message.includes("motivating"))){
   const finalText = motivate_me[Math.floor(Math.random()*motivate_me.length)];
   speech.text = finalText;
   image2.src = "bluerose.jpeg"
   maindiv.style.background  = "lightblue"
}

else if ((message.includes("affirmation"))||(message.includes("affirmations"))){
    const finalText = positive_affirmations[Math.floor(Math.random()*positive_affirmations.length)];
    speech.text = finalText;
    image2.src = "sunset19.jpeg"
    maindiv.style.background  = "lightblue"
 }

 else if ((message.includes("principle"))||(message.includes("principles"))){
    const finalText = principles[Math.floor(Math.random()*principles.length)];
    speech.text = finalText;
    image2.src = "sunset20.jpeg"
    maindiv.style.background  = "lightblue"
 }

 else if ((message.includes("love"))||(message.includes("loving"))){
    const finalText = give_love[Math.floor(Math.random()*give_love.length)];
    speech.text = finalText;
    image2.src = "sunset4.jpeg"
    maindiv.style.background  = "lightblue"
 }

 else if ((message.includes("finance"))||(message.includes("financial"))){
   const finalText = financial_advice[Math.floor(Math.random()*financial_advice.length)];
   speech.text = finalText;
   image2.src = "sunset4.jpeg"
   maindiv.style.background  = "lightblue"
}

else if ((message.includes("relax"))||(message.includes("relaxing"))){
   const finalText = relax[Math.floor(Math.random()*relax.length)];
   speech.text = finalText;
   image2.src = "sunset17.jpeg"
   maindiv.style.background  = "lightblue"
}

else if ((message.includes("health"))||(message.includes("healthy"))){
   const finalText = health_advice[Math.floor(Math.random()*health_advice.length)];
   speech.text = finalText;
   image2.src = "sunset4.jpeg"
   maindiv.style.background  = "lightblue"
}

else if ((message.includes("grateful"))||(message.includes("gratitude"))){
   const finalText = gratitude[Math.floor(Math.random()*gratitude.length)];
   speech.text = finalText;
   image2.src = "sunset16.jpeg"
   maindiv.style.background  = "lightblue"
}
 
 
 else{
    image2.src = "sunset30.jpeg"
    maindiv.style.background  = "lightblue"
 }

speech.volume = 1;
speech.rate = 1;
window.speechSynthesis.speak(speech);
document.body.style.backgroundColor = "powderblue";
content.textContent = speech.text;

}

btn.addEventListener("click" , () => {
recognition.start();


//document.body.style.backgroundColor = "white";

});

btn1.addEventListener("click" , () => {
   select_random();
   //document.body.style.backgroundColor = "white";
   
   });
   

