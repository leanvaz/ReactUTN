import { render, fireEvent } from "@testing-library/react";

import Counter from "../counter";

describe("Counter", () => {
	test("on mount should render counter componen with default values", () => {
		const { getByText, getByRole } = render(<Counter />);
		getByText(/counter/i);
		getByText("Valor: 0");
		getByRole("button", { name: "+ 1" });
		getByRole("button", { name: "- 1" });
	});

	test("+1 Button onClick should increment with the asignet interval(1)", () => {
		const { getByText, getByRole } = render(<Counter />);
		fireEvent.click(getByRole("button", { name: "+ 1" }));
		getByText("Valor: 1");
	});

	test("-1 Button onClick should decrement with the asignet interval(1)", () => {
		const { getByText, getByRole } = render(<Counter />);
		fireEvent.click(getByRole("button", { name: "- 1" }));
		getByText("Valor: -1");
	});
});
