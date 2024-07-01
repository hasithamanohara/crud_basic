import * as userService from "../services/userServices.js";
import dotenv from "dotenv";
dotenv.config();

export const create = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ 
      message: "data is missing in the request body", 
      status: false 
    });
  }
  const {firstName, lastName, email} = req.body;
  try {
    const result = await userService.create(firstName, lastName, email);

    if (result.status) {
      res.status(200).json({ message: result.message, status: true });
    } else {
      res.status(400).json({ message: result.message, status: false });
    }
  } catch (error) {
    res.status(400).json({ error: "Internal Server Error", status: false });
  }
};

export const get = async (req, res) => {
  try {
    const result = await userService.get();
    if (result.status) {
      res
        .status(200)
        .json({ status: true, message: result.message, data: result.data });
    } else {
      res.status(400).json({ status: false, message: result.message });
    }
  } catch (error) {
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const deleteById = async (req, res) => {
  if (!req.params.id) {
    return res
      .status(400)
      .json({ error: "user id is missing in the request parameter", status: false });
  }
  const id = req.params.id;
  try {
    const result = await userService.deleteById(id);
    if (result.status) {
      res.status(200).json({ status: true, message: result.message, data: result.data });
    } else {
      res.status(400).json({ status: false, message: result.message });
    }
  } catch (error) {
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const updateById = async (req, res) => {
  if (!req.params.id) {
    return res
    .status(400)
    .json({ error: "user id is missing in the request parameter", status: false });
  }
  const id = req.params.id;
  const { firstName, lastName, email } = req.body;
  if (!firstName ||!lastName ||!email) {
    return res
     .status(400)
     .json({ error: "first name, last name and email are required for update" });
  }
  const dataToUpdate = [firstName, lastName, email, id];
  try {
    const result = await userService.updateById(dataToUpdate);
    if (result.status) {
      res.status(200).json({ message: result.message, status: true });
    } else {
      res.status(400).json({ message: result.message, status: false });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};