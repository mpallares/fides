import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./Button";

test("should render Button component", () => {
  const title = "I am a test";
  render(<Button title={title} />);

  expect(screen.getByText(title)).toBeInTheDocument();
});

test("should button onClick work", () => {
  const mockFn = jest.fn();
  const title = "I am a test";
  render(<Button title={title} onClick={mockFn} />);
  fireEvent.click(screen.getByText(title));
  expect(mockFn).toBeCalled();
});
