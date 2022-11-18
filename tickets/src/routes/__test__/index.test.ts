import request from "supertest";
import { app } from "../../app";

const createTicket = (price: number, title: string) => {
  return request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({ price, title });
};

it("can  fetch a list of tickets", async () => {
  await createTicket(20, "asgfgh");
  await createTicket(20, "asgfgh");
  await createTicket(20, "asgfgh");

  const response = await request(app).get("/api/tickets").send().expect(200);

  expect(response.body.length).toEqual(3);
});
