import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ScrollToTop from "./hooks/ScrollToTop";
import ScrollToTop from "./hooks/ScrollToTop";
import { RouteData } from "./utils/Routes";
// import { ToastContainer } from "react-toastify";
function App() {
  return (
    <BrowserRouter>
      {/* <ToastContainer /> */}
      <ScrollToTop>
        <Routes>
          {RouteData.map((item) => {
            return (
              <>
                {!item.protected ? (
                  <Route
                    path={item.path}
                    element={item.element}
                    key={item.id}
                  />
                ) : (
                  <Route
                    path={item.path}
                    element={item.element}
                    key={item.id}
                  />
                )}
              </>
            );
          })}
          {/* {routes} */}
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
