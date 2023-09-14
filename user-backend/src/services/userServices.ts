import users from "../models/user";

const register = async (
  id: number,
  firstname: string,
  lastname: string,
  email: string,
  password: string
) => {
  try {
    const newUser = await users.create({id,firstname,lastname,email,password});
    return newUser;
  } catch (error) {
   throw new Error('Error fetching');
}
};

const login = async (email: string, password: string) => {
  try {
    const login = await users.findOne({
      where: { email },
    });
    if (!login) {
      throw new Error('User not found');
    }
    return login;
  } catch (error) {
   throw new Error('Error fetching');
  }
};

const getUserProfile = async (email: string) => {
  try {
    const getUserProfile = await users.findOne({
      where: { email },
    });

    if (!getUserProfile) {
      throw new Error('User not found');
    }

    return getUserProfile;
  } catch (error) {
   throw new Error('Error fetching');
  }
};

const getUserList = async () => {
  try {
    const userList = await users.findAll({});

    return userList;
  } catch (error) {
   throw new Error('Error fetching');
  }
};

export { register, login, getUserProfile, getUserList };