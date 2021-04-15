import reactDom from "react-dom";
import App from "./App";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import { Provider } from "react-redux";
import { Store } from "./Redux";

reactDom.render(
  <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
