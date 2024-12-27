import React, { useState } from "react";
import { Button, Grid, Typography, Box, TextField } from "@mui/material";
import { create, all } from "mathjs";

// Initialize math.js
const math = create(all);

const Calculator = () => {
    const [input, setInput] = useState("");

    const handleButtonClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput("");
    };

    const handleCalculate = () => {
        try {
            const result = math.evaluate(input);
            setInput(result.toString());
        } catch (error) {
            setInput("Error");
        }
    };

    const handleSpecial = (operation) => {
        try {
            if (operation === "Pi") {
                setInput((prev) => prev + math.pi.toFixed(8));
            } else if (operation === "Rnd") {
                setInput((prev) => prev + Math.random().toString());
            }
        } catch (error) {
            setInput("Error");
        }
    };

    const handleKeyDown = (event) => {
        const allowedKeys = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "+",
            "-",
            "*",
            "/",
            "(",
            ")",
            ".",
            "Enter",
            "Backspace",
        ];

        if (allowedKeys.includes(event.key)) {
            if (event.key === "Enter") {
                handleCalculate();
            } else if (event.key === "Backspace") {
                setInput((prev) => prev.slice(0, -1));
            } else {
                setInput((prev) => prev + event.key);
            }
        }
    };

    return (
        <Box
            sx={{
                backgroundColor: "#f5f5f5",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#000",
            }}
            onKeyDown={handleKeyDown}
            tabIndex={0} // Makes the box focusable for key events
        >
            <Box
                sx={{
                    backgroundColor: "#ffffff",
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                    width: 450,
                    border: "1px solid #ddd",
                }}
            >
                <Typography
                    variant="h5"
                    align="center"
                    sx={{
                        marginBottom: 2,
                        fontWeight: "bold",
                        color: "#000",
                    }}
                >
                    e-Circular Scientific Calculator
                </Typography>
                <TextField
                    variant="outlined"
                    value={input}
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{
                        backgroundColor: "#f9f9f9",
                        marginBottom: 2,
                        borderRadius: 1,
                    }}
                />
                <Grid container spacing={1}>
                    {[
                        "1",
                        "2",
                        "3",
                        "C",
                        "%",
                        "/",
                        "4",
                        "5",
                        "6",
                        "*",
                        "(",
                        ")",
                        "7",
                        "8",
                        "9",
                        "-",
                        "Pi",
                        "Rnd",
                        "0",
                        "root(",
                        "+",
                        "=",
                        "sin(",
                        "cos(",
                        "tan(",
                        "^2",
                        "1/2",
                        "1/4",
                        "asin(",
                        "acos(",
                        "atan(",
                        "1/5",
                        "1/7",
                        "1/10",
                    ].map((item, index) => (
                        <Grid item xs={2} key={index}>
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={() =>
                                    item === "C"
                                        ? handleClear()
                                        : item === "="
                                            ? handleCalculate()
                                            : ["Pi", "Rnd"].includes(item)
                                                ? handleSpecial(item)
                                                : handleButtonClick(item)
                                }
                                sx={{
                                    backgroundColor: "#f0f0f0",
                                    color: "#000",
                                    "&:hover": { backgroundColor: "#e0e0e0" },
                                    height: 50,
                                    fontWeight: "bold",
                                    border: "1px solid #ddd",
                                }}
                            >
                                {item}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Calculator;
