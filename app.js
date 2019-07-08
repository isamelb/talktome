const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const motivate_me =["you surely can finish any project you start",
                    "you should always love yourself",
                    "life is beautifull, go out there and live",
                    "create thing if you want to find happiness",
                    "always repeat these words to yourself: I love myself, I love myself",
                    "repeat this mantra to yourself, I can do anything I set myself to do"];

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
speech.text = 'I dont know what you said, you can ask me to motivate you'
if (message.includes("motivate")){
   const finalText = motivate_me[Math.floor(Math.random()*motivate_me.length)];
   speech.text = finalText;

}
speech.volume = 1;
window.speechSynthesis.speak(speech);
}

btn.addEventListener("click" , () => {
recognition.start();

});