import Container from '@mui/material/Container'
import { NavLink } from 'react-router-dom'
import Card from '../../components/Card'
import Button from '../../components/Button'
import AddIcon from '@mui/icons-material/Add'

const Homepage = () => {
  return (
    <Container>
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
        <NavLink to="/meme/create">
          <Button className="gradient-color-primary p-4 h-24 w-full text-white text-xl font-semibold rounded-md hover:scale-105 transition-all ease-in-out">
            <AddIcon style={{ fontSize: '1.875rem', fontWeight: 'bolder' }} />{' '}
            create new set
          </Button>
        </NavLink>
        {/* <NavLink to="/meme/set_link">
          <Card>My English Vocabulary familiarization</Card>
        </NavLink> */}
        <Card path="/meme/set1">My English Vocabulary familiarization</Card>
        <Card path="/meme/set2">Sample Set new</Card>
      </div>
    </Container>
  )
}

export default Homepage
