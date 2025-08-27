import "./Collaborator.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Collaborator = ({ primaryColor, data, onRemove }) => {
  return (
    <div className="collaborator">
      <AiFillCloseCircle
        size={25}
        onClick={() => onRemove(data.id)}
        className="remove"
        title="Remover colaborador"
      />
      <div className="header" style={{ backgroundColor: primaryColor }}>
        <img src={data.image} alt={`Imagem do collaborador ${data.name}`} />
      </div>
      <div className="footer">
        <h4>{data.name}</h4>
        <h5>{data.position}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
