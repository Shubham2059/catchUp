// import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
// import HomePage from "scenes/homePage";
// import LoginPage from "scenes/loginPage";
// import ProfilePage from "scenes/profilePage";
// import { useMemo } from "react";
// import { useSelector } from "react-redux";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { createTheme } from "@mui/material/styles";
// import { themeSettings } from "./theme";

// function App() {
//   const mode = useSelector((state) => state.mode);
//   const user = useSelector((state) => state.user); // Check if the user is logged in
//   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
//   const isAuth = Boolean(useSelector((state) => state.token));

//   return (
//     <div className="app">
//       <BrowserRouter>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//           <Routes>
//             Redirect to home if the user is already logged in
//             <Route
//               path="/"
//               element={user ? <Navigate to="/home" /> : <LoginPage />}
//             />
//             <Route path="/home" element={<HomePage />} />
//             <Route path="/profile/:userId" element={<ProfilePage />} />
//             {/* Catch-all route for undefined paths */}
//             <Route path="*" element={<Navigate to="/home" />} />
//           </Routes>
//         </ThemeProvider>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

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
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
