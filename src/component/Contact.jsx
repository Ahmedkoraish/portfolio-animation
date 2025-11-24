import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid, TextField } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Container sx={{ bgcolor: "#f4f4f4", borderRadius: 5, my: 3 }}>
        <Typography variant="body1" color="initial">
          Get In Touch
        </Typography>

        <Box sx={{ display: "flex",flexDirection:{xs:"column",md:"row"}, gap: 2 }}>
          {/* left */}
           <Box sx={{ width: { xs: "100%", md: "40%" } }}>
            <Typography
              variant="h3"
              color="initial"
              sx={{ whiteSpace: "pre-line", my: 2 }}
            >
              {`Get Ready To 
                Create Great`}
            </Typography>
            {/* card details */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "solid 2px #D9DDE0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MailIcon />
              </Box>
              <Box>
                <Typography sx={{ color: "secondary.main" }}>
                  E-mail:
                </Typography>
                <Typography>nafiz125@gmail.com</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "solid 2px #D9DDE0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  my: 2,
                }}
              >
                <MailIcon />
              </Box>
              <Box>
                <Typography sx={{ color: "secondary.main" }}>
                  Location:
                </Typography>
                <Typography>3891 Ranchview Dr. Richardson</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "solid 2px #D9DDE0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MailIcon />
              </Box>
              <Box>
                <Typography sx={{ color: "secondary.main" }}>
                  Contact:
                </Typography>
                <Typography>01245789321</Typography>
              </Box>
            </Box>
          </Box>
          {/* right */}
          <Box
            sx={{
              //   bgcolor: "green",
              p: 2,
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              width: { xs: "100%", md: "60%" }
            }}
          >
            <TextField
               sx={{ flex: { xs: "0 0 100%", md: "0 0 48%" } }}
              label="Your name"
              variant="outlined"
            />
            <TextField
               sx={{ flex: { xs: "0 0 100%", md: "0 0 48%" } }}
              label="Phone Number"
              variant="outlined"
            />
            <TextField
               sx={{ flex: { xs: "0 0 100%", md: "0 0 48%" } }}
              label="Your Email"
              variant="outlined"
            />
            <TextField
               sx={{ flex: { xs: "0 0 100%", md: "0 0 48%" } }}
              label="Subject"
              variant="outlined"
            />

            <TextField
              sx={{ flex: "0 0 100%" }}
              label="Your Message"
              variant="outlined"
              multiline
              rows={5}
            />

            <Button
              data-aos="fade-up"
              data-aos-delay="600"
              sx={{
                bgcolor: "primary.main",
                color: "#fff",
                borderRadius: 10,
                p: { xs: 1, md: 2 },
                mt: 2,
                mb: 3,
                width:"100%",
                overflow:"hidden"
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
                  Appointment now{" "}
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
        </Box>
      </Container>
    </>
  );
}
