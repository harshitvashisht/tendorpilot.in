/** Tenderpilot support destinations. WhatsApp uses international format without + or spaces. */
export const whatsappNumber = '919187943361'
export const supportEmail = 'support@tenderpilot.in'
// Public Formspree endpoint for the Tenderpilot enquiry form.
export const formspreeEndpoint = 'https://formspree.io/f/meagarpz'

export function makeWhatsAppLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

