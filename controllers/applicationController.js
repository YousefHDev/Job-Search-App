import Application from '../models/Application.js';

// Apply for Job
export const applyForJob = async (req, res) => {
  const { jobId, userId } = req.body;

  try {
    const application = new Application({ jobId, userId, status: 'pending' });
    await application.save();

    res.status(201).json({ message: 'Application submitted successfully', application });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Get Applications for Job
export const getApplicationsForJob = async (req, res) => {
  const { jobId } = req.params;

  try {
    const applications = await Application.find({ jobId }).populate('userId', 'name email');
    res.status(200).json({ applications });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};