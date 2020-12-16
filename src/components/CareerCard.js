import React from 'react'
import { Link } from 'gatsby'

import Image from './Image'
import './CareerCard.css'

const CareerCard = ({
  featuredImage,
  title,
  content,
  className = '',
  ...props
}) => (
  <div className={`CareerCard ${className}`}>
    {featuredImage && (
      <div className="CareerCard--Image relative">
        <Image background src={featuredImage} alt={title} />
      </div>
    )}
    <div className="CareerCard--Content">
      {title && <h3 className="CareerCard--Title">{title}</h3>}
      {content && <div className="CareerCard--Excerpt">{content}</div>}
    </div>
  </div>
)

export default CareerCard
