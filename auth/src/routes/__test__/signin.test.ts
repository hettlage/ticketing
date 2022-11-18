import request from "supertest";
import { app } from "../../app";

it("fails with a non-existing email", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@example.com",
      password: "password",
    })
    .expect(400);
});

it("fails with an incorrect password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@example.com",
      password: "password",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@example.com",
      password: "tyuioopuy",
    })
    .expect(400);
});

it("should respond with a cookie when signing in with valid credentials", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@example.com",
      password: "password",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@example.com",
      password: "password",
    })
    .expect(200);
  expect(response.get("Set-Cookie")).toBeDefined();
});
