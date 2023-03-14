import { useState } from 'react'
import { useTextToSpeech } from 'hooks/useTextToSpeech'
import { useSpeechToText } from 'hooks/useSpeechToText'
import { Box, Button, HStack, Input, VStack, Text } from '@chakra-ui/react'

function App() {
  const [text, setText] = useState('')
  const { speak } = useTextToSpeech()
  const { speechToText, transcript, listening } = useSpeechToText()

  const handleSpeak = () => {
    speak(text)
  }

  const handleSpeechToText = () => {
    speechToText()
  }

  return (
    <Box height="100vh" width="100vw" bg="brand.appBG">
      <VStack
        height="100%"
        width="100%"
        spacing="100px"
        padding={{ base: '16px', md: '10% 30%' }}
      >
        <VStack alignItems="flex-start" width="100%" spacing="20px">
          <Text fontSize="xl" fontWeight="bold">
            Text to Speech
          </Text>
          <Input
            value={text}
            onChange={(e) => setText(e?.target?.value)}
            onKeyPress={(e) => {
              if (e?.key === 'Enter') {
                handleSpeak()
              }
            }}
            placeholder="Write something"
            _placeholder={{ color: 'brand.placeholder' }}
            bg="white"
            border="none"
          />
          <HStack width="100%" spacing="20px">
            <Button
              onClick={() => setText('')}
              fontSize="sm"
              width="100%"
              bg="brand.red"
              color="white"
            >
              Clear
            </Button>
            <Button
              onClick={handleSpeak}
              fontSize="sm"
              width="100%"
              bg="brand.main"
              color="white"
            >
              Text to Speech
            </Button>
          </HStack>
        </VStack>
        <VStack alignItems="flex-start" width="100%" spacing="20px">
          <Text fontSize="xl" fontWeight="bold">
            Speech to Text
          </Text>
          <HStack width="100%" spacing="20px">
            <Button
              onClick={handleSpeechToText}
              isLoading={listening}
              loadingText="Listening"
              fontSize="sm"
              width="100%"
              bg="brand.main"
              color="white"
            >
              Speak
            </Button>
          </HStack>
          <Text fontWeight="bold" fontSize="lg">
            {transcript || 'Transcript should appear here.'}
          </Text>
        </VStack>
      </VStack>
    </Box>
  )
}

export default App
