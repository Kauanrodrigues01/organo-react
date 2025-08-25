import './InputText.css'

const InputText = () => {
  return (
    <div className="input-text">
      <label htmlFor="input-text">Texto:</label>
      <input type="text" id="input-text" placeholder="Digite algo..." />
    </div>
  )
}

export default InputText