import "./InputText.css";

const InputText = (props) => {
  // Gera um ID único baseado no label ou usa um ID fornecido via props
  const inputId =
    props.id || props.label?.toLowerCase().replace(/\s+/g, "-") || "input-text";
  const inputName = props.name || inputId;

  console.log(props);
  return (
    <div className="input-text">
      <label htmlFor={inputId}>{props.label}</label>
      <input
        type={props.type || "text"}
        id={inputId}
        name={inputName}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputText;
