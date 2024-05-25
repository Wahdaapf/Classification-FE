import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const SentenceComponent = () => {
    const [sentence, setSentence] = useState("");
    const [result, setResult] = useState(null);

    //handle submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/sentence", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ sentence: sentence }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Prediction:", data);
                let label;
                if (data.label === 'LABEL_0') {
                    label = 'Negative';
                } else if (data.label === 'LABEL_1') {
                    label = 'Netral';
                } else if (data.label === 'LABEL_2') {
                    label = 'Positif';
                } else {
                    label = 'Tidak Diketahui';
                }
                setResult(label);
                // Lakukan sesuatu dengan data prediksi
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <Box sx={{ padding: "20px" }}>
            <Typography variant="h4" sx={{ marginBottom: "20px" }}>
                Sentence Classification
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField type="text" value={sentence} onChange={(e) => setSentence(e.target.value)} placeholder="Enter a sentence" fullWidth variant="outlined" margin="normal" />
                <Button type="submit" variant="contained" color="primary">
                    Analyze
                </Button>
            </form> <br /> <br />
            <Typography variant="h6">Result: {result}</Typography>
        </Box>
    );
};

export default SentenceComponent;
