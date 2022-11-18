import { Publisher, Subjects, TicketUpdatedEvent } from "@chgittix/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
