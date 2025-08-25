import './SelectInput.css'

const SelectInput = (props) => {
  const selectId = props.id || props.label?.toLowerCase().replace(/\s+/g, '-') || 'select-input'
  const selectName = props.name || selectId

  return (
    <div className='select-input'>
      <label htmlFor={selectId}>{props.label}</label>
      <select name={selectName} id={selectId}>
        {props.options && props.options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
        </select>
    </div>
  )
}

export default SelectInput;

{/* <option value="back">Programação</option>
<option value="front">Front-end</option>
<option value="ds">Data Science</option>
<option value="devops">DevOps</option>
<option value="ui">Ux e Design</option>
<option value="mobile">Mobile</option>
<option value="qa">QA</option>
<option value="ig">Inovação e Gestão</option> */}