import { Schema, Document, model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  category: string;
  subcategory: string;
  capacity: number;
  capacityUnit: string;
  description: string;
  specifications: string[];
  price: number;
  priceRange: string;
  images: string[];
  featured: boolean;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    capacity: { type: Number, required: true },
    capacityUnit: { type: String, required: true, default: 'liters' },
    description: { type: String, required: true },
    specifications: [{ type: String }],
    price: { type: Number, required: true },
    priceRange: { type: String, required: true },
    images: [{ type: String }],
    featured: { type: Boolean, default: false },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default model<IProduct>('Product', ProductSchema);
