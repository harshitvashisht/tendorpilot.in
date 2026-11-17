import { useEffect, useRef, useState } from 'react'

type CountUpStatProps = {
  value: number
  suffix?: string
}

export default function CountUpStat({ value, suffix = '' }: CountUpStatProps) {
  const [count, setCount] = useState(value)
  const countRef = useRef<HTMLElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const element = countRef.current
    if (!element || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting) || started.current) return

      started.current = true
      observer.disconnect()
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
    }, { threshold: 0.4 })

    observer.observe(element)
    return () => {
      observer.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [value])

  return <strong ref={countRef} aria-label={`${value}${suffix}`}>{count}{suffix}</strong>
}
