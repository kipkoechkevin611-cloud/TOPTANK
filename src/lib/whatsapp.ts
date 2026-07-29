import { WhatsAppOrderData } from '@/types/product';

export function generateWhatsAppOrderMessage(data: WhatsAppOrderData): string {
  const message = `
NEW ORDER

Customer Name: ${data.customerName || 'To be provided'}
Phone Number: ${data.phoneNumber || 'To be provided'}
Email: ${data.email || 'Not provided'}
County: ${data.county || 'To be provided'}
Town: ${data.town || 'To be provided'}
Delivery Location: ${data.deliveryLocation || 'To be provided'}

Product Name: ${data.productName}
Capacity: ${data.capacity}
Price: ${data.price}
Quantity: ${data.quantity}
Total: ${data.price} x ${data.quantity}

Date: ${new Date().toLocaleDateString('en-KE', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
 })}
Additional Notes: ${data.additionalNotes || 'None'}

Please assist with payment and delivery.
  `.trim();

  return encodeURIComponent(message);
}

export function openWhatsAppOrder(phoneNumber: string, data: WhatsAppOrderData): void {
  const message = generateWhatsAppOrderMessage(data);
  // Format phone number to ensure it has country code
  const formattedNumber = phoneNumber.startsWith('+') ? phoneNumber.substring(1) : phoneNumber;
  window.open(`https://wa.me/${formattedNumber}?text=${message}`, '_blank');
}
