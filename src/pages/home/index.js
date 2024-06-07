// ** MUI Imports
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Box, CardHeader, CardMedia, Paper } from "@mui/material";
import data from "src/data/content";
import { useSettings } from "src/@core/hooks/useSettings";
import Image from "next/image";

const Home = () => {
  const { settings } = useSettings();
  const { mode } = settings;
  return (
    <Grid container rowGap={20}>
      <Box
        sx={{
          backgroundImage: "url(/images/logo.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "250px 250px",
          backgroundPositionX: "50%",
          paddingTop: 34,
        }}
      >
        <Grid
          item
          sm={12}
          textAlign={"center"}
          my={30}
          mx={{ sm: 10, md: 50 }}
          alignSelf={"center"}
        >
          <Typography variant="h2">¿Quiénes somos?</Typography>
          <Typography sx={{ fontSize: "1.5em" }} mt={4}>
            Somos un equipo de visionarios dedicados a crear, entender e interpretar los datos.<br />
            Weibull está integrados por expertos en análisis de datos y desarrollo de herramientas
            web capaces de transformar la información en toma de decisiones.
          </Typography>
        </Grid>
      </Box>
      <Grid item sm={12}>
        <Grid container>
          <Grid md={6} alignSelf={"center"}>
            <Typography variant="h2">¿Qué hacemos?</Typography>
            <Typography sx={{ fontSize: "1.2em" }} mt={5}>
              Impulsamos el entendimiento de datos de importancia internos y externos sustentados en la ciencia.
              <br />
              <br />
              Brindamos soluciones de inteligencia de negocios desde la detección y recolección de información
              relevante hasta poder decidir de manera estratégica ante la incertidumbre.
            </Typography>
          </Grid>
          <Grid sm={1} />
          <Grid sm={4}>
            <Paper sx={{ width: 500, height: 300 }} elevation={8}>
              <img
                src="/images/pages/who-we-are.jpg"
                width={500}
                height={300}
                style={{ borderRadius: 8, objectFit: "cover" }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid sm={12} my={18} textAlign={"center"}>
        <Typography variant="h3">Áreas de Enfoque</Typography>
        <Grid container>
          {data.focusAreas.content.details.map((element) => (
            <Grid xs={12} md={4} padding={4}>
              <Card>
                <CardContent sx={{ width: { sm: "80vw", md: "100%" } }}>
                  <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
                    {element}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item sm={12} textAlign={"center"}>
        <Typography variant="h3" mb={10}>
          Filosofía
        </Typography>
        <Grid container justifyContent={"center"} rowGap={10}>
          {data.philosophy.content.map((item, index) => {
            let img = "";
            switch (index) {
              case 0:
                img = "/images/pages/philosophy/mission.jpg";
                break;
              case 1:
                img = "/images/pages/philosophy/vision.jpg";
                break;
              case 2:
                img = "/images/pages/philosophy/values.jpg";
                break;
              default:
                break;
            }

            return (
              <Grid xs={12} md={3} mx={10}>
                <Card>
                  <CardMedia>
                    <img src={img} width={"100%"} />
                  </CardMedia>
                  <CardHeader title={item.title}>
                    <Typography variant="h5">{item.title}:</Typography>
                  </CardHeader>
                  <CardContent>
                    <Typography variant="subtitle1">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item sm={12}>
        <Box sx={{ backgroundColor: "#253439", padding: 10, borderRadius: 2 }}>
          <Grid
            container
            flexDirection={"row"}
            justifyItems={"center"}
            alignItems={"center"}
          >
            <Grid sm={12} md={6} paddingRight={10}>
              <Image
                src="/images/pages/process.jpg"
                style={{
                  objectFit: "contain",
                  borderRadius: 8,
                  width: "100%",
                  height: "100%",
                }}
                height={300}
                width={600}
              />
            </Grid>
            <Grid sm={12} md={6}>
              <Typography variant="h3" color={"#fff"}>
                Proceso
              </Typography>
              <Typography color={"#fff"} sx={{ fontSize: 18 }} mt={8}>
                La naturaleza de cada proyecto requiere tratamiento y soluciones diferentes, por eso en Weibull
                empezamos por conocer el modelo de negocios y entender las necesidades planteadas por la empresa,
                abordamos la problemática con enfoque analítico con fin de generar una propuesta de valor.
                Nos especializamos en soluciones tecnológicas que involucran desde el desarrollo de herramientas web
                hasta el procesamiento y análisis de los datos.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid sm={12}>
        <Typography variant="h2">Servicios</Typography>
        <Grid container columns={{ xs: 1, sm: 2 }} mt={5}>
          {data.services.content.details.map((element, index) => {
            let img = "";
            console.log(mode);
            switch (index) {
              case 0:
                img = "/images/pages/services/muestreo.webp";
                break;
              case 1:
                img = "/images/pages/services/control.webp";
                break;
              case 2:
                img = "/images/pages/services/modelado.webp";
                break;
              case 3:
                img = "/images/pages/services/desarrollo.webp";
                break;
              case 4:
                img = "/images/pages/services/proyecciones.webp";
                break;
              case 5:
                img = "/images/pages/services/optimizacion.webp";
                break;
              case 6:
                img = "/images/pages/services/investigacion.webp";
                break;
              case 7:
                img = "/images/pages/services/habilidades.webp";
                break;
              default:
                break;
            }
            return (
              <Paper
                square
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingY: 10,
                  height: 300,
                  width: {sm: "100%", md: "45%"},
                  margin: 1,
                }}
                elevation={4}
                className="paper-like"
              >
                <Image
                  style={{
                    width:'100%',
                    objectFit: 'cover'
                  }}
                  src={img}
                  width={600}
                  height={300}
                />
              </Paper>
            );
          })}
        </Grid>
      </Grid>
      <Grid sm={12}>
        <Typography variant="h2">Beneficios</Typography>
        <Grid container rowGap={20} mt={10}>
          {data.benefits.content.details.map((element, index) => {
            let color = "";
            if (index % 2 === 0) {
              color = mode === "light" ? "#253439" : "#226B86 ";
            } else {
              color = mode === "light" ? "#226B86" : "#4e4944";
            }
            return (
              <Grid xs={12} sm={3} justifyContent={'center'} alignContent={'center'} alignSelf={'center'} alignItems={'center'}>
                <Card
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 200,
                  height: 180,
                  marginLeft: {xs:'30%', sm: 0},
                  backgroundColor: color,
                }}
              >
                <CardContent>
                  <Typography
                    fontSize={{ sm: 18, md: 20 }}
                    fontWeight={"600"}
                    align="center"
                    color={"#7c898B"}
                  >
                    {element}
                  </Typography>
                </CardContent>
              </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
