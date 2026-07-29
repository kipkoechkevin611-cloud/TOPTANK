export interface Product {
  id: string;
  name: string;
  capacity: string;
  dimensions: string;
  price: string;
  image: string;
  inStock: boolean;
  deliveryAvailable: boolean;
  category: string;
}

export interface ProductDetail extends Product {
  images: string[];
  specifications: Specification[];
  features: string[];
  installation: string[];
  delivery: DeliveryInfo;
  faq: FAQ[];
}

export interface Specification {
  label: string;
  value: string;
}

export interface DeliveryInfo {
  timeline: string;
  areas: string;
  cost: string;
  installation: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface WhatsAppOrderData {
  customerName?: string;
  phoneNumber?: string;
  email?: string;
  county?: string;
  town?: string;
  deliveryLocation?: string;
  productName: string;
  capacity: string;
  price: string;
  quantity: number;
  preferredDeliveryDate?: string;
  additionalNotes?: string;
}
