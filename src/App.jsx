import { useCallback, useState } from 'react';
import Banner from './components/Banner'
import Form from './components/Form'

function App() {

  const [collaborators, setCollaborators] = useState([]);

  // function handleAddCollaborator(data) {
  //   setCollaborators([...collaborators, data])
  // }

  const handleAddCollaborator = useCallback((data) => {
    setCollaborators(prev => [...prev, data])
  }, []) // só recria a função se dependências mudarem (nenhuma aqui)

  return (
    <>
      <Banner />
      <Form onSubmit={handleAddCollaborator} />

      {/* 
        Importante: sempre que o estado "collaborators" muda,
        o React reexecuta a função App (re-renderização).
        Mas isso NÃO significa que ele recria tudo do zero no DOM real.
        O React faz a comparação (diffing) entre o Virtual DOM antigo e o novo
        e aplica apenas as mudanças necessárias.
        
        Por exemplo:
        - Banner e Form não vão mudar, porque não dependem de "collaborators".
        - Apenas a lista de colaboradores realmente terá alterações no DOM.
        
        Isso deixa a aplicação performática mesmo com re-renderizações frequentes.
      */}
      {collaborators && collaborators.map((collaborator, index) => (
        <div key={index}>
          <h3>{collaborator.name}</h3>
          <p>{collaborator.position}</p>
          <img src={collaborator.image} alt={collaborator.name} />
          <p>{collaborator.phone}</p>
          <p>{collaborator.team}</p>
        </div>
      ))}
    </>
  )
}

export default App
