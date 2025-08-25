import Button from "../Button";
import SelectInput from "../SelectInput";
import TextInput from "../TextInput";
import "./Form.css";

const Form = () => {
  const teamOptions = [
    { value: "back", label: "Programação" },
    { value: "front", label: "Front-end" },
    { value: "ds", label: "Data Science" },
    { value: "devops", label: "DevOps" },
    { value: "ui", label: "Ux e Design" },
    { value: "mobile", label: "Mobile" },
    { value: "qa", label: "QA" },
    { value: "ig", label: "Inovação e Gestão" }
  ];

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
        <SelectInput label="Time" id="input-team" name="team" options={teamOptions} />
        <Button text="Criar Card" />
      </form>
    </section>
  );
};

export default Form;
