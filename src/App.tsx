import { useState } from 'react'
import './App.css'

import NavBar from './components/NavBar/NavBar'
import SubTitle from './components/SubTitle/SubTitle'
import ColorBtn from './components/ColorBtn/ColorBtn'

function App() {
  const [color, setColor] = useState("red")

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <a id="home"><section className='home-section'>
          <div className="sl-slider">
            <img className="sl-arrow" src="images/arrow-left.png" />
            <img className="sl-twister-img" src="images/twister-image1.png" />
            <img className="sl-arrow" src="images/arrow.png" />
          </div>
          <div className="foot-img">
            <img className="infinia-logo" src="images/infinia-logo.png" />
            <img className="honda-logo" src="images/honda-logo2.png" />
          </div>
        </section></a>
        <a id="design"><section className='section'>
          <SubTitle>DISEÑO</SubTitle>
          <div className="ds-info">
            <div className="ds-text">
              <h4>Nueva</h4>
              <h3>CB 300F</h3>
              <p>Sus líneas deportivas hacen de este modelo un vehículo atractivo en imagen, con el espíritu de su antecesor, la CB250 Twister</p>
            </div>
            <div className="ds-img">
              <img src="images/design-img.png" />
            </div>
          </div>
        </section></a>
        <a id="tech"><section className='section'>
          <SubTitle>TECNOLOGIA</SubTitle>
          <img className="tc-img" src="images/board.png" />
          <p className='tc-text' >El tablero de instrumentos tiene un diseño atractivo y moderno, destacado vs sus competidores por ser digital, y además  brindando una completa información</p>
        </section></a>
        <a id="colors"><section className='section'>
          <SubTitle>COLORES</SubTitle>
          <div className='cl-container'>
            <img src={`images/motorbike-${color}.png`} />
            <div className='cl-picker'>
              <ColorBtn color="red" setColor={setColor}>
                Rojo
              </ColorBtn>
              <ColorBtn color="blue" setColor={setColor}>
                Azul
              </ColorBtn>
              <ColorBtn color="black" setColor={setColor}>
                Negro
              </ColorBtn>
            </div>
          </div>
        </section></a>
        <a id="buy"><section className="section">
          <SubTitle>COMPRAR</SubTitle>
          <h2 className="price">$6.114.600</h2>
          <a href="https://motos.honda.com.ar/modelos/cb300f-twister" className="buy-btn">COMPRAR</a>
        </section></a>
        <a id="specs"><section className="section">
          <SubTitle>FICHA TECNICA</SubTitle>
          <table>
            <tr>
              <td>
                <b>Dimensiones</b>
              </td>
              <td>
                2.084 mm largo x 765 mm ancho x 1.075 mm alto
              </td>
            </tr>
            <tr>
              <td>
                <b>Peso en orden de marcha</b>
              </td>
              <td>
                214kg
              </td>
            </tr>
            <tr>
              <td>
                <b>Motor</b>
              </td>
              <td>
                4 tiempos, 4 válvulas, monocilíndrico, OHC y refrigerado por aire
              </td>
            </tr>
            <tr>
              <td>
                <b>Cilindrada</b>
              </td>
              <td>
                294cc
              </td>
            </tr>
            <tr>
              <td>
                <b>Capacidad del tanque de nafta</b>
              </td>
              <td>
                14.1 litros
              </td>
            </tr>
          </table>
          <a href="https://motos.honda.com.ar/uploads/modelos/54/fichas_tecnicas/54c-0ficha-tecnica-cb300f-twister.pdf" className="buy-btn">DESCARGAR PDF</a>
        </section></a>
      </main >
    </>
  )
}

export default App
