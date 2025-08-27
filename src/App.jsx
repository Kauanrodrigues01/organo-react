import { useCallback, useEffect, useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import getJsonData from "./utils/getJsonData";
import Footer from "./components/Footer";
import './App.css'

function App() {
  const [collaborators, setCollaborators] = useState([]);

  // Funciona parecido com uma chamada em uma API
  useEffect(() => {
    const loadData = async () => {
      const data = await getJsonData('/data/collaborators.json');
      if (data) setCollaborators(data);
    }
    
    loadData();
  }, [])

  const teams = [
    {
      name: "Programação",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "DevOps",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  // function handleAddCollaborator(data) {
  //   setCollaborators([...collaborators, data])
  // }

  const handleAddCollaborator = useCallback((data) => {
    setCollaborators((prev) => [...prev, data]);
  }, []); // só recria a função se dependências mudarem (nenhuma aqui)

  const handleRemoveCollaborator = useCallback((name) => {
    setCollaborators((prev) => prev.filter((collaborator) => collaborator.name !== name));
  }, []);

  return (
    <>
      <Banner />
      <Form onSubmit={handleAddCollaborator} />
      <section className="teams">
        <h1>Minha Organização</h1>
        {teams.map((team) => (
          <Team
            key={team.name}
            name={team.name}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
            collaborators={collaborators.filter((collaborator) => collaborator.team == team.name)}
            onRemove={handleRemoveCollaborator}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default App;
