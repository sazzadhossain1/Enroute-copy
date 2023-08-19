import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./LayOut/Main";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Industry from "./components/Industry/Industry";
import ContactUs from "./components/ContactUs/ContactUs";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ManagedServiceProduct from "./components/ManagedServiceProduct/ManagedServiceProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("http://localhost:5000/allApis");
          },
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: async () => {
            return fetch("http://localhost:5000/allApis");
          },
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
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>,
        },
        {
          path: "/manageServiceProduct/:manageServiceProductId",
          loader: async ({ params }) => {
            return fetch(
              `http://localhost:5000/allApis/${params.manageServiceProductId}`
            );
          },
          element: <ManagedServiceProduct></ManagedServiceProduct>,
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
