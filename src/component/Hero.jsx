import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import bground from '../assets/banner-four-right-bg-img.png'
import human from '../assets/banner-user-image-four.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out",
            once: true,
        });
    }, []);
    return <>

        <Box sx={{
            bgcolor: "#f4f4f4"
        }}>
            <Container sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
                gap: 2,
                minHeight: { xs: "120vh", md: "100vh" },
                // bgcolor:"#f4f4f4",

            }}>
                {/* text area */}
                <Box sx={{
                    // bgcolor:"purple",
                    width: { xs: "100%", md: "50%" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                   
                }}>
                    <Typography variant="h5" color="primary" data-aos="fade-up"
                        data-aos-delay="0">
                        Web Developer
                    </Typography>
                    <Typography variant="h3" color="initial" data-aos="fade-up"
                        data-aos-delay="200" sx={{ whiteSpace: "pre-line" }}>
                        {`Jackson 
                    Clark`}
                    </Typography>
                    <Typography variant="body1" color="initial" data-aos="fade-up"
                        data-aos-delay="400"
                        sx={{
                            whiteSpace: "pre-line",
                            color: "secondary.main"
                        }}>
                        {`Outsourcing can provide corporate businesses with 
                    several advantages, incl b usinesses Outsourcing can 
                    provide usinesses Outsourcing can provide`}
                    </Typography>

                    {/* button box */}
                    <Button
                        data-aos="fade-up"
                        data-aos-delay="600"
                        sx={{
                            bgcolor: "primary.main",
                            color: "#fff",
                            borderRadius: 10,
                            p: 2,
                            mt: 2
                        }}
                        component={motion.button}
                        initial="initial"
                        whileHover="hover"
                    >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>

                           
                            <motion.div
                                style={{ display: "flex", alignItems: "center" }}   
                                variants={{
                                    initial: { x: -15, opacity: 0 },
                                    hover: { x: 0, opacity: 1 },
                                }}
                            >
                                <ArrowRightAltIcon sx={{ fontSize: 28 }} />        
                            </motion.div>

                            {/* TEXT */}
                            <Typography sx={{ display: "flex", alignItems: "center" }}>
                                View Portfolio
                            </Typography>

                           
                            <motion.div
                                style={{ display: "flex", alignItems: "center" }}    
                                variants={{
                                    initial: { x: 0, opacity: 1 },
                                    hover: { x: 15, opacity: 0 },
                                }}
                            >
                                <ArrowRightAltIcon sx={{ fontSize: 28 }} />
                            </motion.div>

                        </Box>
                    </Button>
                </Box>
                {/* images area */}
                <Box sx={{
                    // bgcolor:"green",
                    width: { xs: "100%", md: "50%" },
                    position: "relative",
                    minHeight: { xs: "400px", md: "600px" },
                    // overflow: "hidden"


                }}>
                    <img src={bground} alt=""
                        style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                        }}
                    />
                    <Box sx={{
                        position: "absolute",
                        bottom: "50px",


                        // bgcolor: "red"
                    }}>
                        <img src={human} alt="" data-aos="zoom-in"
                            style={{
                                height: "auto",
                                width: "100%",
                                objectFit: "contain"

                            }} />
                    </Box>
                </Box>
            </Container >
        </Box >



    </>
}
