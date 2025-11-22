import { Box, Container, Typography } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ImageIcon from "@mui/icons-material/Image";
import PortraitIcon from "@mui/icons-material/Portrait";
import React from "react";

export default function Experts() {
    const cards = [
        {
            id: 1,
            title: "Ui/visual Design",
            des: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills",
            pres: "90%",
            icon: AccountBalanceIcon,
        },
        {
            id: 2,
            title: "Branding Design",
            des: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills",
            pres: "80%",
            icon: ImageIcon,
        },
        {
            id: 3,
            title: "Motion Design",
            des: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills",
            pres: "75%",
            icon: PortraitIcon,
        },
    ];



    return (
        <>
            <Box sx={{ bgcolor: "#f4f4f4", borderRadius: 8, my: 2, py: { xs: 4, m: 8 } }}>
                <Container>
                    {/* text area */}
                    <Box>
                        <Typography
                            variant="body1"
                            color="primary"
                            sx={{ fontSize: { xs: "20px" } }}
                        >
                            My Expertise
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                justifyContent: "space-between",
                            }}
                        >
                            <Box sx={{ my: 1 }}>
                                <Typography
                                    variant="h2"
                                    color="black"
                                    sx={{
                                        whiteSpace: "pre-line",
                                        fontSize: { xs: "24px", md: "40px" },
                                    }}
                                >
                                    {`Elevated Designs Personalized
                            the best Experiences`}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="body1"
                                    color="primary"
                                    sx={{
                                        whiteSpace: "pre-line",
                                        color: "secondary.main",
                                        fontSize: "16px",
                                    }}
                                >
                                    {`Business consulting consultants provide expert 
                            advice and guida businesses to help them improve 
                            their performance, efficiency, and organizational`}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    {/* card area */}

                    {cards.map((card) => (
                        <Box key={card.id} sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: "center",
                            my: 2,
                            // bgcolor:'red',
                            py: 8,
                            px: 3,
                            border: "2px solid black",
                            borderRadius: 4,


                        }}>
                            <Box sx={{ width: { xs: "100%", md: "30%" } }}>
                                <Box
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        p: 2,
                                        borderRadius: '50%',
                                        backgroundColor: 'primary.main',
                                        border: '2px solid black',
                                    }}
                                >
                                    {React.createElement(card.icon, { sx: { fontSize: 32, color: "#fff" } })}
                                </Box>
                                <Typography color="initial" sx={{ fontSize: { xs: "24px", md: "32px" }, my: 1 }}>
                                    {card.title}
                                </Typography>
                            </Box>
                            <Box >
                                <Box sx={{ borderRadius: "50%", p: 3, border: "2px solid black" }}>
                                    <Typography variant="body1" color="initial">
                                        {card.pres}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ width: { xs: "100%", md: "40%" }, wordBreak: "break-word" }}>
                                <Typography sx={{ fontSize: "16px", lineHeight: 2, color: "#141414" }}>
                                    {card.des}
                                </Typography>
                            </Box>
                        </Box>

                    ))}

                </Container>
            </Box>
        </>
    );
}
