import React from "react";
import { render, fireEvent, screen} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";


test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);

    const header = getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
  });

  test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    fireEvent.change(firstNameInput, {
      target: {
        value: "Carson",
      },
    });
    fireEvent.change(lastNameInput, {
      target: {
        value: "Myers",
      },
    });
    fireEvent.change(addressInput, {
      target: {
        value: "1262 S 1170 W",
      },
    });
    fireEvent.change(cityInput, {
      target: {
        value: "Orem",
      },
    });
    fireEvent.change(stateInput, {
      target: {
        value: "UT",
      },
    });
    fireEvent.change(zipInput, {
      target: {
        value: "84058",
      },
    });

    expect(firstNameInput.value).toBe("Carson");
    expect(lastNameInput.value).toBe("Myers");
    expect(addressInput.value).toBe("1262 S 1170 W");
    expect(cityInput.value).toBe("Orem");
    expect(stateInput.value).toBe("UT");
    expect(zipInput.value).toBe("84058");
    const checkoutButton = screen.getByText("Checkout");
    fireEvent.click(checkoutButton);

    const grabName = screen.getByText(/Carson/i);
    expect(grabName).toBeInTheDocument();

    const success = screen.getByTestId(/successMessage/i);
    expect(success).toBeInTheDocument();
  }); 