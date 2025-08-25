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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    alert('Form submitted');
  }

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Nome"
          placeholder="Digite seu nome"
          name="nome"
          id="input-nome"
          required={true}
        />
        <TextInput
          label="Cargo"
          placeholder="Digite seu cargo"
          name="cargo"
          id="input-cargo"
          required={true}
        />
        <TextInput
          label="Imagem"
          placeholder="Informe o endereço URL da imagem"
          name="imagem"
          id="input-imagem"
          type="url"
          required={true}
        />
        <TextInput
          label="Telefone"
          placeholder="Digite seu telefone"
          name="telefone"
          id="input-telefone"
          type="tel"
          required={true}
        />
        <SelectInput label="Time" id="input-team" name="team" options={teamOptions} />
        <Button type="submit">
          Criar Card
        </Button>
      </form>
    </section>
  );
};

export default Form;
