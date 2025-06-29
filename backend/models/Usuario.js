import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";
import Role from "./Role.js";

class User extends Model {
  async validatePassword(passwordEnTextoPlano) {
    return await bcrypt.compare(passwordEnTextoPlano, this.password);
  }
}

User.init(
  {
    nombre: {
      type: DT.STRING,
      allowNull: false,
    },
    apellido: {
      type: DT.STRING,
      allowNull: false,
    },
    email: {
      type: DT.STRING(),
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: DT.STRING,
      allowNull: false,
    },
    salt: {
      type: DT.STRING(),
    },
    roleId: {
      type: DT.INTEGER(),
      allowNull: false,
      defaultValue: 2, // 1=admin, 2=user 
      references: {
        model: Role,
        key: "id",
      },
    },
  },
  {
    sequelize: connection,
    modelName: "User",
    timestamps: false,
  }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt();
  user.salt = salt;
  user.password = await bcrypt.hash(user.password, salt);
});

export default User;