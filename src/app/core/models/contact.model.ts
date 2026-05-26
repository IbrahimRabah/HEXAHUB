/**
 * HexaHub Contact Models
 */

/** Shape of the contact form payload sent to the backend */
export interface ContactFormModel {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  interestedSystem: string;
  message: string;
}
