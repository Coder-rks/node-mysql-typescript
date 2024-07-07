import { DataTypes, Model, Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "password",
    database: "db"
});

sequelize
    .sync()
    .then(() => {
        console.log('Connected')
    })
    .catch(error => {
        console.log(error);
    })

    class User extends Model {
        public id!: number;
        public name!: string;
        public email!: string;
    }

    User.init({
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },{
        sequelize,
        tableName: "users"
    });

    export default User


