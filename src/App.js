import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./LayOut/Main";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Industry from "./components/Industry/Industry";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/service",
          element: <Services></Services>,
        },
        {
          path: "/industry",
          element: <Industry></Industry>,
        },
        {
          path: "/contactUs",
          element: <ContactUs></ContactUs>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
