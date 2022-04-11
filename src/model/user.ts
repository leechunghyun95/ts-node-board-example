import {
  DataType,
  AutoIncrement,
  PrimaryKey,
  Column,
  AllowNull,
  Default,
  HasMany,
  Table,
  BelongsToMany,
  Unique,
  Model,
} from "sequelize-typescript";
import BaseModel from "@model/base_model";

@Table({
  tableName: "user",
})
export default class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER.UNSIGNED)
  idx!: number;

  @Unique
  @AllowNull(false)
  @Column(DataType.CHAR)
  email!: string;

  @AllowNull(false)
  @Column(DataType.CHAR)
  name!: string;

  @AllowNull(false)
  @Column(DataType.CHAR)
  password!: string;
}
