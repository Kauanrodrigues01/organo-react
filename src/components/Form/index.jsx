import InputText from "../InputText";
import "./Form.css";

const Form = () => {
  return (
    <section className="form">
      <form action="">
        <InputText
          label="Nome"
          placeholder="Digite seu nome"
          name="nome"
          id="input-nome"
        />
        <InputText
          label="Cargo"
          placeholder="Digite seu cargo"
          name="cargo"
          id="input-cargo"
        />
        <InputText
          label="Imagem"
          placeholder="Informe o endereço URL da imagem"
          name="imagem"
          id="input-imagem"
          type="url"
        />
        <InputText
          label="Telefone"
          placeholder="Digite seu telefone"
          name="telefone"
          id="input-telefone"
          type="tel"
        />
      </form>
    </section>
  );
};

export default Form;
