import TextInput from "../TextInput";
import "./Form.css";

const Form = () => {
  return (
    <section className="form">
      <form action="">
        <TextInput
          label="Nome"
          placeholder="Digite seu nome"
          name="nome"
          id="input-nome"
        />
        <TextInput
          label="Cargo"
          placeholder="Digite seu cargo"
          name="cargo"
          id="input-cargo"
        />
        <TextInput
          label="Imagem"
          placeholder="Informe o endereço URL da imagem"
          name="imagem"
          id="input-imagem"
          type="url"
        />
        <TextInput
          label="Telefone"
          placeholder="Digite seu telefone"
          name="telefone"
          id="input-telefone"
          type="tel"
        />
        <label htmlFor="input-time">Time</label>
        <select name="time" id="input-time">
          <option value="back">Programação</option>
          <option value="front">Front-end</option>
          <option value="ds">Data Science</option>
          <option value="devops">DevOps</option>
          <option value="ui">Ux e Design</option>
          <option value="mobile">Mobile</option>
          <option value="qa">QA</option>
          <option value="ig">Inovação e Gestão</option>
        </select>
      </form>
    </section>
  );
};

export default Form;
