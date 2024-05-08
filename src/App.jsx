import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './App.css'; // Importa el archivo CSS para el estilo de la galería
import Player from './components/player';
import "@madzadev/audio-player/dist/index.css";


function App() {
  const images = [
    {
      original: "https://i.imgur.com/8K7p0ay.mp4", //resbaladora
      embedUrl: "https://i.imgur.com/8K7p0ay.mp4",
      originalHeight: 800, // Altura original de la imagen en píxeles
    originalWidth: 600, // Anchura original de la imagen en píxeles

      renderItem: (item) => (
        <div className="image-gallery-image">
          <video autoPlay muted loop controls>
            <source src={item.original} type="video/mp4" />
            Tu navegador no admite el elemento de video.
          </video>
          {item.description && (
            <span className="image-gallery-description">{item.description}</span>
          )}
        </div>
      )
    },
    {
      original: "https://i.imgur.com/ZAnd2KL.jpg",
      description: "Gracias mamá por cuidarme siempre."
      
    },
    {
      original: "https://i.imgur.com/exFsbOP.mp4",//aprendiendo a caminar 
      embedUrl: "https://i.imgur.com/exFsbOP.mp4",
      renderItem: (item) => (
        <div className="image-gallery-image">
          <video autoPlay muted loop controls>
            <source src={item.original} type="video/mp4" />
            Tu navegador no admite el elemento de video.
          </video>
          {item.description && (
            <span className="image-gallery-description">{item.description}</span>
          )}
        </div>
      )
    },
    {
      original: "https://i.imgur.com/qjXzmY0.jpg",
      description: "Jugando y riendo juntas, ¡gracias por los momentos felices, mamá!"
    },
    {
      original: "https://i.imgur.com/NMEQnLi.mp4",//caminando en el parque 
      embedUrl: "https://i.imgur.com/NMEQnLi.mp4",
      renderItem: (item) => (
        <div className="image-gallery-image">
          <video autoPlay muted loop controls>
            <source src={item.original} type="video/mp4" />
            Tu navegador no admite el elemento de video.
          </video>
          {item.description && (
            <span className="image-gallery-description">{item.description}</span>
          )}
        </div>
      )
    },
    {
      original: "https://i.imgur.com/CrN6Ycr.jpg",
      description: "Gracias por hacerme sentir especial cada día, mamá.",
      originalHeight: 800, // Altura original de la imagen en píxeles
      originalWidth: 600, // Anchura original de la imagen en píxeles
      renderItem: (item) => (
        <div className="image-gallery-image">
          <img src={item.original} alt={item.description} style={{ maxWidth: "100%", height: "auto" }} />
          {item.description && (
            <span className="image-gallery-description">{item.description}</span>
          )}
        </div>
      )
    },
    {
      original: "https://i.imgur.com/VK2guJ9.jpg",
       description: "Gracias mamá por tus abrazos reconfortantes.",
      originalHeight: 800, // Altura original de la imagen en píxeles
      originalWidth: 600, // Anchura original de la imagen en píxeles
      renderItem: (item) => (
        <div className="image-gallery-image">
          <img src={item.original} alt={item.description} style={{ maxWidth: "100%", height: "auto" }} />
          {item.description && (
            <span className="image-gallery-description">{item.description}</span>
          )}
        </div>
      )
    },
    
    {
      original: "https://i.imgur.com/vrhv6Zu.jpg",
      description: "Gracias mamá por enseñarme tantas cosas.", 
    },
        
    {
      original: "https://i.imgur.com/ffsVIm1.mp4",
      embedUrl: "https://i.imgur.com/ffsVIm1.mp4",
      renderItem: (item) => (
        <div className="image-gallery-image">
          <video autoPlay muted loop controls>
            <source src={item.original} type="video/mp4" />
            Tu navegador no admite el elemento de video.
          </video>
          {item.description && (
            <span className="image-gallery-description">{item.description}</span>
          )}
        </div>
      )
    },
    {
      original: "https://i.imgur.com/rOFCX09.jpg",
      description: "Eres la mejor mamá del mundo"
    },
    {
      original: "https://i.imgur.com/6McgFW2.mp4",
      embedUrl: "https://i.imgur.com/6McgFW2.mp4",
      originalHeight: 800, // Altura original de la imagen en píxeles
    originalWidth: 600, // Anchura original de la imagen en píxeles

      renderItem: (item) => (
        <div className="image-gallery-image">
          <video autoPlay muted loop controls>
            <source src={item.original} type="video/mp4" />
            Tu navegador no admite el elemento de video.
          </video>
          {item.description && (
            <span className="image-gallery-description">{item.description}</span>
          )}
        </div>
      )
    },
    {
      original: "https://i.imgur.com/lXJX2UK.jpg",
      description: "Mamá, eres mi superhéroe, ¡gracias por cuidarme siempre!"
    },
    {
      original: "https://i.imgur.com/GiflG1T.jpg",
      description: "Gracias mamá por ser mi ejemplo a seguir."
    },
    ];

  return (
    <>
     <div className="app-container">
      <div className="audio-player">
        <Player />
      </div>
    </div>
    <center>
        <h1 className="title">FELIZ DÍA <span role="img" aria-label="corazón">❤️</span> MAMÁ </h1>
      </center>
    <div className="app-container">
      {/* Contenedor de la galería de imágenes */}
      <div className="masonry-grid">
        {images.map((image, index) => (
          <div key={index} className="masonry-item">
            <ImageGallery items={[image]} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
