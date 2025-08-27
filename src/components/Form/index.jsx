import { memo, useMemo, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import SelectInput from "../SelectInput";
import "./Form.css";

const Form = memo(
  ({ teams, onSubmitFormCollaborator, onSubmitFormTeam }) => {
    // 🎯 Memoiza teamOptions - só recalcula se teams mudar
    // Como só usamos id e name, mudanças de cor não afetam este cálculo
    const teamOptions = useMemo(() => {
      return teams.map((team) => ({
        label: team.name,
        value: team.id,
      }));
    }, [teams]);

    // Formulário de Colaborador
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [team, setTeam] = useState("");

    // Formulário de time
    const [teamName, setTeamName] = useState("");
    const [teamColor, setTeamColor] = useState("#000000"); // Valor inicial válido para input color

    function handleSubmit(e) {
      e.preventDefault();
      const formType = e.target.getAttribute("datatype");
      if (formType === "formCollaborator" && onSubmitFormCollaborator) {
        onSubmitFormCollaborator({
          name,
          position,
          image,
          phone,
          team: teamOptions.find((teamOption) => teamOption.value == team)
            ?.label,
        });
      } else if (formType === "formTeam" && onSubmitFormTeam) {
        onSubmitFormTeam(teamName, teamColor);
      }
    }

    return (
      <section className="form">
        <form onSubmit={handleSubmit} datatype="formCollaborator">
          <h2>Preencha os dados para adicionar um novo colaborador</h2>
          <Input
            label="Nome"
            placeholder="Digite seu nome"
            name="nome"
            id="input-nome"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Cargo"
            placeholder="Digite seu cargo"
            name="cargo"
            id="input-cargo"
            required={true}
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <Input
            label="Imagem"
            placeholder="Informe o endereço URL da imagem"
            name="imagem"
            id="input-imagem"
            type="url"
            required={true}
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Input
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

        <form onSubmit={handleSubmit} datatype="formTeam">
          <h2>Preencha os dados para adicionar um novo time</h2>
          <Input
            label="Nome do Time"
            placeholder="Digite o nome do time"
            name="team-name"
            id="input-team-name"
            required={true}
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <Input
            label="Cor"
            placeholder="Digite a cor do time"
            name="team-color"
            type="color"
            id="input-team-color"
            required={true}
            value={teamColor}
            onChange={(e) => setTeamColor(e.target.value)}
          />
          <Button type="submit">Criar Card</Button>
        </form>
      </section>
    );
  },
  // Função de comparação customizada para o memo
  (prevProps, nextProps) => {
    const teamDataChange =
      prevProps.teams.length !== nextProps.teams.length ||
      prevProps.teams.some(
        (prev, index) =>
          prev.id !== nextProps.teams[index]?.id ||
          prev.name !== nextProps.teams[index]?.name
      );

    return !teamDataChange;
  }
);

Form.displayName = "Form";

export default Form;
