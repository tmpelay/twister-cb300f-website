function NavBar() {
  return (
    <nav className="nv-container">
      <div className="nv-logo">
        <img src="images/honda-logo.png" />
      </div>
      <div className="nv-linksContainer">
        <ul className="nv-linksList">
          <li><a className="nv-link" href="#home">Inicio</a></li>
          <li><a className="nv-link" href="#design">Diseño</a></li>
          <li><a className="nv-link" href="#tech">Tecnologia</a></li>
          <li><a className="nv-link" href="/">Seguridad</a></li>
          <li><a className="nv-link" href="/">Motor</a></li>
          <li><a className="nv-link" href="/">Suspension</a></li>
          <li><a className="nv-link" href="/">Puerto USB</a></li>
          <li><a className="nv-link" href="#colors">Colores</a></li>
          <li><a className="nv-link" href="#buy">Comprar</a></li>
          <li><a className="nv-link" href="#specs">Ficha Tecnica</a></li>
        </ul>
      </div>
    </nav >
  )
}

export default NavBar
