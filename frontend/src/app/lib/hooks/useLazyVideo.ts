"use client"

import { useRef, useCallback, useEffect } from "react"

export function useLazyVideo(rootMargin: string = "400px") {
  const processedElements = useRef(new Set<HTMLVideoElement>())
  const elementsToObserve = useRef(new Set<HTMLVideoElement>())
  const observerRef = useRef<IntersectionObserver | null>(null)

  const loadVideo = (video: HTMLVideoElement) => {
    const sources = video.querySelectorAll("source[data-src]")
    sources.forEach(source => {
      source.setAttribute("src", source.getAttribute("data-src") || "")
    })
    video.load()
    video.muted = true
    video.play().catch(() => {})
  }

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const video = entry.target as HTMLVideoElement
          if (entry.isIntersecting && !processedElements.current.has(video)) {
            loadVideo(video)
            observerRef.current?.unobserve(video)
            processedElements.current.add(video)
          }
        })
      },
      {
        rootMargin,
        threshold: 0.01,
      }
    )

    const observer = observerRef.current

    elementsToObserve.current.forEach(el => {
      if (!processedElements.current.has(el)) {
        observer.observe(el)
      }
    })

    return () => {
      observer?.disconnect()
      processedElements.current.clear()
      elementsToObserve.current.clear()
    }
  }, [rootMargin])

  const videoRefCallback = useCallback((el: HTMLVideoElement | null) => {
    if (!el) return

    elementsToObserve.current.add(el)

    if (observerRef.current && !processedElements.current.has(el)) {
      observerRef.current.observe(el)
    }
  }, [])

  return videoRefCallback
}