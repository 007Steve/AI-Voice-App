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
    
    let texts = event.results[0][0].transcript
    console.log( texts)
    content.textContent = texts;
    readOut(texts);
}

function readOut(text) {
    const speech = new SpeechSynthesisUtterance()

    if (text.includes('who are you')){
        speech.text =  "my name is Shadow, I am an artificial intelligence created by Stephen Plummer "
    }

    if (text.includes('who is Steven')){
        speech.text =  "Stephen Plummer, is a one in a generational talent that you should add to  your team "
    }

    if (text.includes('why should i hire steven')){
        speech.text =  "you should hire stephen becasue he has proven his ability to build efficient front-end interfaces with modern best practices."
    }

    if (text.includes('who is the most amazing person ever')){
        speech.text =  "vanessa plummer is the most amazing person ever, not stephen"
    }

  
    window.speechSynthesis.speak(speech)
    console.log( "im reading the text")
}
