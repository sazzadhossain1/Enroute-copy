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
import RecruitmentButtonDataById from "./components/RecruitmentButtonDataById/RecruitmentButtonDataById";
import HrConsulting from "./components/HrConsulting/HrConsulting";
import SkillsRecruitment from "./components/SkillsRecruitment/SkillsRecruitment";
import PreEmploymentVerification from "./components/PreEmploymentVerification/PreEmploymentVerification";
import CustomizedProgram from "./components/CustomizedProgram/CustomizedProgram";
import LeadershipExecutiveCoaching from "./components/LeadershipExecutiveCoaching/LeadershipExecutiveCoaching";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://enroute-copy-server-ib1j.vercel.app/allApis");
          },
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: async () => {
            return fetch("https://enroute-copy-server-ib1j.vercel.app/allApis");
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
              `https://enroute-copy-server-ib1j.vercel.app/allApis/${params.manageServiceProductId}`
            );
          },
          element: <ManagedServiceProduct></ManagedServiceProduct>,
        },
        {
          path: "/recruitmentButtonDataBy/:recruitmentButtonDataById",
          loader: async ({ params }) => {
            return fetch(
              `https://enroute-copy-server-ib1j.vercel.app/allApisTwo/${params.recruitmentButtonDataById}`
            );
          },
          element: <RecruitmentButtonDataById></RecruitmentButtonDataById>,
        },
        {
          path: "/hrConsulting",
          loader: async () => {
            return fetch("https://enroute-copy-server-ib1j.vercel.app/allApis");
          },

          element: <HrConsulting></HrConsulting>,
        },
        {
          path: "/skillsRecruitment",
          loader: async () => {
            return fetch("https://enroute-copy-server-ib1j.vercel.app/allApis");
          },
          element: <SkillsRecruitment></SkillsRecruitment>,
        },
        {
          path: "/preEmploymentVerification",
          loader: async () => {
            return fetch("https://enroute-copy-server-ib1j.vercel.app/allApis");
          },
          element: <PreEmploymentVerification></PreEmploymentVerification>,
        },
        {
          path: "/customizedProgram",
          element: <CustomizedProgram></CustomizedProgram>,
        },
        {
          path: "/leadershipExecutiveCoaching",
          loader: async () => {
            return fetch("https://enroute-copy-server-ib1j.vercel.app/allApis");
          },
          element: <LeadershipExecutiveCoaching></LeadershipExecutiveCoaching>,
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
