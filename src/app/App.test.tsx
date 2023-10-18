import { Provider } from "react-redux";
import { render, screen } from "../test/test-utils";
import { store } from "./store";
import App from "./App";

test("renders title text", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(screen.getByText(/React/i)).toBeInTheDocument();
});
