import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IReview extends Document {
  productId: string;
  customerName: string;
  customerEmail: string;
  rating: number;
  text: string;
  category: string;
  verified: boolean;
  approved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema: Schema = new Schema(
  {
    productId: {
      type: String,
      required: true,
      index: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    text: {
      type: String,
      required: true,
      maxlength: 1000,
    },
    category: {
      type: String,
      enum: ['Residential', 'Commercial', 'Agricultural', 'Industrial'],
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    approved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Review: Model<IReview> = mongoose.models.Review || mongoose.model<IReview>('Review', ReviewSchema);

export default Review;
