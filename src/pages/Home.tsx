import React from "react";
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, CardMedia } from "@mui/material";
import SkillsSection from "../components/SkillSection";

const Introduction = () => (
  <Container maxWidth="md" style={{ textAlign: "center", marginTop: "40px", color: "white" }}>
    <Typography variant="h6" style={{ color: "#4FC3F7" }}>OLÁ! MEU NOME É BRYAN</Typography>
    <Typography variant="h3" style={{ fontWeight: "bold" }}>Eu desenvolvo sistemas.</Typography>
    <Typography variant="body1" style={{ marginTop: "20px", color: "#BBDEFB" }}>
      Sou um desenvolvedor full-stack com 5 anos de experiência trabalhando em projetos baseados em microsserviços.
      Especialista em PHP, Node.js, React, aplicações escaláveis.
    </Typography>
  </Container>
);



export default function Home() {
  return (
    <div style={{ minHeight: "100vh", padding: "20px", paddingTop:'0px' }}>
      <Introduction />
      <SkillsSection />
    </div>
  );
}