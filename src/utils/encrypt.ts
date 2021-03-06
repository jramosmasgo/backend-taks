import bcrypt from "bcrypt";

export const encrypt = async (input: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(input, salt);
  return hashPassword;
};

export const compareEncrypt = async (
  password: string,
  encryptedPassword: string
): Promise<boolean> => bcrypt.compare(password, encryptedPassword);
