import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import skill1 from "../assets/skill/icon-01.png";
import skill2 from "../assets/skill/icon-02.png";
import skill3 from "../assets/skill/icon-03.png";
import skill4 from "../assets/skill/icon-04.png";

import { motion } from "framer-motion";

export default function Skill() {
  const cards = [
    {
      image: skill1,
      title: "Framer",
      subtitle:
        "The personal portfol category includes websites or physic Your Journey Your Story",
    },
    {
      image: skill2,
      title: "WebFlow",
      subtitle:
        "The personal portfol category includes websites or physic Your Journey Your Story",
    },
    {
      image: skill3,
      title: "Figma",
      subtitle:
        "The personal portfol category includes websites or physic Your Journey Your Story",
    },
    {
      image: skill4,
      title: "Wordpress",
      subtitle:
        "The personal portfol category includes websites or physic Your Journey Your Story",
    },
  ];

  return (
    <>
      <Container sx={{ bgcolor: "#f4f4f4", borderRadius: 5, mt: 6, py: 2 }}>
        <Typography
        component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variant="h6"
          color="primary"
        >
          My Skill
        </Typography>
        <Typography
        component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          color="initial"
          sx={{
            fontSize: { xs: "20px", md: "42px" },
            whiteSpace: "break-spaces",
          }}
        >
          {`My Experts Areas Where I 
Gained Skill`}
        </Typography>
        <Typography
        component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variant="body1"
          color="secondary"
          sx={{ whiteSpace: "break-spaces" }}
        >
          {` Business consulting consultants provide expert advice and guidance to businesses to 
help them improve their performance, efficiency, 
and organizational Business consulting consultants provide`}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          {cards.map((card, index) => (
            <Box
              component={motion.div}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{
                border: "2px solid #D9DDE0",
                borderRadius: 3,
                width: { xs: "100%", md: "calc(50% - 12px)" },
                p: 4,
                mt: 2,
              }}
            >
              <Box
                sx={{
                  borderRadius: "50%",
                  border: "2px solid #D9DDE0",
                  p: 2,
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={card.image} alt="" />
              </Box>
              <Typography variant="body1" color="initial" sx={{ py: 1 }}>
                {card.title}
              </Typography>
              <Typography variant="body1" color="secondary">
                {card.subtitle}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
}
