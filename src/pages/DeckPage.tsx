import React from "react";
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, CardMedia } from "@mui/material";
import ProjectGrid from "../components/ProjectGrid";

const DeckSection = () => (
  <Container maxWidth="lg" style={{ textAlign: "start", marginTop: "40px", color: "white" }}>
    <ProjectGrid/>
  </Container>
);

export default function DeckPage() {
  return (
    <div>
      <DeckSection />
    </div>
  );
}