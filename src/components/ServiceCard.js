import React from 'react'

import Image from './Image'
import './ServiceCard.css'

const ServiceCard = ({
  image,
  description,
  title,
  className = '',
  ...props
}) => (
    <div className={`ServiceCard ${className}`}>
      {image && (
        <div className="ServiceCard--Image relative">
          <Image background src={image} alt={title} resolutions="small"/>
        </div>
      )}
      <div className="ServiceCard--Content">
        {title && <h3 className="ServiceCard--Title">{title}</h3>}
        {description && <div className="ServiceCard--Excerpt">{description}</div>}
      </div>
    </div>
  )

export default ServiceCard
