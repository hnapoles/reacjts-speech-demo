import { useEffect, useState } from 'react'

export const useSpeechToText = () => {
  const [recognition, setRecognition] = useState(null)
  const [transcript, setTranscript] = useState('')
  const [listening, setListening] = useState(false)

  useEffect(() => {
    let SpeechRecognition =
      window.webkitSpeechRecognition || window.SpeechRecognition
    // let SpeechGrammarList =
    //   window.SpeechGrammarList || window.webkitSpeechGrammarList
    // let moods = ['happy', 'sad', 'sleepy', 'angry']
    // let grammar =
    //   '#JSGF V1.0; grammar moods; public <moods> = ' + moods.join(' | ') + ';'

    let _recognition = new SpeechRecognition()
    // let recognitionList = new SpeechGrammarList()
    // recognitionList.addFromString(grammar, 1)
    // _recognition.grammars = recognitionList
    _recognition.lang = 'en-US'
    _recognition.continuous = false
    _recognition.interimResults = false
    _recognition.maxAlternatives = 1

    setRecognition(_recognition)
  }, [])

  const speechToText = () => {
    setListening(true)
    recognition.start()
    recognition.onresult = (event) => {
      let word = event.results[0][0].transcript
      setTranscript(word)
      setListening(false)
    }
  }

  return { speechToText, transcript, listening }
}
