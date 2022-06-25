import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AdminHomePage from "./Pages/AdminHomePage";
import LoginPage from "./Pages/LoginPage";



function App( ) {
    return (
    <BrowserRouter>
    <Routes>
    <Route path={"/Pages"} element={<HomePage />} />
    <Route path={"/Pages"} element={<AdminHomePage />} />
    <Route path={"/Pages"} element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
    );
   }
   