import '/src/index.css'

function Feature(props) {
  return (
    <div className="card">
      <h3 className="title">{props.title}</h3>
      <p className="text">{props.description}</p>
    </div>
  )
}

export default Feature



