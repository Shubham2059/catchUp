import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const user = useSelector((state) => state.user); // Check if the user is logged in
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* Redirect to home if the user is already logged in */}
            <Route
              path="/"
              element={user ? <Navigate to="/home" /> : <LoginPage />}
            />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
