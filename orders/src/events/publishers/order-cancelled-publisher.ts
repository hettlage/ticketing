import { OrderCancelledEvent, Publisher, Subjects } from "@chgittix/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
