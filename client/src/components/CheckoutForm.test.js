import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  // Arrange
  const { getByText } = render(<CheckoutForm />);
  // Act
  const header = getByText(/Checkout Form/i);
  // Assert
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const addressInput = screen.getByLabelText(/Address/i);
  const cityInput = screen.getByLabelText(/City/i);
  const stateInput = screen.getByLabelText(/State/i);
  const zipInput = screen.getByLabelText(/Zip/i);

  fireEvent.change(firstNameInput, { target: { value: "Donavyn" } });
  fireEvent.change(lastNameInput, { target: { value: "Haley" } });
  fireEvent.change(addressInput, { target: { value: "1910 nw 7th pl" } });
  fireEvent.change(cityInput, {
    target: { value: "Vancouver" },
  });
  fireEvent.change(stateInput, { target: { value: "WA" } });
  fireEvent.change(zipInput, { target: { value: "97030" } });

  /* "Checkout" has multiple elements
  const submitButton = screen.getByText(/Checkout/i);
  */
  const submitButton = screen.getByTestId(/submit/i);

  fireEvent.click(submitButton);

  const checkFirstName = screen.getByText(/Donavyn/i);
  const checkLastName = screen.getByText(/Haley/i);
  const checkAddress = screen.getByText(/1910 nw 7th pl/i);
  const checkCity = screen.getByText(/Vancouver/i);
  const checkState = screen.getByText(/WA/i);
  const checkZip = screen.getByText(/97030/i);

  expect(checkFirstName).toBeInTheDocument();
  expect(checkLastName).toBeInTheDocument();
  expect(checkAddress).toBeInTheDocument();
  expect(checkCity).toBeInTheDocument();
  expect(checkState).toBeInTheDocument();
  expect(checkZip).toBeInTheDocument();
});
