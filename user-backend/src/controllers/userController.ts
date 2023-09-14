import { Request, Response } from 'express';
import {
   login,
   register,
   getUserProfile,
   getUserList,
 } from '../services/userServices';

const registerController = async (req: Request, res: Response) => {
  const { id, firstname, lastname, email, password } = req.body;
  try {
    const newUser = await register(id, firstname, lastname, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
};

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await login(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};

const getUserProfileController = async (req: Request, res: Response) => {
  const { email } = req.params;
  try {
    const userProfile = await getUserProfile(email);
    res.status(200).json(userProfile);
  } catch (error) {
    res.status(404).json({ error: 'User not found' });
  }
};

const getUserListController = async (req: Request, res: Response) => {
  try {
    const userList = await getUserList();
    res.status(200).json(userList);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user list' });
  }
};

export { registerController, loginController, getUserProfileController, getUserListController };