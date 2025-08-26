import './Team.css'

const Team = ({ collaborators, name, primaryColor, secondaryColor }) => {
  
  const collaboratorsExists = collaborators.length > 0;

  const cssSection = { backgroundColor: secondaryColor }

  return collaboratorsExists ? (
    <section className='team' style={cssSection}>
      <h3 style={{borderColor: primaryColor}}>{name}</h3>
      <div className='collaborators'>
        {collaborators.map((collaborator, index) => (
          <div className="collaborator" key={index}>
            <div className='header' style={{ backgroundColor: primaryColor }}>
              <img src={collaborator.image} alt={`Imagem do collaborador ${collaborator.name}`} />
            </div>
            <div className="footer">
              <h4>{collaborator.name}</h4>
              <h5>{collaborator.position}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  ) : ''
}

export default Team