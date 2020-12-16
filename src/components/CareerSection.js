import React from 'react'

import CareerCard from './CareerCard'
import './CareerSection.css'

class CareerSection extends React.Component {
  static defaultProps = {
    jobOffers: [],
    title: '',
    limit: 12,
    showLoadMore: true,
    loadMoreTitle: 'Načti více',
    perPageLimit: 12
  }

  state = {
    limit: this.props.limit
  }

  increaseLimit = () =>
    this.setState(prevState => ({
      limit: prevState.limit + this.props.perPageLimit
    }))

  render() {
    const { jobOffers, title, showLoadMore, loadMoreTitle } = this.props,
      { limit } = this.state,
      visiblePosts = jobOffers.slice(0, limit || jobOffers.length)

    return (
      <div className="CareerSection">
        {title && <h2 className="CareerSection--Title">{title}</h2>}
        {!!visiblePosts.length && (
          <div className="CareerSection--Grid">
            {visiblePosts.map((jobOffer, index) => (
              <CareerCard key={jobOffer.title + index} {...jobOffer} />
            ))}
          </div>
        )}
        {showLoadMore && visiblePosts.length < jobOffers.length && (
          <div className="taCenter">
            <button className="button" onClick={this.increaseLimit}>
              {loadMoreTitle}
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default CareerSection
