import { Container, Stack } from '@mui/material'
import Button from '../../components/Button'
import Flashcard from '../../components/Flashcard'
import { NavLink } from 'react-router-dom'

const Reviewer = () => {
  return (
    <Container>
      <Stack gap={2}>
        <div className="flex justify-end lg:w-[900px] lg:mx-auto">
          <NavLink
            to="/meme/prac-test"
            className="bg-info text-white py-3 px-6 rounded-md md:w-auto w-full"
          >
            Take a test
          </NavLink>
        </div>
        <div className="flex justify-center items-center">
          <Flashcard />
        </div>
        <div className="flex justify-center items-center mt-7 md:gap-10 gap-4">
          <Button className="still_learning">still learning</Button>
          <Button className="already_know">already know</Button>
        </div>
      </Stack>
    </Container>
  )
}

export default Reviewer
