import * as userRepository from "../repositories/userRepository.js";
import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

export const create = async (firstName, lastName, email) => {
  try {
    const exUser = await userRepository.getExUser(email);
    if (exUser.length > 0) {
      return {
        results: exUser,
        message: "user is already exists",
        status: false,
      };
    }
    const result = await userRepository.create(firstName, lastName, email);
    return {
      results: result,
      message: "user added successfully",
      status: true,
    };
  } catch (error) {
    return { status: false, message: error };
  }
};

export const get = async () => {
  try {
    const result = await userRepository.get();
    if (result.length > 0) {
      return {
        status: true,
        message: "get all users successfully",
        data: result,
      };
    } else {
      return {
        status: false,
        message: "No users in database",
      };
    }
  } catch (error) {
    console.error(error);
    return { status: false, message: error.message };
  }
};

export const deleteById = async (id) => {
  try {
    const getExuser = await userRepository.getExuserById(id);
    if (getExuser.length > 0) {
      const result = await userRepository.deleteById(id);
      if (result) {
        return { status: true, message: "user deleted Successfully" };
      } else {
        return { status: false, message: "Error when deleting user" };
      }
    } else {
      return { status: false, message: "No user found with that id" };
    }
  } catch (error) {
    return { status: false, message: error.message };
  }
};

export const updateById = async (data) => {
  try {
    const [firstName, lastName, email, id] = data;
    const getExuser = await userRepository.getExuserById(id);
    if (!getExuser.length > 0) {
      return {
        results: getExuser,
        message: "user isn't exists",
        status: false,
      };
    }
    const result = await userRepository.updateById(data);
    return {
      status: true,
      message: "user updated successfully",
      data: result,
    };
  } catch (error) {
    return { status: false, message: error.message };
  }
};