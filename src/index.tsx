import reactDom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "./Redux";

reactDom.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
