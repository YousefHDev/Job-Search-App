import Job from '../models/Job.js';

// Add Job
export const addJob = async (req, res) => {
  const { title, description, companyId, skillsRequired, location, salary, jobType } = req.body;

  try {
    const job = new Job({ title, description, companyId, skillsRequired, location, salary, jobType });
    await job.save();

    res.status(201).json({ message: 'Job created successfully', job });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Update Job
export const updateJob = async (req, res) => {
  const { jobId } = req.params;
  const { title, description, skillsRequired, location, salary, jobType } = req.body;

  try {
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Update fields
    if (title) job.title = title;
    if (description) job.description = description;
    if (skillsRequired) job.skillsRequired = skillsRequired;
    if (location) job.location = location;
    if (salary) job.salary = salary;
    if (jobType) job.jobType = jobType;

    await job.save();

    res.status(200).json({ message: 'Job updated successfully', job });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Delete Job
export const deleteJob = async (req, res) => {
  const { jobId } = req.params;

  try {
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    await job.remove();

    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};