const { User } = require('../models');

const userdata = [ 
    {
      username: 'NerdAlert',
      password: 'NA123'  
    },
    {
      username: 'MaddyB',
      password: 'MB456'
    },
    {
      username: 'BreadLover',
      password: 'BL789'
    }
]

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;