import React from 'react'

import ServiceCard from './ServiceCard'
import './ServiceSection.css'

class ServiceSection extends React.Component {
  static defaultProps = {
    services: []
  }
  
  render() {
    const { services } = this.props
    return (
      <div className="ServiceSection">
        {!!services.length && (
          <div className="ServiceSection--Grid">
            {services.map((service, index) => (
              <ServiceCard key={service.title + index} {...service} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default ServiceSection
