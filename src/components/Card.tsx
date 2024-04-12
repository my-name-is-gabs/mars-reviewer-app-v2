import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Card = ({ children, path }: { children: string; path: string }) => {
  const navigate = useNavigate()
  return (
    <>
      <Button
        className="p-4 h-auto w-full bg-primary text-white text-xl font-semibold rounded-md hover:scale-105 transition-all ease-in-out"
        onClick={() => navigate(path)}
      >
        {children}
      </Button>
    </>
  )
}

export default Card
