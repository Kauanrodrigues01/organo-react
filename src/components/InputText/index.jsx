import './InputText.css'

const InputText = (props) => {
  console.log(props);
  return (
    <div className="input-text">
      <label htmlFor="input-text">{props.label}</label>
      <input type="text" id="input-text" placeholder={props.placeholder} />
    </div>
  )
}

export default InputText