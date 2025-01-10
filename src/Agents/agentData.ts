
// Datos de los agentes
export const agentsData = [
  { id: '1', name: 'Stevan Smith', avatar: 'src/Assets/Agents/agent1.png' },
  { id: '2', name: 'John Doe', avatar: 'src/Assets/Agents/agent2.png' },
  { id: '3', name: 'Maria Feng', avatar: 'src/Assets/Agents/agent3.png' },
  { id: '4', name: 'Jane Doe', avatar: 'src/Assets/Agents/agent4.png' },
];

// Función para obtener los datos del agente por su ID
export const getAgentById = (chatId: string) => {
    const agent = agentsData.find(agent => agent.id === chatId);
    return {
        name: agent ? agent.name : 'Nombre del agente',
        avatar: agent ? agent.avatar : 'https://ionicframework.com/docs/img/demos/avatar.svg'
    };
};
