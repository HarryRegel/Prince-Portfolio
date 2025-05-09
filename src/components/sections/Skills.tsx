import { Stack, Typography, Card, Chip } from "@mui/joy";

const skills = [
  { category: "Programming Languages", items: ["C++", "Java", "JavaScript", "TypeScript", "Python", "Solidity", "C", "HTML", "CSS", "Poweshell"] },
  { category: "Frameworks", items: ["React", "Next.js", "Flask", "Node.js", "BootStrap"] },
  { category: "Tools", items: ["Docker", "Git", "CI/CD", "Postman", "GitHub", "Notion", "DigitalOcean", "Render", "Vercel", "PowerBI", "Figma", "Framer"] },
  { category: "Database", items: ["MySQL", "MongoDB", "FireBase", "Neo4J", "GCP", "Oracle"]},
  { category: "Soft Skills", items: ["Teamwork", "Communication", "Problem Solving", "Creativity", "Design"] },
];

export default function Skills() {
  return (
    <Stack gap={3} padding={3}>
      <Typography
        level="h2"
        fontWeight="xl"
        textAlign="center"
        sx={{
          fontSize: "2.5rem",
          background: "linear-gradient(90deg, #00FFA3, #DC1FFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 10px rgba(0,255,163,0.5), 0 0 20px rgba(220,31,255,0.3)",
          fontFamily: '"Orbitron", sans-serif', // Add this font in your index.html or via @import
        }}
      >
        Skills & Technologies
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        gap={3}
        justifyContent="center"
        sx={{
          "& > *": {
            flex: "1 1 calc(25% - 1rem)",
            minWidth: "250px",
          },
        }}
      >
        {skills.map((skill, index) => (
          <Card
            key={skill.category}
            variant="outlined"
            sx={(theme) => ({
              padding: 2,
              backdropFilter: "blur(8px)",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.05)"
                  : "rgba(0, 0, 0, 0.04)",
              border: "1px solid",
              borderColor:
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.1)",
              boxShadow: "0 0 20px rgba(0,255,255,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 25px rgba(0,255,255,0.3)",
              },
            })}
          >
            <Typography level="h5" fontWeight="lg" marginBottom={2}>
              {skill.category}
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {skill.items.map((item) => (
                <Chip
                  key={item}
                  variant="soft"
                  color={
                    index === 0
                      ? "primary"
                      : index === 1
                      ? "success"
                      : index === 2
                      ? "warning"
                      : "neutral"
                  }
                  sx={{
                    fontWeight: "md",
                    letterSpacing: "0.5px",
                    ":hover": {
                      transform: "scale(1.05)",
                      transition: "all 0.2s",
                    },
                  }}
                >
                  {item}
                </Chip>
              ))}
            </Stack>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}
