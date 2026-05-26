import { Schema, Document, model } from 'mongoose';

export interface IInquiry extends Document {
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
  status: 'pending' | 'contacted' | 'resolved';
  createdAt: Date;
  updatedAt: Date;
}

const InquirySchema = new Schema<IInquiry>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    product: { type: String, required: true },
    message: { type: String, required: true },
    status: { 
      type: String, 
      enum: ['pending', 'contacted', 'resolved'],
      default: 'pending'
    },
  },
  { timestamps: true }
);

export default model<IInquiry>('Inquiry', InquirySchema);
