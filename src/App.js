import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Scenes/global/Topbar";
import Sidebar from "./Scenes/global/Sidebar";
import Dashboard from "./Scenes/dashboard";
import PageClients from "./Scenes/PageClients";
import B2B from "./Scenes/B2B";
import B2C from "./Scenes/B2C";
import C2C from "./Scenes/C2C";
import Segmentation from "./Scenes/Segmentation";
import Rapport from "./Scenes/Rapport";
//import Analyse from "./Scenes/Analyse";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [userRole, setUserRole] = useState("Responsable Commercial");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Close sidebar automatically when switching to mobile
      if (mobile) {
        setIsSidebar(false);
      } else {
        setIsSidebar(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className="app" sx={{ display: "flex" }}>
          <Sidebar 
            isSidebar={isSidebar}
            setIsSidebar={setIsSidebar}
            userRole={userRole} 
            setUserRole={setUserRole} 
          />
          <Box 
            component="main" 
            className="content"
            sx={{
              flexGrow: 1,
              marginLeft: isMobile ? "0" : (isSidebar ? "270px" : "0"),
              transition: "margin-left 0.3s ease",
              width: isMobile ? "100%" : (isSidebar ? "calc(100% - 270px)" : "100%"),
              minHeight: "100vh",
              overflow: "auto"
            }}
          >
            <Topbar setIsSidebar={setIsSidebar} isSidebar={isSidebar} isMobile={isMobile} />
            <Routes>
              <Route path="/" element={<Dashboard userRole={userRole} />} /> 
              <Route path="/page-Clients" element={<PageClients />} />
              <Route path="/dashboard-b2b" element={<B2B />} />
              <Route path="/dashboard-b2c" element={<B2C />} />
              <Route path="/dasboard-c2c" element={<C2C userRole={userRole}/>} />
              <Route path="/Segmentation-&-Scoring" element={<Segmentation />} />
              <Route path="/Rapports-et-Exportation" element={<Rapport />} />
              {/* <Route path="/Analyse" element={<Analyse />} />*/}
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;