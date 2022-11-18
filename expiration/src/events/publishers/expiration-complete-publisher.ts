import { ExpirationCompleteEvent, Publisher, Subjects } from "@chgittix/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
