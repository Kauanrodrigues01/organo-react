import './Collaborator.css'

const Collaborator = ({primaryColor, data}) => {
  return (
    <div className="collaborator">
      <div className='header' style={{ backgroundColor: primaryColor }}>
        <img src={data.image} alt={`Imagem do collaborador ${data.name}`} />
      </div>
      <div className="footer">
        <h4>{data.name}</h4>
        <h5>{data.position}</h5>
      </div>
    </div>
  )
}

export default Collaborator