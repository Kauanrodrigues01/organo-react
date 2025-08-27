import hexToRgba from "hex-to-rgba";
import { useCallback, useEffect, useMemo, useState } from "react";
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
    setCollaborators((prev) => [...prev, data]);
  }, []);

  const handleRemoveCollaborator = useCallback((id) => {
    setCollaborators((prev) =>
      prev.filter((collaborator) => collaborator.id !== id)
    );
  }, []);

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

  // Memoiza os colaboradores por team para evitar filtros desnecessários
  const collaboratorsByTeam = useMemo(() => {
    return teams.reduce((acc, team) => {
      acc[team.name] = collaborators.filter(
        (collaborator) => collaborator.team === team.name
      );
      return acc;
    }, {});
  }, [teams, collaborators]);

  return (
    <>
      <Banner />
      <Form onSubmit={handleAddCollaborator} />
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
