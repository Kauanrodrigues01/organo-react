import hexToRgba from "hex-to-rgba";
import { useCallback, useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Team from "./components/Team";
import AddID from "./utils/addID";
import getJsonData from "./utils/getJsonData";

function App() {
  const [teams, setTeams] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  const [notification, setNotification] = useState("Testando notificação, para ver o tamanho da caixa"); // Estado para notificação
  
  // Função auxiliar para exibir notificações
  const showNotification = useCallback((message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification("");
    }, 4000);
  }, []);

  // Funciona parecido com uma chamada em uma API
  useEffect(() => {
    const loadData = async () => {
      const data = await getJsonData("/data/collaborators.json");
      if (data) setCollaborators(AddID(data));
    };

    loadData();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const data = await getJsonData("/data/teams.json");
      if (data) setTeams(AddID(data));
    };

    loadData();
  }, []);

  // function handleAddCollaborator(data) {
  //   setCollaborators([...collaborators, data])
  // }

  // Só recria a função se dependências mudarem (nenhuma aqui)
  const handleAddCollaborator = useCallback((data) => {
    const collaboratorWithId = {
      ...data,
      id: uuidv4() // Adiciona ID único ao colaborador
    };
    
    setCollaborators((prev) => [...prev, collaboratorWithId]);
    showNotification(`Colaborador "${data.name}" adicionado!`);
  }, [showNotification]);

  const handleRemoveCollaborator = useCallback((id) => {
    setCollaborators((prev) =>
      prev.filter((collaborator) => collaborator.id !== id)
    );
    showNotification("Colaborador removido!");
  }, [showNotification]);

  const handleOnChangeTeamColor = useCallback((id, colorHex) => {
    setTeams((teams) =>
      teams.map((team) =>
        team.id === id
          ? {
              ...team,
              primaryColor: colorHex,
              secondaryColor: hexToRgba(colorHex, 0.3),
            }
          : team
      )
    );
  }, []);

  const handleAddTeam = useCallback((name, color) => {
    setTeams((prev) => {
      const data = [...prev];
      data.push({
        id: uuidv4(),
        name: name,
        primaryColor: color,
        secondaryColor: hexToRgba(color),
      });
      return data;
    });

    showNotification(`Time "${name}" adicionado!`);
  }, [showNotification]);

  // 🎯 SOLUÇÃO: Memoiza os colaboradores por team com referências estáveis
  const collaboratorsByTeam = useMemo(() => {
    const result = {};

    // Cria arrays apenas uma vez e mantém as referências
    teams.forEach((team) => {
      result[team.name] = collaborators.filter(
        (collaborator) => collaborator.team === team.name
      );
    });

    return result;
  }, [collaborators, teams]); // Vai recalcular quando teams muda, mas isso é necessário

  return (
    <>
      <Banner />

      {/* Notificação */}
      {notification && <div className="notification">{notification}</div>}

      <Form
        teams={teams}
        onSubmitFormCollaborator={handleAddCollaborator}
        onSubmitFormTeam={handleAddTeam}
      />
      <section className="teams">
        <h1>Minha Organização</h1>
        {teams.map((team) => (
          <Team
            key={team.id}
            teamData={team}
            collaborators={collaboratorsByTeam[team.name] || []}
            onRemove={handleRemoveCollaborator}
            onChangeTeamColor={handleOnChangeTeamColor}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default App;
