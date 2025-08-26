import Collaborator from '../Collaborator';
import './Team.css'

const Team = ({ collaborators, name, primaryColor, secondaryColor }) => {
  
  const collaboratorsExists = collaborators.length > 0;

  const cssSection = { backgroundColor: secondaryColor }

  return collaboratorsExists ? (
    <section className='team' style={cssSection}>
      <h3 style={{borderColor: primaryColor}}>{name}</h3>
      <div className='collaborators'>
        {collaborators.map((collaborator, index) => (
          <Collaborator
            key={index}
            primaryColor={primaryColor}
            data={collaborator}
          />
        ))}
      </div>
    </section>
  ) : ''
}

export default Team