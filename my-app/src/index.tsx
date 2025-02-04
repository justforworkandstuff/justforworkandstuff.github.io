import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import DefaultErrorPage from "modules/error/defaultErrorPage";
import HomePage from "modules/home/homePage";
import { RouterPath } from "shared/constants/enums";
import { store } from "shared/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route
          path={RouterPath.Initial}
          element={<HomePage />}
          errorElement={<DefaultErrorPage />}
        />
      </Routes>
    </HashRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
