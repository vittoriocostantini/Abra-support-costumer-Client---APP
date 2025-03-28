
export const handleReply = (message: string, setReplyMessage: (msg: string) => void) => {
    console.log(`Replying to message: ${message}`);
    console.log(`Reply initiated at: ${new Date().toISOString()}`);
    setReplyMessage(message); // Update the state with the message being replied to
    // Aquí puedes agregar la lógica para manejar la respuesta al mensaje
};


