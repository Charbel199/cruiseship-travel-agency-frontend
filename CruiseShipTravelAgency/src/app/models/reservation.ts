export interface Reservation {
  reservationId: number;
  reservationTicketId: number;
  reservationRoomId: number;
  reservationTravelPlanId: number;
  reservationPrice: number;
  ticketDateOfPurchase: string;
  departureDate: string;
  ticketCustomerId: number;
}
