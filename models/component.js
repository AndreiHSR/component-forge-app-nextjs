import { Schema, model, models } from 'mongoose';

const ComponentSchema = new Schema(
  {
    userId: {
      type: String,
    },
    title: {
      type: String,
    },
    output: {
      type: String,
    },
    conversationHistory: {
      type: Array,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const Component = models.Component || model('Component', ComponentSchema);

export default Component;
