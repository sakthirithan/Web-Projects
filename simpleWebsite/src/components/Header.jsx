import '/src/index.css'

function Header(props) {
  return (
    <div class="container" >
      <header className="header">
          <span className="logo">{props.title}</span>
          <nav >
            <a href="#" className="link" >Home</a>
            <a href="#" className="link" >Features</a>
            <a href="#" className="link" >Contact</a>
          </nav>
      </header>
    </div>
  )
}

export default Header