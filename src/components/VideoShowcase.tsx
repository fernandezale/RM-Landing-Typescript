import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Film } from 'lucide-react';
import { motion } from 'framer-motion';

// Video MP4 demostrativo de carpintería / fabricación de muebles
const DEMO_VIDEO_URL = '/video-renuevo.mp4';

const VideoShowcase: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  // Actualizar el tiempo actual del video
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  // Autoplay silenciado al scroll o inicialización limpia
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);

  return (
    <section id="taller-video" className="py-16 bg-brand-dark text-white relative overflow-hidden scroll-mt-20">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#A06B58_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-brand-accent/20 border border-brand-accent/40 text-brand-light px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Film className="w-4 h-4 text-brand-accent" />
            <span>Proceso de Fabricación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Así Creamos Tus Muebles a Medida
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brand-muted">
            Conocé el paso a paso del proceso artesanal y de alta tecnología con el que fabricamos cada proyecto.
          </p>
        </div>

        {/* Contenedor del Reproductor de Video */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-brown/40 bg-black aspect-video group">
          
          {/* Elemento HTML5 Video */}
          <video
            ref={videoRef}
            src={DEMO_VIDEO_URL}
            className="w-full h-full object-cover cursor-pointer"
            onClick={togglePlay}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            playsInline
            loop
          />

          {/* Overlay Superior: Título Animado */}
          <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none flex items-start justify-between">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl"
            >
              <div className="p-1.5 bg-brand-accent text-white rounded-lg">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                  Taller de Producción MDF
                </h3>
                <p className="text-xs text-brand-light/80">Córdoba, Argentina</p>
              </div>
            </motion.div>
          </div>

          {/* Botón de Play Central en Pausa */}
          {!isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-accent hover:bg-[#885442] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform"
                aria-label="Reproducir video"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
              </motion.button>
            </div>
          )}

          {/* Barra de Controles Inferior */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col space-y-2 opacity-90 group-hover:opacity-100 transition-opacity">
            
            {/* Slider de Progreso */}
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-white/20 accent-brand-accent rounded-lg cursor-pointer transition-all"
            />

            <div className="flex items-center justify-between text-xs text-white/80">
              <div className="flex items-center space-x-3">
                <button
                  onClick={togglePlay}
                  className="hover:text-brand-accent transition-colors p-1"
                  aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="hover:text-brand-accent transition-colors p-1"
                  aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>

              {/* Indicador de Tiempo */}
              <div className="font-mono text-xs">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

// Función auxiliar para formatear segundos a MM:SS
const formatTime = (seconds: number): string => {
  if (isNaN(seconds)) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

export default VideoShowcase;

