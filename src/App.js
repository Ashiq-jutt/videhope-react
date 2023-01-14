import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
// import React from "react";
import "./App.css";
import PersistentDrawerLeft from "./components/drawer";
import SignIn from "./pages/sigIn";
import Setting from "./pages/setting";
import ReportContent from "./pages/report-content";
import UserProfile from "./pages/user-profile";
import EmployeePortal from "./pages/employe-portal";
import CreatePanel from "./pages/create-panel";
import Accounting from "./pages/accounting";
import CreatorEarning from "./pages/creator-earning";
import FilterEarning from "./pages/filter-accounting";

=======
import "./App.css";
import PersistentDrawerLeft from "./components/drawer";
import UserData from "./components/userData";
import Accounting from "./pages/accounting";
import CreateNewUser from "./pages/create-new-user";
import CreatePanel from "./pages/create-panel";
import CustomerServices from "./pages/customer-services";
import EmployeePortal from "./pages/employe-portal";
import NewestDetail from "./pages/newest-detail";
import ReportContent from "./pages/report-content";
import SignIn from "./pages/sigIn";
import UserProfile from "./pages/user-profile";
import WithdrawRwquest from "./pages/withdraw-request";
import EditProfile from './pages/edit';
import Detail from "./pages/detail";
import Chat from "./pages/chat";
// import Home from "./pages/test";
>>>>>>> fa443f5fa8e27df1994a7de4aad570fbf1d335d0
const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "users",
    icon: "dash",
    route: "/dashboard",
    component: <EmployeePortal />,
  },
  {
    type: "collapse",
    name: "Accounting",
    key: "Accounting",
    icon: "Accounting",
    route: "/Accounting",
    component: <Accounting />,
  },
  {
    type: "collapse",
    name: "CreatePortal",
    key: "CreatePortal",
    icon: "CreatePortal",
    route: "/CreatePortal",
    component: <CreatePanel />,
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
    name: "Customer Service",
    key: "customerService",
    icon: "customerService",
    route: "/customerService",
    component: <CustomerServices />,
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
<<<<<<< HEAD
    // <AllUser />
    // <PersistentDrawerLeft routes={routes}>
    //   <Routes>
    //     {getRoutes(routes)}
    //     <Route path="*" element={<Navigate to="/dashboard" />} />
    //     <Route path="/userProfile" element={<UserProfile />} />
    //   </Routes>
    // </PersistentDrawerLeft>
    // <Detail />
    // <WithdrawRwquest />
    // <CreatorEarning />
    <FilterEarning />
=======
    <PersistentDrawerLeft routes={routes}>
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/allUsers" element={<UserData />} />
        <Route path="/createNewUser" element={<CreateNewUser />} />
        <Route path="/newestDetail" element={<NewestDetail />} />
        <Route path="/withdrawRwquest" element={<WithdrawRwquest />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </PersistentDrawerLeft>
>>>>>>> fa443f5fa8e27df1994a7de4aad570fbf1d335d0
  );
}

export default App;
