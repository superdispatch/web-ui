import { describe, it, expect } from "vitest";
import { createCssColorVariables } from "../color/createCssColorVariables";

describe("createCssColorVariables", () => {
  it("should create css variables for light mode", () => {
    const variables = createCssColorVariables("light");
    expect(variables).toMatchSnapshot();
  });
  it("should create css variables for dark mode", () => {
    const variables = createCssColorVariables("dark");
    expect(variables).toMatchSnapshot();
  });
});
