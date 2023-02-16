// initialize new speech new SpeechSynthesisUtterance object

let speech =new
SpeechSynthesisUtterance();

//set speech language
speech.lang = "eng";

let voices = []; //global array of available voices

window.speechSynthesis.onvoiceschanged = () => {
    //get list of voices
    voices = window.speechSynthesis.getVoices();

    //initially set the first voice in the array
    speech.voice = voices[0];

    //set the voice select list. (Set the index as the value, which we'll use later when the user updates the voice using the select Menu)
    let voiceSelect = document.querySelector("#voices");
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

document.querySelector("#rate").addEventListener("input", () => {
    //Get rate value from the input 
    const rate = document.querySelector("#rate").value;
    
    //set rate property of the SpeechSynthesisUtterance instance
    speech.rate = rate;

    //update the rate label
    document.querySelector("#rate-label").innerHTML = rate;
});

    document.querySelector("#volume").addEventListener("input", () => {
        //get volume value from the input

        const volume = document.querySelector("#volume").value;

        //set volume property for the speechSynthesisUtterance instance
        speech.volume = volume;

        //update the volume label
        document.querySelector("#volume-label").innerHTML = volume;
    });

    document.querySelector("#pitch").addEventListener("input", () => {
        //get the pitch value from the input
        const pitch = document.querySelector("#pitch").value;

        //get the pitch property of the speechSynthesisUtterance

        speech.pitch = pitch;

        //update the pitch label
        document.querySelector("#pitch-label").innerHTML = pitch;
    });

    document.querySelector("#voices").addEventListener("change", () => {
        //on voice change, use the value of the select menu (which is the index of the voice in the global voice array)

        speech.voice = voice[document.querySelector("#voices").value];
    });

    document.querySelector("#start").addEventListener("click", () => {
        //set the text property with the value of the textarea
        
        speech.text = document.querySelector("textarea").value;

        //start speaking
        window.speechSynthesis.speak(speech);
    });

    document.querySelector("#pause").addEventListener("click" , () => {
        //pause the speechSynthesis instance
        window.speechSynthesis.pause();
    });

    document.querySelector("#resume").addEventListener("click", () => {
        //resume the paused speechSynthesis instance
        window.speechSynthesis.resume();
    });

    document.querySelector("#cancel").addEventListener("click", () => {
        //cancel the speechSynthesis instance
        window.speechSynthesis.cancel();
    });
