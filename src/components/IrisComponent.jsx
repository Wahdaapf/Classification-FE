import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const IrisComponent = () => {
    //form data
    const [formValues, setFormValues] = useState({
        Sepal_Length: "",
        Sepal_Width: "",
        Petal_Length: "",
        Petal_Width: "",
    });

    // State to hold the prediction result
    const [result, setResult] = useState(null);

    //handle value when input got onchange
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    //send submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        // Send a POST request to the /iris endpoint
        fetch("/iris", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Prediction:", data);
                setResult(data.species)
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    // Render the form and prediction result
    return (
        <Box sx={{padding: '20px'}}>
            <Typography variant="h4" sx={{marginBottom: '20px'}}>Iris Classification</Typography>
            {/* Form for inputting iris features */}
            <form onSubmit={handleSubmit}>
                <TextField type="text" name="Sepal_Length" label="Sepal Length" placeholder="Sepal Length" required value={formValues.Sepal_Length} onChange={handleChange} /> <br /><br />
                <TextField type="text" name="Sepal_Width" label="Sepal Width" placeholder="Sepal Width" required value={formValues.Sepal_Width} onChange={handleChange} /> <br /><br />
                <TextField type="text" name="Petal_Length" label="Petal Length" placeholder="Petal Length" required value={formValues.Petal_Length} onChange={handleChange} /> <br /><br />
                <TextField type="text" name="Petal_Width" label="Petal Width" placeholder="Petal Width" required value={formValues.Petal_Width} onChange={handleChange} /> <br /><br />
                <Button type="submit" variant="contained" color="primary">
                    Predict
                </Button><br /><br />
            </form>
            {/* Display the prediction result */}
            <Typography variant="h6">Result: {result}</Typography>
        </Box>
    );
};

export default IrisComponent;
