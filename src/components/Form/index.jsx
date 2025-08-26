import { useState } from "react";
import Button from "../Button";
import SelectInput from "../SelectInput";
import TextInput from "../TextInput";
import "./Form.css";

const Form = (props) => {
  console.log('Renderizou o componenete Form');
  const teamOptions = [
    { value: "back", label: "Programação" },
    { value: "front", label: "Front-end" },
    { value: "ds", label: "Data Science" },
    { value: "devops", label: "DevOps" },
    { value: "ui", label: "Ux e Design" },
    { value: "mobile", label: "Mobile" },
    { value: "qa", label: "QA" },
    { value: "ig", label: "Inovação e Gestão" },
  ];

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [team, setTeam] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (props.onSubmit) {
      props.onSubmit({
        name,
        position,
        image,
        phone,
        team,
      });
    }
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          label="Cargo"
          placeholder="Digite seu cargo"
          name="cargo"
          id="input-cargo"
          required={true}
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <TextInput
          label="Imagem"
          placeholder="Informe o endereço URL da imagem"
          name="imagem"
          id="input-imagem"
          type="url"
          required={true}
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <TextInput
          label="Telefone"
          placeholder="Digite seu telefone"
          name="telefone"
          id="input-telefone"
          type="tel"
          required={true}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <SelectInput
          label="Time"
          id="input-team"
          name="team"
          options={teamOptions}
          required={true}
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        />
        <Button type="submit">Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
