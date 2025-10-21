import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemText from "@mui/material/ListItemText";
import Navbar from "../components/Navbar";
import { IoLogOutOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { sidebarItems } from "../assets/data/data";

const drawerWidth = 270;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const Container = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="flex bg-bg text-text h-screen overflow-hidden ">
      <CssBaseline />

      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          className: "no-scrollbar",
          style: {
            backgroundColor: "var(--bg)",
            color: "var(--text)",
            borderRight: "1px solid rgba(255,255,255,0.1)",
            height: "100vh",
            position: "fixed",
            overflowY: "auto",
          },
        }}
      >
        <div className="flex justify-center items-center p-6 border-b border-border sticky top-0 bg-bg z-10">
          {open ? (
            <h1 className="flex items-center text-[24px] font-[700] leading-[18px] tracking-[1px] text-text">
              Dubai<span className="text-[#D6A56D]">360</span>
            </h1>
          ) : (
            <h1 className="text-[24px] font-[700] leading-[18px] tracking-[1px] text-[#D6A56D]">
              360
            </h1>
          )}
        </div>

        <div className="bg-bg h-full px-3">
          <List>
            {sidebarItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  to={item.path}
                  key={item.text}
                  className="block group transition-all duration-300"
                >
                  <div
                    className={`flex items-center ${
                      open ? "gap-4" : "gap-10 justify-center py-2"
                    } px-3  mb-2 py-1 rounded  duration-300
                    ${
                      isActive
                        ? "bg-primary text-white"
                        : "hover:bg-primary hover:text-white"
                    }`}
                  >
                    <div
                      className={`text-[20px]  transition-colors duration-300 cursor-pointer ${
                        isActive
                          ? "text-white"
                          : "text-text group-hover:text-white"
                      }`}
                    >
                      {item.icon}
                    </div>

                    {open && (
                      <ListItemText
                        disableTypography
                        primary={
                          <span
                            className={`font-[500] text-[16px] transition-colors duration-300 ${
                              isActive
                                ? "text-white"
                                : "text-text group-hover:text-white"
                            }`}
                          >
                            {item.text}
                          </span>
                        }
                      />
                    )}
                  </div>
                </Link>
              );
            })}
          </List>

          <div
            className={`flex items-center duration-300 gap-4 justify-center
             bg-primary text-white  px-2 mb-2 py-2 rounded cursor-pointer`}
          >
            <IoLogOutOutline className="text-white" />
            {open && "Logout"}
          </div>
        </div>
      </Drawer>

      <main className="flex-1 bg-main p-4  overflow-y-auto h-screen no-scrollbar scroll-fade">
        <div
          onClick={() => setOpen(!open)}
          className={`absolute cursor-pointer top-30 p-[1px] duration-300 transform
         hover:bg-bg border border-border rounded-full ${
           open ? "left-[255px]" : "left-[3rem]"
         } z-[9999999]`}
        >
          {open ? (
            <ChevronLeftIcon className="text-text" />
          ) : (
            <ChevronRightIcon className="text-text" />
          )}
        </div>

        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Container;
