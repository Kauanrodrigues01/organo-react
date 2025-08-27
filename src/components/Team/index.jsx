import { memo } from "react";
import Collaborator from "../Collaborator";
import "./Team.css";

/*
 * 🎯 Por que usar React.memo aqui?
 *
 * SEM memo:
 * - Quando mudamos a cor de UM team específico
 * - O App re-renderiza (porque teams state mudou)
 * - TODOS os componentes Team re-renderizam desnecessariamente
 * - Isso causa perda de performance
 *
 * COM memo:
 * - React compara as props de cada Team antes de re-renderizar
 * - Apenas o Team que teve as props alteradas re-renderiza
 * - Os outros Teams são "pulados" (skip render)
 *
 * Benefício: Mudar 1 cor = apenas 1 team re-renderiza (não todos)
 *
 * Funciona porque:
 * ✅ Temos múltiplos Teams renderizados
 * ✅ Props são estáveis (useCallback + useMemo no App)
 * ✅ Mudanças frequentes (cor do team)
 */
const Team = memo(
  ({ collaborators, teamData, onRemove, onChangeTeamColor }) => {
    const collaboratorsExists = collaborators.length > 0;

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
  }
);

Team.displayName = "Team";

export default Team;
