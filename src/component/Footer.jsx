import { Box, Container, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../assets/logo-white-3.png";
import React from "react";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#f4f4f4",
        }}
      >
        <Container sx={{ display: "flex", gap: 3 }}>
          <Box
            sx={{
              py: 15,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 4, md: 3 },
              width: "100%",
            }}
          >
            {/* first column */}
            <Box
              sx={{
                width: { xs: "100%", md: "25%" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <img src={logo} alt="Logo" />
              <Typography
                variant="body1"
                color="secondary"
                sx={{ whiteSpace: "pre-line", my: 2, lineHeight: 2 }}
              >
                {`The personal portfolio category 
          includes websites or physical 
          displays`}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#e7e7e7",
                  }}
                >
                  <InstagramIcon />
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#e7e7e7",
                  }}
                >
                  <LinkedInIcon />
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#e7e7e7",
                  }}
                >
                  <TwitterIcon />
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#e7e7e7",
                  }}
                >
                  <FacebookIcon />
                </Box>
              </Box>
            </Box>
            {/* second column */}
            <Box sx={{ width: { xs: "100%", md: "23%" } }}>
              <Typography color="initial" sx={{ fontSize: "24px", pb: 2 }}>
                Quick Link
              </Typography>
              <Typography variant="body1" color="initial">
                About Me
              </Typography>
              <Typography variant="body1" color="initial">
                Service
              </Typography>
              <Typography variant="body1" color="initial">
                Contact us
              </Typography>
              <Typography variant="body1" color="initial">
                Blog Post
              </Typography>
              <Typography variant="body1" color="initial">
                Pricing
              </Typography>
            </Box>
            {/* third column */}
            <Box sx={{ width: { xs: "100%", md: "23%" } }}>
              <Typography color="initial" sx={{ fontSize: "24px", pb: 2 }}>
                Contact
              </Typography>

              <Box sx={{ display: "flex", gap: 1 }}>
                <PhoneIcon />
                <Typography variant="body1" color="initial">
                  017345 678 9101
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1, my: 2 }}>
                <EditLocationIcon />
                <Typography variant="body1" color="initial">
                  Cumilla,Bangladesh
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <EmailIcon />
                <Typography variant="body1" color="initial">
                  abcd@gmail.com
                </Typography>
              </Box>
            </Box>
            {/* fourth column */}
            <Box
              sx={{
                width: { xs: "100%", md: "23%" },
                border: "2px #D9DDE0 solid",
                borderRadius: 4,
                p: 2,
              }}
            >
              <Typography color="initial" sx={{ fontSize: "24px", pb: 2 }}>
                Newslatter
              </Typography>
              <Typography
                variant="body1"
                color="secondary"
                sx={{ whiteSpace: "pre-line" }}
              >
                {`The personal portfolio categor includes the 
                a websites or representation`}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
