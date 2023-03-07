// import argon2 from 'argon2';
const bcrypt = require('bcrypt');

export const hashPassword = async (password: string): Promise<string> => {
  // const hash = await argon2.hash(password, {
  //   type: argon2.argon2id,
  // });
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
  // const isMatch = await argon2.verify(hash, password);
  const isMatch = await bcrypt.compare(password, hash);
  return isMatch;
};
