import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";
import Role from "./Role.js";

// Modelo que representa un usuario del sistema
class User extends Model {
  // Método para validar la contraseña ingresada contra el hash almacenado
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
      validate: { isEmail: true }, // Valida formato de email
    },
    // Contraseña hasheada
    password: {
      type: DT.STRING,
      allowNull: false,
    },
    // Salt utilizado para el hash de la contraseña
    salt: {
      type: DT.STRING(),
    },
    // Rol del usuario (admin o user), valor por defecto: user
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
    sequelize: connection, // Conexión a la base de datos
    modelName: "User",
    timestamps: false,
  }
);

// Hook que se ejecuta antes de crear un usuario para hashear la contraseña
User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt();
  user.salt = salt;
  user.password = await bcrypt.hash(user.password, salt);
});

export default User;