import { Box, Button, Container, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import AttachmentIcon from '@mui/icons-material/Attachment';
import { motion } from "framer-motion";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { fadeUpVariant } from "../animations/animation";
import CountUp from 'react-countup';
import React from "react";

export default function About() {


    return (
        <>
            <Container
                component={motion.div}
                variants={fadeUpVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                }}
            >
                {/* left side */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        // bgcolor: "blue",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                    }}
                >
                    <Box

                        component={motion.div}
                        variants={fadeUpVariant}
                        transition={{ delay: 0.2 }}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            bgcolor: "rgba(255, 255, 255, 0.1)",
                            // bgcolor: "green",
                            backdropFilter: "blur(10px)",
                            borderRadius: 2,
                            padding: 12,
                            width: { xs: "100%", md: "fit-content" },
                            textAlign: "center",
                            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                        }}
                    >
                        <Box sx={{
                            display: "flex"
                        }}>
                            <Typography variant="body1" color="initial" sx={{
                                fontSize: "32px",
                            }}>
                                <CountUp end={1} duration={10} delay={1} />
                            </Typography>
                            <Typography variant="body1" color="initial" sx={{
                                fontSize: "32px",
                            }}>
                                <CountUp start={9} end={0} duration={8} /> +
                            </Typography>
                        </Box>
                        <Typography sx={{
                            fontSize: "32px"
                        }}
                        >
                            Year Of
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "32px",
                            }}
                        >
                            Experience
                        </Typography>
                    </Box>
                    <Box
                        component={motion.div}
                        variants={fadeUpVariant}
                        transition={{ delay: 0.4 }}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            bgcolor: "rgba(255, 255, 255, 0.1)",
                            // bgcolor: "yellow",
                            backdropFilter: "blur(10px)",
                            borderRadius: 2,
                            gap: 1,
                            px: 7,
                            py: 3,
                            width: { xs: "100%", md: "fit-content" },
                            textAlign: "center",
                            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            mt: 2,
                        }}
                    >
                        <Box
                            sx={{
                                border: "2px solid",
                                borderRadius: "50%",

                                borderColor: "primary.main"
                            }}
                        >
                            <LockIcon sx={{ fontSize: "56px", color: "primary.main", p: 1 }} />
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: "32px",
                                }}
                            >
                                Ui/Ux Design
                            </Typography>
                            <Typography >241 projects</Typography>
                        </Box>
                    </Box>

                    {/* rouded shape */}
                    <Box
                        sx={{
                            // bgcolor:"red",
                            borderRadius: "50%",
                            width: 300,
                            height: 300,
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            zIndex: -1,
                            background:
                                "linear-gradient(0deg, rgba(253,196,72,0) 15.49%, rgba(253,196,72,1) 100%)",
                        }}
                    ></Box>
                </Box>
                {/* right side */}
                <Box
                    component={motion.div}
                    variants={fadeUpVariant}
                    transition={{ delay: 0.2 }}
                    sx={{
                        // bgcolor: "purple",
                        width: { xs: "100%", md: "50%" },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        my: 2,
                        py: 2

                    }}
                >
                    <Typography sx={{ color: "primary.main" }}>ABOUT ME</Typography>
                    <Typography
                        variant="body1"
                        color="initial"
                        sx={{ whiteSpace: "pre-line", fontSize: "32px" }}
                    >
                        {`Boost Business Strategic
            Solutions with Us`}
                    </Typography>
                    <Typography
                        variant="body1"
                        color="secondary.main"
                        sx={{ whiteSpace: "pre-line" }}
                    >
                        {`Business consulting consultants provide expert advice and guida businesses to
                        help them improve their performance, efficiency, and organizational`}
                    </Typography>

                    {/* card box */}
                    <Box
                        component={motion.div}
                        variants={fadeUpVariant}
                        transition={{ delay: 0.5 }}
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            gap: 1,
                            mt: 2,
                            // bgcolor: "green",
                            width: "100%"
                        }}>
                        <Box
                            component={motion.div}
                            sx={{

                                bgcolor: "#F4F4F4",
                                width: { xs: "100%", md: "fit-content" },
                                p: 5,
                                borderRadius: 2,
                                borderRight: "2px solid",
                                borderRightColor: "primary.main",
                                borderBottom: "2px solid",
                                borderBottomColor: "primary.main"
                            }}
                            whileHover={{
                                borderLeft: "2px solid",
                                borderLeftColor: "#fdc448",
                                borderTop: "2px solid",
                                borderTopColor: "#fdc448",
                                borderRight: "0px ",
                                borderBottom: "0px ",
                                duration: 0.5,

                            }}>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1
                            }}>
                                <AttachmentIcon sx={{
                                    color: "#fff",
                                    bgcolor: "primary.main",
                                    borderRadius: "50%",
                                    fontSize: "40px",
                                    transform: "rotate(-45deg)"
                                }} />
                                <Typography variant="body1" color="initial">Business Solutions</Typography>
                            </Box>
                            <Typography sx={{ whiteSpace: "pre-line", color: "secondary.main" }}>
                                {`Each one showcases my 
                                approach and dedication to 
                                detail, creativity`}
                            </Typography>
                        </Box>
                        <Box
                            component={motion.div}
                            sx={{
                                bgcolor: "#F4F4F4",
                                width: { xs: "100%", md: "fit-content" },
                                p: 4,
                                borderRadius: 2,
                                borderRight: "2px solid",
                                borderRightColor: "primary.main",
                                borderBottom: "2px solid",
                                borderBottomColor: "primary.main"
                            }}
                            whileHover={{
                                borderLeft: "2px solid",
                                borderLeftColor: "#fdc448",
                                borderTop: "2px solid",
                                borderTopColor: "#fdc448",
                                borderRight: "0px ",
                                borderBottom: "0px ",
                                duration: 0.7,

                            }}>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1
                            }}>
                                <AttachmentIcon sx={{
                                    color: "#fff",
                                    bgcolor: "primary.main",
                                    borderRadius: "50%",
                                    fontSize: "40px",
                                    transform: "rotate(-45deg)"

                                }} />
                                <Typography variant="body1" color="initial">Business Solutions</Typography>
                            </Box>
                            <Typography sx={{ whiteSpace: "pre-line", color: "secondary.main" }}>
                                {`Each one showcases my 
                                approach and dedication to 
                                detail, creativity`}
                            </Typography>
                        </Box>


                    </Box>
                    {/* button box */}
                    <Button
                        data-aos="fade-up"
                        data-aos-delay="600"
                        sx={{
                            bgcolor: "primary.main",
                            color: "#fff",
                            borderRadius: 10,
                            p: { xs: 1, md: 2 },
                            mt: 2,
                            mb: 3
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
                            <Typography sx={{ display: "flex", alignItems: "center", }}>
                                Read More About Me
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
            </Container >
        </>
    );
}
