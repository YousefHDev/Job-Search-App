import Company from '../models/Company.js';

// Add Company
export const addCompany = async (req, res) => {
  const { name, email, description, website, ownerId } = req.body;

  try {
    // Check if company email or name already exists
    const existingCompany = await Company.findOne({ $or: [{ email }, { name }] });
    if (existingCompany) {
      return res.status(400).json({ message: 'Company email or name already exists' });
    }

    // Create new company
    const company = new Company({ name, email, description, website, owner: ownerId });
    await company.save();

    res.status(201).json({ message: 'Company created successfully', company });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Update Company
export const updateCompany = async (req, res) => {
  const { companyId } = req.params;
  const { name, description, website } = req.body;

  try {
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    // Update fields
    if (name) company.name = name;
    if (description) company.description = description;
    if (website) company.website = website;

    await company.save();

    res.status(200).json({ message: 'Company updated successfully', company });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Soft Delete Company
export const softDeleteCompany = async (req, res) => {
  const { companyId } = req.params;

  try {
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    company.isDeleted = true;
    await company.save();

    res.status(200).json({ message: 'Company soft deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};