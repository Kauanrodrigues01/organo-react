import "./TextInput.css";

const TextInput = (props) => {
  // Gera um ID único baseado no label ou usa um ID fornecido via props
  const inputId =
    props.id || props.label?.toLowerCase().replace(/\s+/g, "-") || "input-text";
  const inputName = props.name || inputId;

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
        required={props.required || false}
      />
    </div>
  );
};

export default TextInput;
