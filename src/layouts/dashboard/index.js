import React from "react";
import { Outlet } from "react-router-dom";
import {  Stack } from "@mui/material";
import SideBar from "./SideBar"
const DashboardLayout = () => {
  return (
    <Stack direction="row">
      {/* sideBar */}
      <SideBar/>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
