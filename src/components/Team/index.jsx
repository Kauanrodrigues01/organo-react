import { memo } from "react";
import Collaborator from "../Collaborator";
import "./Team.css";

/*
 * 🎯 Por que usar React.memo aqui com comparação customizada?
 *
 * PROBLEMA: Mesmo com memo, todos os Teams re-renderizam porque:
 * - Mudança de cor altera o array teams no App
 * - collaboratorsByTeam é recalculado (novo objeto)
 * - Todos os Teams recebem novos arrays de collaborators
 * - memo detecta mudança e re-renderiza todos
 *
 * SOLUÇÃO: memo com comparação customizada que ignora mudanças
 * irrelevantes e foca apenas no que realmente importa para cada Team
 */
const Team = memo(
  ({ collaborators, teamData, onRemove, onChangeTeamColor }) => {
    const collaboratorsExists = collaborators.length > 0;
    console.log(`🎨 Team "${teamData.name}" renderizou!`);

    return collaboratorsExists ? (
      <section
        className="team"
        style={{ backgroundColor: teamData.secondaryColor }}
      >
        <input
          type="color"
          className="input-color"
          value={teamData.primaryColor}
          onChange={(e) => onChangeTeamColor(teamData.id, e.target.value)}
        />
        <h3 style={{ borderColor: teamData.primaryColor }}>{teamData.name}</h3>
        <div className="collaborators">
          {collaborators.map((collaborator) => (
            <Collaborator
              key={collaborator.id}
              primaryColor={teamData.primaryColor}
              data={collaborator}
              onRemove={onRemove}
            />
          ))}
        </div>
      </section>
    ) : (
      ""
    );
  },
  // 🎯 Função de comparação customizada
  (prevProps, nextProps) => {
    // Só re-renderiza se algo que realmente importa mudou
    const teamDataChanged =
      prevProps.teamData.id !== nextProps.teamData.id ||
      prevProps.teamData.name !== nextProps.teamData.name ||
      prevProps.teamData.primaryColor !== nextProps.teamData.primaryColor ||
      prevProps.teamData.secondaryColor !== nextProps.teamData.secondaryColor;

    // Compara colaboradores por IDs (mais eficiente que array inteiro)
    const collaboratorsChanged =
      prevProps.collaborators.length !== nextProps.collaborators.length ||
      prevProps.collaborators.some(
        (prev, index) => prev.id !== nextProps.collaborators[index]?.id
      );

    // Funções devem ser estáveis (useCallback), então não precisamos comparar

    // Retorna true se NÃO deve re-renderizar (props são "iguais")
    return !teamDataChanged && !collaboratorsChanged;
  }
);

Team.displayName = "Team";

export default Team;
