import '/src/index.css'

function Hero(props) {
  return (
    <>
      <section className='hero'>
        <h1 className='heading'>{props.heading}</h1>
        <p className='text'>{props.text}</p>
        <button className='btn'>{props.btnText}</button>
      </section>
    </>
  )
}

export default Hero