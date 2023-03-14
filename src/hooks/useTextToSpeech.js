import { useEffect } from 'react'

export const useTextToSpeech = () => {
  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      console.log(' Speech Synthesis Not Supported 😞')
    }
  }, [])

  const speak = (text) => {
    let speakData = new SpeechSynthesisUtterance()
    speakData.rate = 0.7 // From 0.1 to 10
    speakData.pitch = 0.2 // From 0 to 2
    speakData.text = text
    speakData.lang = 'en'

    // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking
    speechSynthesis.speak(speakData)
  }

  return { speak }
}
