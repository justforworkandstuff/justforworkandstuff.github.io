import ContactPage from "modules/contact/contactPage";
import DefaultErrorPage from "modules/error/defaultErrorPage";
import HomePage from "modules/home/homePage";
import JourneyPage from "modules/journey/journeyPage";
import ProjectDetailPage from "modules/projects/projectDetailPage";
import ProjectsPage from "modules/projects/projectsPage";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouterPath } from "shared/constants/enums";
import { store } from "shared/store";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          path={RouterPath.Home}
          element={<HomePage />}
          errorElement={<DefaultErrorPage />}
        />
        <Route
          path={RouterPath.Journey}
          element={<JourneyPage />}
          errorElement={<DefaultErrorPage />}
        />
        <Route
          path={RouterPath.Projects}
          element={<ProjectsPage />}
          errorElement={<DefaultErrorPage />}
        />
        <Route
            path={RouterPath.ProjectDetail}
            element={<ProjectDetailPage />}
            errorElement={<DefaultErrorPage />}
          />
        <Route
          path={RouterPath.Contact}
          element={<ContactPage />}
          errorElement={<DefaultErrorPage />}
        />

        {/* Catch-all route for unknown URLs */}
        <Route path="*" element={<DefaultErrorPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
