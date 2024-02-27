// import axios from 'axios';
// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';

// const ChatPage = () => {
//     //create variables that we need
//     const [messages, setMessages] = useState([]);
//     const [newMessage, setNewMessage] = useState('');
//     const mockedMessages = [
//         { id: 1, content: 'Hello there!', type: 'incoming' },
//         { id: 2, content: 'Hi! How can I help you?', type: 'outgoing' },
//         { id: 3, content: 'I have a question about your services.', type: 'incoming' },
//         { id: 4, content: 'Sure, go ahead!', type: 'outgoing' },
//         // Add more mocked messages as needed
//       ];

//     useEffect(() => {
//         // fetching messages from an API
//         axios.get('https://api.example.com/messages')
//             .then((response) => setMessages(response.data.messages))
//             .catch((error) => alert("Fetching data error", error));
//         }, []);

//     const handleSendMessage = (e) => {
//         e.preventDefault();
//         //sending a new message to the API using Axios
//         axios.post('https://api.example.com/messages', { content: newMessage, type: 'outgoing' })
//             .then((response) => {
//                 setMessages([...messages, response.data.message]);
//                 setNewMessage('');
//             })
//             .catch((error) => alert("Fetching data error", error));
//     };
//     return (
//         <section className='vh-100'>
//             <div className="container py-5 h-100">
//                 <div className='row justify-content-center align-items-center h-100'>
//                     <div className="col-6">
//                         <div className="chat-container p-3 border rounded">
//                             <div className="message-container border-bottom pb-3 mb-3">
//                                 {mockedMessages.map((message) => (
//                                     <div
//                                         key={message.id}
//                                         className={`message bg-${message.type === 'incoming' ? 'light' : 'info'} text-${message.type === 'incoming' ? 'dark' : 'white'
//                                             } p-2 mb-2 rounded`}
//                                     >
//                                         {message.content}
//                                     </div>
//                                 ))}
//                             </div>
//                             <form onSubmit={handleSendMessage}>
//                                 <input type="chatmsg" class="form-control" placeholder="Send a Chat" value={newMessage}
//                                     onChange={(e) => setNewMessage(e.target.value)} required />
//                                 <button className="btn btn-primary py-2" type="submit">Send</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//     );
// };

// export default ChatPage;

//             //   {messages.map((message) => (
//             //     <div
//             //       key={message.id}
//             //       className={`message bg-${message.type === 'incoming' ? 'light' : 'info'} text-${
//             //         message.type === 'incoming' ? 'dark' : 'white'
//             //       } p-2 mb-2 rounded`}
//             //     >
//             //       {message.content}
//             //     </div>
//             //   ))}
//             // </div>
//             // <Form className="message-input" onSubmit={handleSendMessage}>
//             //   <Form.Control
//             //     type="text"
//             //     placeholder="Type your message..."
//             //     className="mr-2"
//             //     value={newMessage}
//             //     onChange={(e) => setNewMessage(e.target.value)}
//             //   />

