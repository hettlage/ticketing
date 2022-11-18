import { Publisher, Subjects, TicketCreatedEvent } from "@chgittix/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
