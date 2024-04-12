import { Container, Stack } from '@mui/material'
import { NavLink } from 'react-router-dom'
import InputField from '../components/InputField'
import Button from '../components/Button'

const Signup = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        minHeight: '100vh',
        marginTop: '20px',
        gap: '56px',
      }}
    >
      <div className="w-100 h-100 lg:flex hidden flex-col justify-center items-start">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-extrabold font-sans">Sign up to</h1>
          <h3 className="text-2xl mb-8 font-medium">M.A.R.S Reviewer</h3>
          <p>
            If you already have and account <br />
            You can{' '}
            <NavLink to="/" className="text-violet-600 font-semibold">
              Login here!
            </NavLink>
          </p>
        </div>
        <img
          src="/assets/banner.png"
          className="mt-2 ml-40 banner-img"
          alt="banner"
        />
      </div>

      {/* FORM */}
      <form
        autoComplete="off"
        className="flex flex-col lg:w-1/3 w-full lg:px-0 px-7"
        method="post"
      >
        <h1 className="font-medium text-3xl mb-3">Sign Up</h1>

        <Stack gap={2} marginTop={3} width="100%">
          <InputField
            attribs={{
              type: 'text',
              name: 'username',
              placeholder: 'Create a username',
            }}
            className="inputField"
          />
          <InputField
            attribs={{
              type: 'email',
              name: 'email',
              placeholder: 'Enter your email',
            }}
            className="inputField"
          />

          <InputField
            attribs={{
              type: 'text',
              name: 'fullname',
              placeholder: 'Enter your name',
            }}
            className="inputField"
          />

          <div className="inline-flex flex-col">
            <label htmlFor="dob" className="text-sm ml-2 text-primary">
              Enter date of birth
            </label>
            <InputField
              attribs={{
                type: 'date',
                name: 'dob',
                id: 'dob',
              }}
              className="inputField"
            />
          </div>

          <InputField
            attribs={{
              type: 'password',
              name: 'password',
              placeholder: 'Password',
            }}
            className="inputField"
          />

          <InputField
            attribs={{
              type: 'password',
              name: 'password_confirmation',
              placeholder: 'Confirm password',
            }}
            className="inputField"
          />
          <Button
            attribs={{ type: 'submit' }}
            className="mt-4 login-and-register-btn"
          >
            Register
          </Button>

          <div className="mt-4 text-center">
            Already have an account?{' '}
            <NavLink to="/" className="text-violet-600 font-semibold">
              Login here!
            </NavLink>
          </div>
        </Stack>
      </form>
    </Container>
  )
}

export default Signup
