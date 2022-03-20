import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { store } from "./reducers";
import { theme } from "./common/theme";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider {...{ store }}>
    <ThemeProvider {...{ theme }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
