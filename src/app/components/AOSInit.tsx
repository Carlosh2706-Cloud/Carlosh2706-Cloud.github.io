'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AOSInit() {
  const pathname = usePathname()

  useEffect(() => {
    let cancelled = false

    const initializeAOS = async () => {
      const AOS = await import('aos')

      if (cancelled) return

      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 100,
      })

      AOS.refresh()
    }

    initializeAOS()

    return () => {
      cancelled = true
    }
  }, [pathname])

  return null
}
