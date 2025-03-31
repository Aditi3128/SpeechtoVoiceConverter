let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();

    
    voiceSelect.innerHTML = ""; 
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.add(option);
    });
};

voiceSelect.addEventListener("change", () => {
    speechSynthesis.cancel(); });


document.querySelector("button").addEventListener("click", () => {
    let speech = new SpeechSynthesisUtterance(); 
    speech.text = document.querySelector("textarea").value;
    
    let selectedVoice = voiceSelect.value;
    if (voices.length > 0) {
        speech.voice = voices[selectedVoice];
    }

    window.speechSynthesis.cancel(); 
    window.speechSynthesis.speak(speech);
});

