import './NavBar.css'

function NavBar() {

  const toggleMenu = () => {
    var navbar = document.getElementById("responsive-navbar")
    if (navbar != null) {
      if (navbar.style.display == "flex") {
        navbar.style.display = "none"
      } else {
        navbar.style.display = "flex"
      }
    }
  }
  return (
    <nav className="nv-nav">
        <ul className="nv-linksList">
          <li><a className="nv-link logo" href="#home"><img src="images/honda-logo.png" /></a></li>
          <li><a className="nv-link hide" href="#design">Diseño</a></li>
          <li><a className="nv-link hide" href="#tech">Tecnologia</a></li>
          <li><a className="nv-link hide" href="#colors">Colores</a></li>
          <li><a className="nv-link hide" href="#buy">Comprar</a></li>
          <li><a className="nv-link hide" href="#specs">Ficha Tecnica</a></li>
          <li><a className="nv-link icon"onClick={toggleMenu}><i className='bx bx-menu' /></a></li>
        </ul>
        <ul id="responsive-navbar" className="nv-responsiveLinksList">
          <li><a className="nv-link hide" onClick={toggleMenu} href="#design">Diseño</a></li>
          <li><a className="nv-link hide" onClick={toggleMenu} href="#tech">Tecnologia</a></li>
          <li><a className="nv-link hide" onClick={toggleMenu} href="#colors">Colores</a></li>
          <li><a className="nv-link hide" onClick={toggleMenu} href="#buy">Comprar</a></li>
          <li><a className="nv-link hide" onClick={toggleMenu} href="#specs">Ficha Tecnica</a></li>
        </ul>
    </nav >
  )
}

export default NavBar
