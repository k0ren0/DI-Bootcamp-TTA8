async function createUser(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
  
    return knex.transaction(async (trx) => {
      try {
        const [userId] = await trx('users_dc').insert({
          username,
          password: hashedPassword,
        }).returning('id');
  
        await trx.commit();
        return userId;
      } catch (error) {
        await trx.rollback();
        throw error;
      }
    });
  }
  

module.exports = { createUser };
