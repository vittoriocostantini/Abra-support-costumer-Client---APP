// Base de datos de los agentes
export const agentsData = [
  { id: 1, name: 'Stevan Smith', avatar: 'src/Assets/Agents/agent1.png' },
  { id: 2, name: 'John Doe', avatar: 'src/Assets/Agents/agent2.png' },
  { id: 3, name: 'Maria Feng', avatar: 'src/Assets/Agents/agent3.png' },
  { id: 4, name: 'Jane Doe', avatar: 'src/Assets/Agents/agent4.png' },
];

// Función para obtener los datos del agente por su nombre
export const getAgentByName = (agentName: string) => {
    const agent = agentsData.find(agent => agent.name === agentName);
    return {
        name: agent ? agent.name : 'Nombre del agente',
        avatar: agent ? agent.avatar : 'https://ionicframework.com/docs/img/demos/avatar.svg'
    };
};

// Función para obtener un agente aleatorio
export const getRandomAgent = () => {
    const randomIndex = Math.floor(Math.random() * agentsData.length);
    return agentsData[randomIndex];
};
