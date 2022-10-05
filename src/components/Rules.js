import { useState } from "react"

export default function Rules() {
  const [state, setState] = useState({
    visible: false,
  })

  const style = {
    display: state.visible ? 'block' : 'none',
  }

  const changeDisplay = () => {
    setState({
      visible: !state.visible,
    })
  }

  return (
    <section className="rules-container">
      <button type="Button" onClick={changeDisplay}>RULES</button>
      <div className="rules" style={style}>
        <h2>RULES</h2>
        <button type="Button" className="close-btn" onClick={changeDisplay}>
          <img src="./images/icon-close.svg" alt="close sign" />
        </button>
        <img src="./images/image-rules.svg" alt="rules img" />
      </div>
      <div className="screen" style={style}/>
    </section>
  )
};