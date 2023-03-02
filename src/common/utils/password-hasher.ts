import argon2 from 'argon2';

export const hashPassword = async (password: string): Promise<string> => {
  const hash = await argon2.hash(password, {
    type: argon2.argon2id,
  });

  return hash;
};

export const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
  const isMatch = await argon2.verify(hash, password);

  return isMatch;
};
