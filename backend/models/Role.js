import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

// Modelo que representa un rol de usuario 
class Role extends Model {}

Role.init(
  {
    
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: connection, // Conexión a la base de datos
    modelName: "Role",     
    timestamps: false,     
  }
);

export default Role;