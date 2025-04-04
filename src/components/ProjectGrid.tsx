import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box, Container } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import { TechEnum } from "../enum/TechEnum";

import pato from "../assets/pato.png";

const projects = [
  { title: "Shiroi Duck", description: "Simula comandos automáticos", image: pato, tech: TechEnum.JAVASCRIPT,
    techs: [
      TechEnum.DOCKER,
      TechEnum.GRAPHQL,
      TechEnum.JAVASCRIPT,
    ]
   },
  { title: "Todo App", description: "Organize suas tarefas", image: pato, tech: TechEnum.NODE },
  { title: "E-Commerce", description: "Loja virtual completa", image: pato, tech: TechEnum.REACTJS },
  { title: "Chat App", description: "Mensagens em tempo real", image: pato, tech: TechEnum.TYPESCRIPT },
  { title: "Blog CMS", description: "Gerenciador de conteúdo", image: pato, tech: TechEnum.LARAVEL },
  { title: "Portfolio", description: "Meu portfólio pessoal", image: pato, tech: TechEnum.PHP },
];

const ProjectGrid = () => {
  return (
    <Box sx={{ mt: 4, px: 4 }}> {/* Agora ocupa a tela toda */}
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project) => (
          <Grid sx={{xs:12, sm:6, md:4, lg:6}}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectGrid;
