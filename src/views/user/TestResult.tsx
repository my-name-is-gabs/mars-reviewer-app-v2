import { Container, Stack } from '@mui/material'
import Button from '../../components/Button'

const TestResult = () => {
  return (
    <Container sx={{ width: 'calc(100% - 2rem)' }}>
      <Stack gap={3}>
        <div className="flex justify-between items-center w-auto">
          <h1 className="md:text-4xl text-xl">Total Score: 13/15</h1>
          <div className="inline-flex justify-center items-center gap-4">
            <Button className="py-2 px-10 bg-info text-white rounded-md">
              retake
            </Button>
            <Button className="py-2 px-10 bg-primary text-white rounded-md">
              back
            </Button>
          </div>
        </div>

        <Stack gap={2}>
          <div className="bg-slate-300 flex justify-between items-center w-auto p-6">
            <div className="ml-16">
              <span>You said:</span>
              <br />
              <p className="text-danger text-lg font-semibold">Your answer</p>
            </div>
            <div className="mr-16">
              <p className="text-success font-semibold text-lg">
                correct answer
              </p>
            </div>
          </div>

          <div className="bg-slate-300 flex justify-between items-center w-auto p-6">
            <div className="ml-16">
              <span>You said:</span>
              <br />
              <p className="text-danger text-lg font-semibold">Your answer</p>
            </div>
            <div className="mr-16">
              <p className="text-success font-semibold text-lg">
                correct answer
              </p>
            </div>
          </div>
        </Stack>
      </Stack>
    </Container>
  )
}

export default TestResult
