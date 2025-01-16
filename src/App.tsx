import { ThemeProvider } from "@mui/material";
import theme from "./theme"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import AdminPage from "./Pages/AdminPage";

const App = () => {
    const WindowBoxStyle = {
        display: { xs: 'none', md: 'flex' }
    }

    const MobileBoxStyle = {
        display: { xs: 'flex', md: 'none' }
    }


    return <>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/admin" element={<AdminPage />}></Route>
                    <Route path="/" element={<MainPage />}> </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </>
};

export default App;
