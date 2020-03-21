import { model, Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface Iuser extends Document {
  email: string;
  password: string;
}

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre<Iuser>("save", async function(next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);
  this.password=hash;
  next();
});

userSchema.methods.comparePass = async function (pass: string): Promise<boolean> {
    return await bcrypt.compare(pass, this.password);
}

export default model<Iuser>("User", userSchema);
