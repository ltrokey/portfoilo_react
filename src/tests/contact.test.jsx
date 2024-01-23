import { render, fireEvent } from "@testing-library/react";
import Contact from "../pages/Contact";
import ContactForm from "../components/UI/contact";
import { expect, test } from "vitest";
import { JSDOM } from "jsdom";

const dom = new JSDOM("<!doctype html><html><body></body></html>");
global.document = dom.window.document;
global.window = dom.window;

test("Contact page renders without errors", async () => {
  const { container } = render(<Contact />);

  expect(container.innerHTML, "Contact");
});

test("Form submission works correctly", async () => {
  const { getByLabelText, getByText } = render(<ContactForm />);

  fireEvent.change(getByLabelText("Name"), { target: { value: "John Smith" } });
  fireEvent.change(getByLabelText("Email address"), {
    target: { value: "jsmith@email.com" },
  });
  fireEvent.change(getByLabelText("Message"), {
    target: { value: "Hello world!" },
  });

  fireEvent.click(getByText("Send"));
});
