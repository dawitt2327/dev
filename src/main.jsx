import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./features/store";
import SocketProvider from "./context/messaging";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <Router>
        <SocketProvider >
          <App />
        </SocketProvider>
      </Router>
    </Provider>
  </>
);
