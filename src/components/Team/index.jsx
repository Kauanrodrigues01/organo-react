import Collaborator from "../Collaborator";
import "./Team.css";

const Team = ({
  collaborators,
  teamData,
  onRemove,
  onChangeTeamColor
}) => {
  const collaboratorsExists = collaborators.length > 0;

  

  return collaboratorsExists ? (
    <section className="team" style={{ backgroundColor: teamData.secondaryColor }}>
      <input
        type="color"
        className="input-color"
        value={teamData.primaryColor}
        onChange={(e) => onChangeTeamColor(teamData.id, e.target.value)}
      />
      <h3 style={{ borderColor: teamData.primaryColor }}>{teamData.name}</h3>
      <div className="collaborators">
        {collaborators.map((collaborator, index) => (
          <Collaborator
            key={index}
            primaryColor={teamData.primaryColor}
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
