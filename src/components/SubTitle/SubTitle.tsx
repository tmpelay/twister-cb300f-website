import "./SubTitle.css"

function SubTitle({ children }) {
  return (
    <div className="st-container">
      <h2 className="st-title">{children}</h2>
      <div className="st-separator"></div>
      <img className="st-img" src="images/twister-logo.png" />
    </div>
  )
}

export default SubTitle
