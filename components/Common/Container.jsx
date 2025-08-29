import React from 'react'

export default function Container({children, className}) {
  return (
    <div className={`max-w-6xl mx-auto px-4 md:px-6 lg:px-8 xl:px-0 ${className}`}>
        {children}
    </div>
  )
}
