import React from 'react'

import Image from './Image'
import Content from './Content'
import './CareerCard.css'

const CareerCard = ({
  featuredImage,
  title,
  body,
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
      {body && <Content className="CareerCard--Excerpt" source={body} />}
    </div>
  </div>
)

export default CareerCard
