const btn = document.querySelector(".talk");
const content = document.querySelector(".content");



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
    readOutLoud(transcript);
};


function readOutLoud(message){

const speech = new SpeechSynthesisUtterance();
speech.text = 'I dont know what you said, you can ask me to motivate you, or just say give me good affirmations or ask me \
about some good principles of life'
if ((message.includes("motivate"))||(message.includes("motivating"))){
   const finalText = motivate_me[Math.floor(Math.random()*motivate_me.length)];
   speech.text = finalText;
}

if ((message.includes("affirmation"))||(message.includes("affirmations"))){
    const finalText = positive_affirmations[Math.floor(Math.random()*positive_affirmations.length)];
    speech.text = finalText;
 }

 if ((message.includes("principle"))||(message.includes("principles"))){
    const finalText = principles[Math.floor(Math.random()*principles.length)];
    speech.text = finalText;
 }

speech.volume = 1;
speech.rate = 1;
window.speechSynthesis.speak(speech);
document.body.style.backgroundColor = "white";
}

btn.addEventListener("click" , () => {
recognition.start();
document.body.style.backgroundColor = "#AAAAAA";

});