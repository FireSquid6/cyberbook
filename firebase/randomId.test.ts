import randomId from "./randomId";

it("generates a random id", () => {
  const id = randomId();
  console.log(id);
  expect(id).toMatch(/^[0-9]{7,}$/);
});
