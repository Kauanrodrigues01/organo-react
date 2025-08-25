import "./SelectInput.css";

const SelectInput = (props) => {
  const selectId =
    props.id ||
    props.label?.toLowerCase().replace(/\s+/g, "-") ||
    "select-input";
  const selectName = props.name || selectId;

  const handleSelectChange = (event) => {
    const select = event.target;
    const newValue = select.value;

    // Se o valor for vazio (primeira opção), adiciona classe para estilo cinza
    if (newValue === "") {
      select.classList.add("placeholder-selected");
    } else {
      select.classList.remove("placeholder-selected");
    }

    // Chama o onChange do pai se existir
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <div className="select-input">
      <label htmlFor={selectId}>{props.label}</label>
      <select
        name={selectName}
        id={selectId}
        className="placeholder-selected" // Inicia com a classe para mostrar placeholder em cinza
        onChange={handleSelectChange}
        value={props.value}
        required={props.required || false}
      >
        <option value="" disabled className="placeholder">
          Selecione uma opção
        </option>
        {props.options &&
          props.options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectInput;
