import { Box, Card, CardContent, Typography, CardMedia, Button, ButtonBase } from "@mui/material";
import { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import back from "../assets/logo-mage.png"
import { getTechLayout } from "../helpers/TechLayout";
import mago from "../assets/mago.png"
import CIcon from "./CIcon";
import { TechEnum } from "../enum/TechEnum";
import ModalHandler from "./ModalHandler";

const ProjectCard = ({ project }: any) => {
  const [flipped, setFlipped] = useState(false);
  const layout = getTechLayout(project.tech);
  const gitIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";

  useEffect(() => {
    setTimeout(() => setFlipped(true), 1000)
  }, []);

  return (
    <Box
      sx={{
        perspective: "600px",
        width: 280,
        minHeight: 380,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: flipped ? "rotateY(0)" : "rotateY(180deg)",
        }}
      >
        <Card sx={{ maxWidth: 345, borderRadius: 3, border: 7, borderColor: "white", background: layout.color , boxShadow: 3 }}>
          <CardContent>
            <Box minHeight={25}>
              {ModalHandler(project)}
              {project?.techs?.map((tech: TechEnum) => {
                return (
                  CIcon(tech)
                )
              })}
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <Typography
                sx={{
                  background: layout.labelColor,
                  padding: "2px 8px",
                  borderRadius: 1,
                  fontWeight: "bold",
                }}
              >
                {project.tech}
              </Typography>
            </Box>
            <CardMedia component="img" height="150" image={project.image} alt={project.title} sx={{ borderRadius: 2 }} />
            <Typography variant="body2" sx={{ marginY: 1, minHeight: "50px" }}>{project.description}</Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              {/* <Box>
                {[...Array(3)].map((_, index) => (
                  <StarIcon key={index} sx={{ color: "#FFC107" }} />
                ))}
              </Box> */}
              <Button
                variant="contained"
                sx={{
                  background: "lightgray",
                  color: "black",
                  fontWeight: "bold",
                  borderRadius: 3,
                  textTransform: "none",
                }}
              >
                Acessar
              </Button>
              <Button
                variant="contained"
                sx={{
                  background: "lightgray",
                  color: "black",
                  fontWeight: "bold",
                  borderRadius: 3,
                  textTransform: "none",
                }}
              >
                Repo
                <Box component={'img'} src={gitIcon} height={25}/>
              </Button>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            transform: "rotateY(180deg)",
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            height="100%"
            image={mago}
            alt="Back"
            sx={{ objectFit: "cover", height: "100%" }}
          />
        </Card>
      </Box>
    </Box>
  );
};

export default ProjectCard;