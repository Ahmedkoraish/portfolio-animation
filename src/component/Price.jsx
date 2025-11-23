import React from "react";
import Container from "@mui/material/Container";
import { Box, Typography, Divider, Button } from "@mui/material";

import { motion } from "framer-motion";
import { fadeUpVariant } from "../animations/animation";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BarChartIcon from "@mui/icons-material/BarChart";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Price() {
  const cards = [
    {
      title: "Starter",
      option: [
        "5 Social Media Account",
        "Free Platform Access",
        "Free Platform Access",
        "24/7 Customer Support",
      ],
      price: 5.0,
      duration: "Per Month",
    },
    {
      title: "Premium",
      option: [
        "5 Social Media Account",
        "Free Platform Access",
        "Free Platform Access",
        "24/7 Customer Support",
      ],
      price: 230.0,
      duration: "Per Month",
    },
    {
      title: "Basic",
      option: [
        "5 Social Media Account",
        "Free Platform Access",
        "Free Platform Access",
        "24/7 Customer Support",
      ],
      price: 45.0,
      duration: "Per Month",
    },
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const containerVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      <Container>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            component={motion.div}
            initial={fadeUpVariant.initial}
            animate={fadeUpVariant.animate}
            transition={fadeUpVariant.transition}
            variant="body1"
            color="primary"
          >
            My Price plan
          </Typography>

          <Typography
            component={motion.div}
            initial={fadeUpVariant.initial}
            animate={fadeUpVariant.animate}
            transition={fadeUpVariant.transition}
            sx={{
              fontSize: {
                xs: "28px",
                sm: "36px",
                md: "48px",
                whiteSpace: "pre-line",
              },
            }}
            color="initial"
          >
            {`Enhancing Collaboration 
                between Remote`}
          </Typography>
        </Box>

        {/* cards */}
        <Box
          component={motion.div}
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}
        >
          {cards.map((card, index) => (
            <Box
              component={motion.div}
              key={index}
              variants={cardVariant}
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%" },
                bgcolor: "#f4f4f4",
                borderRadius: 4,
                px: { xs: 2, sm: 4, md: 5 },
                py: { xs: 4, sm: 6, md: 8 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                borderRight: "2px solid",
                borderRightColor: "primary.main",
                borderBottom: "2px solid",
                borderBottomColor: "primary.main",
              }}
            >
              <AccountBalanceIcon
                sx={{
                  color: "primary.main",
                  fontSize: { xs: "70px", sm: "80px", md: "100px" },
                }}
              />

              <Typography
                sx={{ py: 1, fontSize: "18px", fontWeight: "bold" }}
                color="initial"
              >
                {card.title}
              </Typography>

              <Box>
                {card.option.map((item, i) => (
                  <Typography
                    key={i}
                    variant="body1"
                    sx={{
                      color: "secondary.main",
                      pb: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <TaskAltIcon
                      fontSize="small"
                      sx={{ color: "primary.main" }}
                    />
                    {item}
                  </Typography>
                ))}
              </Box>

              <Divider sx={{ borderColor: "#d7dbde", borderWidth: 1 }} />

              <Typography
                sx={{
                  pt: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: "48px",
                }}
              >
                <AttachMoneyIcon fontSize="large" />
                {card.price}
              </Typography>

              <Typography variant="body1" color="initial">
                {card.duration}
              </Typography>
              <Button
                sx={{
                  bgcolor: "primary.main",
                  color: "#fff",
                  borderRadius: 10,
                  p: { xs: 1, md: 1 },
                  mt: 2,
                  textTransform: "none",

                  overflow: "hidden", 
                }}
                component={motion.button}
                initial="initial"
                whileHover="hover"
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <motion.div
                    variants={{
                      initial: { x: -15, opacity: 0 },
                      hover: { x: 0, opacity: 1 },
                    }}
                  >
                    <ArrowRightAltIcon sx={{ fontSize: 28 }} />
                  </motion.div>

                  <Typography>Get Started</Typography>

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
          ))}
        </Box>
      </Container>
    </>
  );
}
