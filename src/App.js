import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Scenes/global/Topbar";
import Sidebar from "./Scenes/global/Sidebar";
import Dashboard from "./Scenes/dashboard";
//import PageClients from "./Scenes/PageClients";
//import B2B from "./Scenes/ B2B";
//import B2C from "./Scenes/B2C";
//import C2C from "./Scenes/C2C";
//import Segmentation from "./Scenes/Segmentation";
//import Rapport from "./Scenes/Rapport";
//import Analyse from "./Scenes/Analyse";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  // Add shared user role state
  const [userRole, setUserRole] = useState("Responsable Commercial");

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar 
            isSidebar={isSidebar} 
            userRole={userRole} 
            setUserRole={setUserRole} 
          />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard userRole={userRole} />} /> 
              {/*<Route path="/pageclient" element={<PageClients />} />*/}
              {/*<Route path="/B2B" element={<B2B />} />*/}
              {/*<Route path="/B2C" element={<B2C />} />*/}
              {/*<Route path="/C2C" element={<C2C />} />*/}
              {/*<Route path="/Segmentation" element={<Segmentation />} />*/}
              {/*<Route path="/Rapport" element={<Rapport />} />*/}
              {/* <Route path="/Analyse" element={<Analyse />} />*/}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;