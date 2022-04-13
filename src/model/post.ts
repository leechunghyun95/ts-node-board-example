import {
  DataType,
  Table,
  Model,
  Column,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

import User from "../model/user";

@Table({
  tableName: "post",
  modelName: "Post",
})
export default class Post extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  idx: number;

  @Column
  title: string;

  @Column
  contents: string;

  @ForeignKey(() => User)
  @Column
  writer: number;

  @BelongsTo(() => User)
  user: User;
}
