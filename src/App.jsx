import { useCallback, useEffect, useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import getJsonData from "./utils/getJsonData";
import Footer from "./components/Footer";
import "./App.css";
import AddID from "./utils/addID";
import hexToRgba from "hex-to-rgba";

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

  const handleOnChangeTeamColor = (id, colorHex) => {
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
  };

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
            collaborators={collaborators.filter(
              (collaborator) => collaborator.team == team.name
            )}
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
