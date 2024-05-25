import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import IrisPage from "../pages/IrisPage";
import SentencePage from "../pages/SentencePage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/iris" element={<IrisPage />} />
            <Route path="/sentence" element={<SentencePage />} />
            <Route path="*" element={<Navigate to="/iris" />} />
        </Routes>
    );
};

export default AppRouter;
