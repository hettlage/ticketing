import request from "supertest";
import { app } from "../../app";

it("returns a 201 o successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@example.com",
      password: "password",
    })
    .expect(201);
});

it("returns a 400 for an invalid email address", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test",
      password: "password",
    })
    .expect(400);
});

it("returns a 400 for an invalid password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@example.com",
      password: "p",
    })
    .expect(400);
});

it("returns a 400 for missing email and password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@example.com",
    })
    .expect(400);
  return request(app)
    .post("/api/users/signup")
    .send({ password: "password" })
    .expect(400);
});

it("disallows duplicate emails", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@example.com",
      password: "password",
    })
    .expect(201);

  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@example.com",
      password: "password",
    })
    .expect(400);
});

it("sets a cookie after successful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@example.com",
      password: "password",
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});
