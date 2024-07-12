import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
export default function ActionAreaCard() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardMedia component="img" width="200" image="/facility.png" alt="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Structural Designing
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our firm specializes in innovative structural design, ensuring
              safety and efficiency for residential, commercial, and industrial
              projects across India.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
}
