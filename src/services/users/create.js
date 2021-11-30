const { usersSchema } = require('../../middlewares/joiSchemas');
const users = require('../../models/document')('users');

module.exports = async (user, role) => {
  const valid = usersSchema.validate(user);
  if (valid.error) {
    return { err: { code: 'invalidEntries' } };
  }

  try {
    const findUser = await users.find({ email: user.email });
    if (findUser) {
      return { err: { code: 'emailAlreadyExists' } };
  }
  const inserted = await users.insert({ ...user, role: role || 'user' });
  const { password, ...userData } = inserted.ops[0];
  return userData;
} catch (e) {
  console.log(e);
}
return user;
};