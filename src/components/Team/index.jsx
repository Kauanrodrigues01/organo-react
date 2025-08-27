import { useState } from "react";
import Collaborator from "../Collaborator";
import "./Team.css";
import hexToRgba from "hex-to-rgba";

const Team = ({
  collaborators,
  name,
  primaryColor,
  secondaryColor,
  onRemove,
}) => {
  const collaboratorsExists = collaborators.length > 0;

  const [team, setTeam] = useState({ name, primaryColor, secondaryColor });

  const handleOnChangeColor = (e) => {
    setTeam({
      ...team,
      primaryColor: e.target.value,
      secondaryColor: hexToRgba(e.target.value, 0.3),
    });
  };

  return collaboratorsExists ? (
    <section className="team" style={{ backgroundColor: team.secondaryColor }}>
      <input
        type="color"
        className="input-color"
        value={team.primaryColor}
        onChange={handleOnChangeColor}
      />
      <h3 style={{ borderColor: team.primaryColor }}>{team.name}</h3>
      <div className="collaborators">
        {collaborators.map((collaborator, index) => (
          <Collaborator
            key={index}
            primaryColor={team.primaryColor}
            data={collaborator}
            onRemove={onRemove}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Team;
