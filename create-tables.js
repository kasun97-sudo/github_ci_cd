const Owner = require('./models/admin/owners');

(async () => {
    try {
      await Owner.sync({ force: true });
      console.log('Tables created successfully!');
    } catch (error) {
      console.error('Error creating tables:', error);
    } finally {
      await Owner.sequelize.close();
    }
})(); 