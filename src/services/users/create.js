const { usersSchema } = require('../../middlewares/joiSchemas');
const users = require('../../models/document')('users');

module.exports = async (user) => {
  const valid = usersSchema.validate(user);
  if (valid.error) {
    return { err: { code: 'invalidEntries' } };
  }

  try {
    const findUser = await users.find({ email: user.email });
    if (findUser) {
      return { err: { code: 'emailAlreadyExists' } };
  }
  const insert = await users.create({ ...user, role: 'user' });
  const { password, ...userData } = insert.ops[0];
  return userData;
} catch (e) {
  console.log(e);
}
return user;
};