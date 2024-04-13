import { Container, Stack } from '@mui/material'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
import Flashcard from '../../components/Flashcard'
import InputField from '../../components/InputField'
import Button from '../../components/Button'

const TestSession = () => {
  return (
    <Container>
      <Stack gap={3}>
        <p>Note: You need to enable your mic to make this test session work</p>
        <div className="flex justify-center items-center">
          <Flashcard />
        </div>
        <div className="lg:w-[900px] lg:mx-auto">
          <p className="text-lg text-center mb-3 text-success font-medium">
            You're correct
          </p>
          <InputField
            attribs={{ readonly: 'readonly', value: 'hello world' }}
            className="p-3 outline outline-2 outline-darkInfo text-center w-full"
          />
        </div>
        <div className="lg:w-[900px] lg:mx-auto flex justify-center items-center mb-9">
          <Button className="bg-info text-white py-2 px-12 rounded-md md:w-auto w-full">
            <KeyboardVoiceIcon />
          </Button>
        </div>
      </Stack>
    </Container>
  )
}

export default TestSession
