import { PaymentCreatedEvent, Publisher, Subjects } from "@chgittix/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
