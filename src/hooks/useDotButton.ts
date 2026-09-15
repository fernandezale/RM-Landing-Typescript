import { useCallback, useEffect, useState } from 'react'
import type { EmblaCarouselType } from 'embla-carousel'

type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return

    const updateDots = () => {
      setScrollSnaps(emblaApi.scrollSnapList())
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('reInit', updateDots).on('select', updateDots)

    // Defer initial state update to microtask to prevent synchronous setState in effect
    queueMicrotask(updateDots)

    return () => {
      emblaApi.off('reInit', updateDots).off('select', updateDots)
    }
  }, [emblaApi])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}

