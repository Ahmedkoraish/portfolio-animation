import React from "react";
import Container from "@mui/material/Container";
import { Box, Button, Typography, Chip, Card } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";

import recentImag1 from "../assets/portifolio/portfoli-img-5.jpg";
import recentImag2 from "../assets/portifolio/portfoli-img-6.jpg";
import recentImag3 from "../assets/portifolio/portfoli-img-7.jpg";
import recentImag4 from "../assets/portifolio/portfoli-img-8.jpg";

export default function Recent() {
  const cards = [
    {
      img: recentImag1,
      title: "SAAS website design",
      tags: ["Figma", "Framer"],
    },
    {
      img: recentImag2,
      title: "SAAS website design",
      tags: ["Adobe", "Webflow", "Ai"],
    },
    {
      img: recentImag3,
      title: "SAAS website design",
      tags: ["Figma", "Framer", "Wordpress"],
    },
    {
      img: recentImag4,
      title: "SAAS website design",
      tags: ["Adobe", "Webflow"],
    },
  ];

  return (
    <>
      <Container sx={{ my: 5 }}>
        <Box>
          <Typography
            variant="body1"
            color="primary"
            sx={{ fontSize: { xs: "20px" } }}
          >
            Recent Portfolio
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
                {`Transforming Ideas
into Exceptional`}
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="body1"
                color="secondary.main"
                sx={{ whiteSpace: "pre-line", fontSize: "16px" }}
              >
                {`Business consulting consultants provide expert 
advice and guida businesses to help them improve 
their performance, efficiency, and organizational`}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/*cards*/}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            mt: 4,
            justifyContent: "center",
          }}
        >
          {cards.map((card, index) => (
            <Box
              key={index}
              sx={{
                flex: {
                  xs: "1 1 100%",
                  md: "1 1 calc(50% - 20px)",
                },
                maxWidth: { xs: "100%", md: "48%" },
              }}
            >
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  width: "100%",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
                }}
              >
                <motion.img
                  src={card.img}
                  alt={card.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                  initial={{ scaleX: 1, x: 0 }}
                  whileHover={{ scaleX: 1.3, x: -40 }}
                  transition={{
                    duration: 0.15,
                    ease: "easeOut",
                  }}
                />

                {/* TITLE */}
                <Typography
                  variant="h6"
                  sx={{ mt: 2, fontSize: { xs: "18px", md: "20px" } }}
                >
                  {card.title}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* TAGS */}
                  <Box
                    sx={{ display: "flex", gap: 1, mt: 1, flexWrap: "wrap" }}
                  >
                    {card.tags.map((tag, tIndex) => (
                      <Chip key={tIndex} label={tag} size="small" />
                    ))}
                  </Box>

                  {/* BUTTON */}
                  <Button
                    sx={{
                      bgcolor: "primary.main",
                      color: "#fff",
                      borderRadius: 10,
                      p: { xs: 1, md: 1 },
                      mt: 2,
                      textTransform: "none",
                    }}
                    component={motion.button}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {/* Left arrow on hover */}
                      <motion.div
                        variants={{
                          initial: { x: -15, opacity: 0 },
                          hover: { x: 0, opacity: 1 },
                        }}
                      >
                        <ArrowRightAltIcon sx={{ fontSize: 28 }} />
                      </motion.div>

                      <Typography>View Design</Typography>

                      {/* Right arrow */}
                      <motion.div
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
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
}
