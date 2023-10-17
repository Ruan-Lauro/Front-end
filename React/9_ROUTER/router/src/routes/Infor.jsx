import { useParams } from "react-router-dom"

const Infor = () => {

    const {id} = useParams()

  return (
    <div>
        <h1>Para mais informação sobre: {id}</h1>
    </div>
  )
}

export default Infor