import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
      unique: [true, 'Email already exists!'],
      required: [true, 'Email is required!'],
    },
    password: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
    bann: {
      type: Boolean,
      default: false,
    },
    termsAndConditions: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: 'user',
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const User = models.User || model('User', UserSchema);

export default User;
