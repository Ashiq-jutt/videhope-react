import { Navigate, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import PersistentDrawerLeft from "./components/drawer";
import SignIn from "./pages/sigIn";
import AllUser from "./pages/allUser";
import { Box, Icon, Paper } from "@mui/material";
import PaymentData from "./pages/paymentData";
import Setting from "./pages/setting";
import Earnings from "./pages/earnings";
import ReportContent from "./pages/report-content";
import ChangeName from "./pages/change-name";
import UserProfile from "./pages/user-profile";
import Table from "./pages/image-file";
import FileImage from "./pages/image-file";
import { employedPortal } from "./assets/images";
import EmployePortal from "./pages/employe-portal";
import EmployeePortal from "./pages/employe-portal";
import EmployeeDetail from "./pages/newest-detail";
import NewestDetail from "./pages/newest-detail";
// import Home from "./pages/test";
const routes = [
  {
    type: "collapse",
    name: "All Users",
    key: "users",
    icon: "group",
    route: "/allUsers",
    component: <AllUser />,
  },
  {
    type: "collapse",
    name: "Payments",
    key: "payments",
    icon: "payments",
    route: "/payments",
    component: <PaymentData />,
  },
  {
    type: "collapse",
    name: "Earnings",
    key: "earnings",
    icon: "earnings",
    route: "/earnings",
    component: <Earnings />,
  },
  {
    type: "collapse",
    name: "Reported content",
    key: "reportedContent",
    icon: "reportedContent",
    route: "/reportedContent",
    component: <ReportContent />,
  },
  {
    type: "collapse",
    name: "Settings",
    key: "settings",
    icon: "settings",
    route: "/settings",
    component: <Setting />,
  },
  {
    type: "collapse",
    name: "signout",
    key: "signout",
    icon: "logout",
    route: "/signout",
    component: <SignIn />,
  },
];
const getRoutes = (allRoutes) =>
  allRoutes.map((route) => {
    // if (route.collapse) {
    //   return getRoutes(route.collapse);
    // }

    if (route.route) {
      return (
        <Route
          exact
          path={route.route}
          element={route.component}
          key={route.key}
        />
      );
    }

    return null;
  });

function App() {
  return (
    // <img src={employedPortal} />
    // <EmployeePortal />
    <NewestDetail />
    // <PersistentDrawerLeft routes={routes}>
    //   <Routes>
    //     {getRoutes(routes)}
    //     <Route path="*" element={<Navigate to="/allUsers" />} />
    //     <Route path="/userProfile" element={<UserProfile />} />
    //   </Routes>
    // </PersistentDrawerLeft>
    // <PaymentData />
  );
}

export default App;
