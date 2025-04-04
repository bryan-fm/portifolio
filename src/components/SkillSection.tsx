import { Container, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

const skills = [
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "ReactJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Typescript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Javascript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" },
];


const SkillsSection = () => (
  <Container maxWidth="lg" style={{ marginTop: "40px", color: "white" }}>
    <Typography variant="h4" align="center" gutterBottom style={{ color: "#4FC3F7" }}>Skills</Typography>
    <Grid container spacing={3} justifyContent="center">
      {skills.map((skill) => (
        <Grid sx={{ xs: 6, sm: 4, md: 3 }}>
          <Card style={{ background: "#0A3D62", textAlign: "center", padding: "15px", color: "white", minWidth: "150px" }}>
            <CardMedia
              component="img"
              height="60"
              image={skill.logo}
              alt={skill.name}
              style={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography variant="h6">{skill.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default SkillsSection;