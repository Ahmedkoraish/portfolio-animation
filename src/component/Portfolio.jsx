import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import { fadeUpVariant, containerVariant } from "../animations/animation";
import { motion } from "framer-motion";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import img1 from "../assets/all/tab-image-1.png"
import img2 from "../assets/all/tab-image-2.png"
import img3 from "../assets/all/tab-image-3.png"
import img4 from "../assets/all/tab-image-4.png"
import img5 from "../assets/all/tab-image-5.png"
import img6 from "../assets/all/tab-image-6.png"

export default function Portfolio() {

    const gallery = [
        { id: 1, title: "Development", des: "A Journey through my work", image: img1 },
        { id: 2, title: "Development", des: "A Journey through my work", image: img2 },
        { id: 3, title: "Development", des: "A Journey through my work", image: img3 },
        { id: 4, title: "Development", des: "A Journey through my work", image: img4 },
        { id: 5, title: "Development", des: "A Journey through my work", image: img5 },
        { id: 6, title: "Development", des: "A Journey through my work", image: img6 },
    ]

    const btns = ["All", "Branding", "Design", "Content", "Marketing"];

    // Overlay animation: slide up on hover
    const overlayVariant = {
        hidden: { y: "100%", opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.4 } },
    };

    return (
        <Container
            component={motion.div}
            variants={containerVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
        >
            {/* Heading */}
            <Box sx={{ textAlign: "center", mb: 4 }}>
                <Typography component={motion.div} variants={fadeUpVariant} variant="body1" color="primary">
                    Latest Portfolio
                </Typography>
                <Typography component={motion.div} variants={fadeUpVariant} sx={{ fontSize: "48px", my: 1 }} variant="h2" color="initial">
                    Transforming Ideas into Exceptional
                </Typography>
                <Typography component={motion.div} variants={fadeUpVariant} variant="body1" color="secondary" sx={{ whiteSpace: "break-spaces" }}>
                    {`Business consulting consultants provide expert advice and guide businesses to help 
                    them improve their performance, efficiency, and organization.`}
                </Typography>
            </Box>

            {/* Filter Buttons */}
            <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                {btns.map((btn) => (
                    <Button key={btn}>{btn}</Button>
                ))}
            </Box>

            {/* Gallery */}
            <Box sx={{ display: 'flex', flexWrap: "wrap", gap: 2 }}>
                {gallery.map((card) => (
                    <Box
                        component={motion.div}
                        key={card.id}
                        whileHover="show" // triggers overlay
                        initial="hidden" // default state
                        sx={{
                            width: { xs: "100%", sm: "calc(50% - 16px)", lg: "calc(33.33% - 16px)" },
                            position: "relative",
                            borderRadius: 2,
                            overflow: "hidden", // keep overlay inside card
                        }}
                    >
                        {/* Card Image */}
                        <img
                            src={card.image}
                            alt={card.title}
                            style={{ width: "100%", display: "block" }}
                        />

                        {/* Overlay */}
                        <Box
                            component={motion.div}
                            variants={overlayVariant} // apply animation
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background:
                                "linear-gradient(0deg, rgba(253,196,72,0) 15.49%, rgba(253,196,72,1) 100%)",
                                display: "flex",
                                justifyContent: "flex-end", 
                                alignItems: "flex-start",
                                color: "#fff",
                                flexDirection: "column",         
                                p: 3,
                                
                            }}
                        >
                            <Typography variant="h6" sx={{ mb: 1 }}>{card.title}</Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Typography variant="body2">{card.des}</Typography>
                                <ArrowRightAltIcon />
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    )
}
