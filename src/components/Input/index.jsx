import "./Input.css";

const Input = (props) => {
  // Gera um ID único baseado no label ou usa um ID fornecido via props
  const inputId =
    props.id || props.label?.toLowerCase().replace(/\s+/g, "-") || "input-text";
  const inputName = props.name || inputId;

  // Para evitar conflitos de estilos do css, mudando color para color2
  const type = props.type === "color" ? "color2" : props.type || "text";

  return (
    <div className={`input input-${type}`}>
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

export default Input;
