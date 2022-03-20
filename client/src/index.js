import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { store } from "./reducers";
import { theme } from "./common/theme";

ReactDOM.render(
  <Provider {...{ store }}>
    <ThemeProvider {...{ theme }}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
