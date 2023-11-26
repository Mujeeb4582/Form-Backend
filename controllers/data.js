import {SectorData, UserData} from "../models/dataModel.js";

export const getData= async(req, res) => {
  try {
    const data = await SectorData.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const createData = async(req, res) => {
  const data = req.body;
  const newData = new UserData(data);
  try {
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};

export const updateData = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const existingData = await UserData.findById(id);

    if (!existingData) {
      return res.status(404).json({ message: "User data not found" });
    }

    // Update the existing data with the new values
    existingData.name = updatedData.name;
    existingData.sector = updatedData.sector;
    existingData.agreed = updatedData.agreed;

    // Save the updated data
    await existingData.save();

    res.status(200).json(existingData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserData = async (req, res) => {
  const { id } = req.params;

  try {
    const userData = await UserData.findById(id);

    if (!userData) {
      return res.status(404).json({ message: "User data not found" });
    }

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
