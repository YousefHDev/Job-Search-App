import Chat from '../models/Chat.js';

export const saveMessageToDatabase = async (senderId, receiverId, message) => {
  const chat = new Chat({ senderId, receiverId, message });
  await chat.save();
};