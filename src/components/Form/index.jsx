import { memo, useMemo, useState } from "react";
import Button from "../Button";
import SelectInput from "../SelectInput";
import TextInput from "../TextInput";
import "./Form.css";

const Form = memo(({ teams, onSubmit }) => {
  console.log("Form renderizou");
  // 🎯 Memoiza teamOptions - só recalcula se teams mudar
  // Como só usamos id e name, mudanças de cor não afetam este cálculo
  const teamOptions = useMemo(() => {
    return teams.map((team) => ({
      label: team.name,
      value: team.id,
    }));
  }, [teams]);

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [team, setTeam] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({
        name,
        position,
        image,
        phone,
        team: teamOptions.find((teamOption) => teamOption.value == team)?.label,
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
},
  // Função de comparação customizada para o memo
  (prevProps, nextProps) => {
    const teamDataChange = prevProps.teams.length !== nextProps.teams.length ||
      prevProps.teams.some(
        (prev, index) =>
          prev.id !== nextProps.teams[index]?.id || prev.name !== nextProps.teams[index]?.name
      )
    
    return !teamDataChange;
  }
);

Form.displayName = "Form";

export default Form;
