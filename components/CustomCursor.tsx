// 'use client'

// import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'

// export default function CustomCursor() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [isPointer, setIsPointer] = useState(false)

//   useEffect(() => {
//     const updateMousePosition = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }

//     const updateCursorType = (e: MouseEvent) => {
//       const target = e.target as HTMLElement
//       setIsPointer(
//         window.getComputedStyle(target).cursor === 'pointer' ||
//         target.tagName === 'A' ||
//         target.tagName === 'BUTTON'
//       )
//     }

//     window.addEventListener('mousemove', updateMousePosition)
//     window.addEventListener('mouseover', updateCursorType)

//     return () => {
//       window.removeEventListener('mousemove', updateMousePosition)
//       window.removeEventListener('mouseover', updateCursorType)
//     }
//   }, [])

//   return (
//     <>
//       {/* Main cursor dot */}
//       <motion.div
//         className="fixed top-0 left-0 w-2 h-2 bg-primary-500 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
//         animate={{
//           x: mousePosition.x - 4,
//           y: mousePosition.y - 4,
//           scale: isPointer ? 0.5 : 1,
//         }}
//         transition={{
//           type: 'spring',
//           stiffness: 500,
//           damping: 28,
//         }}
//       />
      
//       {/* Cursor outline */}
//       <motion.div
//         className="fixed top-0 left-0 w-8 h-8 border-2 border-primary-500/50 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
//         animate={{
//           x: mousePosition.x - 16,
//           y: mousePosition.y - 16,
//           scale: isPointer ? 1.5 : 1,
//         }}
//         transition={{
//           type: 'spring',
//           stiffness: 150,
//           damping: 15,
//         }}
//       />
//     </>
//   )
// }