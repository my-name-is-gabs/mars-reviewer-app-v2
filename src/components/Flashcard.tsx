import VolumeUpIcon from '@mui/icons-material/VolumeUp'

const Flashcard = ({ data }: { data?: {} }) => {
  return (
    <div className="card relative flex flex-col flex-wrap justify-center items-center">
      <div className="md:absolute relative md:right-12 right-0 md:top-10 top-0 md:mb-0 mb-6 self-end">
        <VolumeUpIcon style={{ fontSize: '2rem' }} />
      </div>
      <div className="h-auto text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tempore ab
        aliquam quam corporis ratione, sed, illo perspiciatis eaque hic harum
        vel doloribus necessitatibus veniam sequi officiis soluta, architecto
        totam natus error? Consectetur, maiores ipsam? Facilis, odio! Deserunt
        nostrum, velit nulla nobis itaque, numquam consectetur ducimus sapiente,
        ad iure eos!
      </div>
    </div>
  )
}

export default Flashcard
