import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    telephone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    manager: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
