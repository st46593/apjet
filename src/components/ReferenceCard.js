import React from 'react'

import Image from './Image'
import './ReferenceCard.css'

const ReferenceCard = ({
  image,
  link,
  title,
  className = '',
  ...props
}) => (
      image && (
        <a className="ReferenceCard--Image relative" href={link}>
          <Image background src={image} alt={link} />
        </a>
      )
  )

export default ReferenceCard
