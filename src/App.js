import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Addusers from "./components/adduser";
import Displayusers from "./components/displayusers";
import Adduserstwo from "./components/adduser";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";

function App() {
  const [userDetails, setUserDetails] = useState([]);

  const theme = createTheme({
    typography: {
      poster: {
        fontSize: 18,
      },
    },
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/users/")
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="bgImageWrapper">
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <ThemeProvider theme={theme}>
            <AppBar
              position="static"
              style={{ backgroundColor: "rgb(232 243 245)" }}
            >
              <Toolbar>
                <Typography variant="poster" sx={{ display: "contents" }}>
                  <AccountCircleIcon color="primary" sx={{ fontSize: 45 }} />

                  <Link to="/" className="navbaritemWrapper">
                    Users List
                  </Link>
                  <Link to="/user-form" className="navbaritemWrapper">
                    Add Users
                  </Link>
                </Typography>
              </Toolbar>
            </AppBar>
          </ThemeProvider>
        </Box>

        <Routes>
          <Route path="/user-form" element={<Addusers />}></Route>
          <Route
            path="/"
            element={<Displayusers userDetails={userDetails} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
