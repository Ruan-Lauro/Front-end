import "./Title.css"

const Title = ({title, eventColor}) => {
  return (
    <div className='title' style={{color: eventColor}}>
        <h1>{title}</h1>
    </div>
  )
}

export default Title