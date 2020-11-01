const  button = document.querySelector('.speak')
const  content = document.querySelector('.content')

const SpeechRecognition = window.SpeechRecognition ||  window.webkitSpeechRecognition 
const recognition  = new SpeechRecognition ()

recognition .onstart = function () {
    console.log( "its working")
}

recognition .onspeechend = function () {
    console.log( "end")
}

recognition .onresult = function (event) {
    
    let text = event.results[0][0].transcript
    console.log( text)
    content.textContent = text
}