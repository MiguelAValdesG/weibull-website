import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from '@mui/material';

function VideoYoutube() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', // Ocupa todo el ancho disponible
        height: {xs: '40vh',sm: '80vh'},
        borderRadius: "100px"
      }}
    >
      <ReactPlayer
        url='https://www.youtube.com/watch?v=lntGrdxS0to' // Reemplaza con tu URL
        width='100%' // Se ajusta al ancho del contenedor padre
        height='100%' // Mantiene la relación de aspecto
        controls // Muestra los controles del reproductor
        style={{
          borderRadius: "2px",
          overflow: "hidden"
        }}
      />
    </Box>
  );
}

export default VideoYoutube;