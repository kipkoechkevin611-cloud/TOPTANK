import { WhatsAppOrderData } from '@/types/product';

export function generateWhatsAppOrderMessage(data: WhatsAppOrderData): string {
  const message = `
NEW ORDER

Customer Name: ${data.customerName || 'To be provided'}
Phone Number: ${data.phoneNumber || 'To be provided'}
Email: ${data.email || 'To be provided'}
County: ${data.county || 'To be provided'}
Town: ${data.town || 'To be provided'}

Product Name: ${data.productName}
Capacity: ${data.capacity}
Price: ${data.price}
Quantity: ${data.quantity}
Total: ${data.price} x ${data.quantity}

Preferred Delivery Date: ${data.preferredDeliveryDate || 'To be discussed'}
Additional Notes: ${data.additionalNotes || 'None'}

Please assist with payment and delivery.
  `.trim();

  return encodeURIComponent(message);
}

export function openWhatsAppOrder(phoneNumber: string, data: WhatsAppOrderData): void {
  const message = generateWhatsAppOrderMessage(data);
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}
