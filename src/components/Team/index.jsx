import Collaborator from "../Collaborator";
import "./Team.css";

const Team = ({ collaborators, name, primaryColor, secondaryColor, onRemove }) => {
  const collaboratorsExists = collaborators.length > 0;

  const cssSection = { backgroundColor: secondaryColor };

  return collaboratorsExists ? (
    <section className="team" style={cssSection}>
      <input type="color" className="input-color" />
      <h3 style={{ borderColor: primaryColor }}>{name}</h3>
      <div className="collaborators">
        {collaborators.map((collaborator, index) => (
          <Collaborator
            key={index}
            primaryColor={primaryColor}
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
