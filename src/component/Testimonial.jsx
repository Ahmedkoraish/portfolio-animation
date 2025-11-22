import { Box, Rating, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { fadeUpVariant } from "../animations/animation";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import imgIcon from "../assets/client-img-1.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

export default function Testimonial() {
  const cards = [
    {
      des: "Their expertise is apparent in every step of the project. I’m thrilled with the outcome and would definitely work with them again! definitely work with them again",
      title: "Theresa Webb",
      subtitle: "Ui/Ux Designer",
      rating: 5,
      img: imgIcon,
    },
    {
      des: "Their expertise is apparent in every step of the project. I’m thrilled with the outcome and would definitely work with them again! definitely work with them again",
      title: "Theresa Webb",
      subtitle: "Ui/Ux Designer",
      rating: 5,
      img: imgIcon,
    },
    {
      des: "Their expertise is apparent in every step of the project. I’m thrilled with the outcome and would definitely work with them again! definitely work with them again",
      title: "Theresa Webb",
      subtitle: "Ui/Ux Designer",
      rating: 5,
      img: imgIcon,
    },
    {
      des: "Their expertise is apparent in every step of the project. I’m thrilled with the outcome and would definitely work with them again! definitely work with them again",
      title: "Theresa Webb",
      subtitle: "Ui/Ux Designer",
      rating: 5,
      img: imgIcon,
    },
    {
      des: "Their expertise is apparent in every step of the project. I’m thrilled with the outcome and would definitely work with them again! definitely work with them again",
      title: "Theresa Webb",
      subtitle: "Ui/Ux Designer",
      rating: 5,
      img: imgIcon,
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "200px",
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1200,
        settings: { centerPadding: "150px" },
      },
      {
        breakpoint: 900,
        settings: { centerPadding: "80px" },
      },
      {
        breakpoint: 600,
        settings: { centerMode: false, centerPadding: "0px" },
      },
      {
        breakpoint: 450,
        settings: { centerMode: false, centerPadding: "0px" },
      },
    ],
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            component={motion.div}
            initial={fadeUpVariant.initial}
            animate={fadeUpVariant.animate}
            transition={fadeUpVariant.transition}
            variant="body1"
            color="primary"
          >
            Clients Testimonial
          </Typography>

          <Typography
            component={motion.div}
            initial={fadeUpVariant.initial}
            animate={fadeUpVariant.animate}
            transition={fadeUpVariant.transition}
            sx={{ fontSize: { xs: "28px", sm: "36px", md: "48px" } }}
            color="initial"
          >
            Bringing Dreams to Life through
          </Typography>

          <Typography
            component={motion.div}
            initial={fadeUpVariant.initial}
            animate={fadeUpVariant.animate}
            transition={fadeUpVariant.transition}
            variant="body1"
            color="secondary"
            sx={{ whiteSpace: "break-spaces" }}
          >
            {`Business consulting consultants provide expert advice and guide businesses to help them improve their performance, efficiency, and organization.`}
          </Typography>
        </Box>

        {/* slider box */}
        <Box sx={{ mx: "auto" }}>
          <Slider {...settings}>
            {cards.map((card, index) => (
              <Box
                key={index}
                sx={{
                  my: 5,
                  p: { xs: 2, sm: 4, md: 6, lg: 8 },
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  position: "relative",
                  border: "solid 3px #f4f4f4",
                  borderRadius: 3,
                }}
              >
                {/*Image + Rating */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* image + title */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{
                        borderRadius: "50%",
                        width: "70px",
                        height: "70px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={card.img}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    <Box>
                      <Typography variant="body1">{card.title}</Typography>
                      <Typography variant="body2">{card.subtitle}</Typography>
                    </Box>
                  </Box>

                  {/* rating box */}
                  <Rating value={card.rating} />
                </Box>

                <Typography variant="body1" color="#141414">
                  {card.des}
                </Typography>

                <Box
                  sx={{
                    position: "absolute",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    bgcolor: "#f4f4f4",
                    color: "black",
                    top: 0,
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FormatQuoteIcon />
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </>
  );
}
