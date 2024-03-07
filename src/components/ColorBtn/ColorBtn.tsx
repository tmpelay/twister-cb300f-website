export default function ColorBtn({ color, setColor, children }: any) {
  const className = `cb-container ${color}`

  const handleClick = () => {
    setColor(color)
    console.log(color)
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}
