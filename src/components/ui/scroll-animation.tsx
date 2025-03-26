'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function ScrollAnimation({ children, delay = 0, className = '' }: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 