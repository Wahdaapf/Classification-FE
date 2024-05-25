import "./App.css";
import AppRouter from "./routes/AppRouter";
import { useNavigate } from "react-router-dom";
import React, { useState, Suspense } from "react";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { AppBar, BottomNavigation, BottomNavigationAction, IconButton, Toolbar, Typography } from "@mui/material";

function App() {

    //for navigate
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    return (
        <>
            {/* NavBar */}
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge='start' color='inherit' aria-label="logo">
                        <CatchingPokemonIcon />
                    </IconButton>
                    <Typography variant="h6" component='div'>Classification Apk</Typography>
                </Toolbar>
            </AppBar>
             {/* End NavBar */}
            {/* Router */}
            <Suspense fallback={<div>Loading...</div>}>
                <AppRouter />
            </Suspense>
            {/* End Router */}
            {/* BottomBar */}
            <BottomNavigation
                sx={{ width: "100%", position: "absolute", bottom: 0, backgroundColor: "primary.main" }}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    switch (newValue) {
                        case 0:
                            navigate("/iris");
                            break;
                        case 1:
                            navigate("/sentence");
                            break;
                        default:
                            break;
                    }
                }}
            >
                <BottomNavigationAction
                    label="Iris"
                    icon={<FilterVintageIcon sx={{ color: "common.white" }} />}
                    sx={{
                        "& .MuiBottomNavigationAction-label": {
                            color: "common.white", // Mengubah warna label menjadi putih
                        },
                    }}
                />
                <BottomNavigationAction
                    label="Sentence"
                    icon={<ReceiptLongIcon sx={{ color: "common.white" }} />}
                    sx={{
                        "& .MuiBottomNavigationAction-label": {
                            color: "common.white", // Mengubah warna label menjadi putih
                        },
                    }}
                />
            </BottomNavigation>
            {/* End BottomBar */}
        </>
    );
}

export default App;
