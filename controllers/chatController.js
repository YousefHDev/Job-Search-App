import Chat from '../models/Chat.js';

export const getChatHistory = async (req, res) => {
  const { userId1, userId2 } = req.params;

  try {
    const chatHistory = await Chat.find({
      $or: [
        { senderId: userId1, receiverId: userId2 },
        { senderId: userId2, receiverId: userId1 },
      ],
    }).sort({ timestamp: 1 });

    res.status(200).json({ chatHistory });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};