import User from '../models/User.js';
import bcrypt from 'bcrypt';

// Update User Account
export const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { name, email, mobileNumber, DOB, gender } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update fields
    if (name) user.name = name;
    if (email) user.email = email;
    if (mobileNumber) user.mobileNumber = mobileNumber;
    if (DOB) user.DOB = DOB;
    if (gender) user.gender = gender;

    await user.save();

    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Upload Profile Picture
export const uploadProfilePic = async (req, res) => {
  const { userId } = req.params;
  const profilePic = req.file.path;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.profilePic = profilePic;
    await user.save();

    res.status(200).json({ message: 'Profile picture uploaded successfully', profilePic });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Soft Delete Account
export const softDeleteAccount = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.isDeleted = true;
    await user.save();

    res.status(200).json({ message: 'Account soft deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};