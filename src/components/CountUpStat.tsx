import { useEffect, useRef, useState } from 'react'

type CountUpStatProps = {
  value: number
  suffix?: string
  animationKey?: number
}

export default function CountUpStat({ value, suffix = '', animationKey = 0 }: CountUpStatProps) {
  const [count, setCount] = useState(value)
  const countRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = countRef.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const animateCount = () => {
      const startTime = performance.now()
      const duration = 1800
      setCount(0)

      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const easedProgress = 1 - (1 - progress) ** 3
        setCount(Math.round(value * easedProgress))
        if (progress < 1) frame = requestAnimationFrame(animate)
      }

      frame = requestAnimationFrame(animate)
    }

    if (animationKey > 0) {
      animateCount()
    } else if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        animateCount()
      }, { threshold: 0.4 })

      observer.observe(element)
      return () => {
        observer.disconnect()
        if (frame) cancelAnimationFrame(frame)
      }
    }

    return () => {
      if (frame) cancelAnimationFrame(frame)
    }
  }, [value, animationKey])

  return <strong ref={countRef} aria-label={`${value}${suffix}`}>{count}{suffix}</strong>
}
