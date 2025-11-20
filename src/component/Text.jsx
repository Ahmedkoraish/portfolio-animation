import React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import {motion} from "framer-motion"

export default function Text() {
    const text =
        "A personal portfolio is a collection of your work, that is aa go achievements, and skills that highlights web design in your is abilities and professional growth. It serves as A personal to aportfolio in since 2009 a collection of your work";

    const word = text.split(" ");
    const parent = {
        animate: {
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const child = {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <>
            <Container sx={{ py: 10 }}>
                <Typography
                   
                    component="div"
                    sx={{ display: "flex", flexWrap: "wrap", gap: "6px", textAlign: "center", typography: { xs: "h5", md: "h4" } }}
                >
                    <motion.div
                        variants={parent}
                        initial="initial"
                        whileInView="animate"
                        style={{
                            gap: "6px",
                            display: "inline-flex",   
                            flexWrap: "wrap",         
                            justifyContent: "center", 
                        }}
                    >
                        {word.map((w, i) => (
                            <motion.span
                                key={i}
                                variants={child}
                                style={{
                                    display: "inline-block",
                                    color: ["portfolio", "web", "Design", "since", "2009"].includes(w.toLowerCase()) ? "#fdc448" : "inherit",
                                }}

                            >
                                {w}
                            </motion.span>
                        ))}
                    </motion.div>
                </Typography>
            </Container>
        </>
    );
}
