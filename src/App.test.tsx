import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
  expect(screen.getByText(/I am children/i)).toBeInTheDocument();

  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByRole("banner")).toBeInTheDocument();
  expect(screen.getByRole("link")).toBeInTheDocument();
});

describe("App", () => {
  test("renders App component", async () => {
    render(<App />);

    expect(screen.queryByText(/My name is/)).toBeNull();
    //
    // // screen.debug();
    //
    // expect(await screen.findByText(/My name is/)).toBeInTheDocument();
    //
    // // screen.debug();
  });
});

// it("renders learn react link with cypress", () => {
//   mount(<App />);
//   cy.get("a").contains("Learn React");
// });

// describe("<App/>", () => {
//   it("Renders without crashing", () => {
//     const app = mount(<App />);
//     // expect(app.find("learn react").text()).toEqual("learn react ");
//   });
// });
