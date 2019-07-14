const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const image2 = document.querySelector(".image2");




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


function readOutLoud(message){

const speech = new SpeechSynthesisUtterance();
speech.text = 'I dont know what you said, you can ask me anything about the following subjects:\
motivation, self love, good affirmations, relaxation, good principals of life, financial advice, health advice\
'

document.body.style.backgroundColor = "white";
if ((message.includes("motivate"))||(message.includes("motivating"))){
   const finalText = motivate_me[Math.floor(Math.random()*motivate_me.length)];
   speech.text = finalText;
   image2.src = "bluerose.jpeg"
}

else if ((message.includes("affirmation"))||(message.includes("affirmations"))){
    const finalText = positive_affirmations[Math.floor(Math.random()*positive_affirmations.length)];
    speech.text = finalText;
    image2.src = "sunset2.jpeg"
 }

 else if ((message.includes("principle"))||(message.includes("principles"))){
    const finalText = principles[Math.floor(Math.random()*principles.length)];
    speech.text = finalText;
    image2.src = "sunset2.jpeg"
 }

 else if ((message.includes("love"))||(message.includes("loving"))){
    const finalText = give_love[Math.floor(Math.random()*give_love.length)];
    speech.text = finalText;
    image2.src = "sunset4.jpeg"
 }

 else if ((message.includes("finance"))||(message.includes("financial"))){
   const finalText = financial_advice[Math.floor(Math.random()*financial_advice.length)];
   speech.text = finalText;
   image2.src = "sunset4.jpeg"
}

else if ((message.includes("relax"))||(message.includes("relaxing"))){
   const finalText = relax[Math.floor(Math.random()*relax.length)];
   speech.text = finalText;
   image2.src = "sunset4.jpeg"
}

else if ((message.includes("health"))||(message.includes("healthy"))){
   const finalText = health_advice[Math.floor(Math.random()*health_advice.length)];
   speech.text = finalText;
   image2.src = "sunset4.jpeg"
}
 
 
 else{
    image2.src = "sunset2.jpeg"
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