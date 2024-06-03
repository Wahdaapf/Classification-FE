import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import IrisPage from "../pages/IrisPage";
import SentencePage from "../pages/SentencePage";

// Define the AppRouter component
const AppRouter = () => {
    return (
        // Define the routing structure using Routes
        <Routes>
            {/* Route for the IrisPage component at /iris path */}
            <Route path="/iris" element={<IrisPage />} />

            {/* Route for the SentencePage component at /sentence path */}
            <Route path="/sentence" element={<SentencePage />} />

            {/* Fallback route: Redirect to /iris if path is not matched */}
            <Route path="*" element={<Navigate to="/iris" />} />
        </Routes>
    );
};

// Export the AppRouter component as default
export default AppRouter;
