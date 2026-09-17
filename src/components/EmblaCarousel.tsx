import type { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import { NextButton, PrevButton } from './EmblaCarouselArrowButtons'
import { usePrevNextButtons } from '../hooks/usePrevNextButtons'
import { DotButton } from './EmblaCarouselDotButton'
import { useDotButton } from '../hooks/useDotButton'
import type { HeroSlide } from './Hero'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'

type PropType = {
  heroSlides: HeroSlide[]
  options?: EmblaOptionsType
  whatsappNumber?: string
}

const EmblaCarousel = (props: PropType) => {
  const { heroSlides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {heroSlides.map((heroSlide, index) => {
            const isActive = index === selectedIndex

            return (
              <div 
                className="embla__slide relative flex items-center h-(--slide-height)" 
                key={index}
              >
                {/* Imagen de fondo */}
                <img
                  className="embla__slide__img absolute inset-0 w-full h-full object-cover -z-10"
                  src={heroSlide.imagen}
                  alt={heroSlide.titulo}
                />

                {/* Capa oscura de contraste */}
                <div className="absolute inset-0 bg-black/50 -z-10" />

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-80 sm:pt-80 pb-12 flex flex-col items-center text-center">
                  <div className="flex flex-col items-center text-center max-w-3xl">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          key={`slide-content-${index}`}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.6, 
                            ease: [0.16, 1, 0.3, 1] 
                          }}
                          className="flex flex-col items-center text-center space-y-4 sm:space-y-5"
                        >
                          {/* Título Principal animado */}
                          <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md text-center"
                          >
                            {heroSlide.titulo}
                          </motion.h1>

                          {/* Insignia / Texto Destacado */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="inline-flex items-center justify-center space-x-2 bg-brand-accent/40 border border-white/20 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-medium shadow-sm"
                          >
                            <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                            <span>{heroSlide.textoDestacado}</span>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel