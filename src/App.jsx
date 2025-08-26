import { useCallback, useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const [collaborators, setCollaborators] = useState([]);

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
    setCollaborators((prev) => {
      console.log([...prev, data]);
      return [...prev, data]
    });
  }, []); // só recria a função se dependências mudarem (nenhuma aqui)

  return (
    <>
      <Banner />
      <Form onSubmit={handleAddCollaborator} />
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          collaborators={collaborators.filter((collaborator) => collaborator.team == team.name)}
        />
      ))}
    </>
  );
}

export default App;
