import { afterEach, beforeAll } from "vitest";
import { server } from "./src/mocks/server";
beforeAll(async () => {
  console.log("Vitest setup...");
  await server.listen();
  console.log("MSW Activating");
});
afterEach((d) => {
  console.log(`finished [${d.task.name}]`);
});
