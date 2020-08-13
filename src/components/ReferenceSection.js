import React from 'react'

import ReferenceCard from './ReferenceCard'
import './ReferenceSection.css'

class ReferenceSection extends React.Component {
  static defaultProps = {
    references: [],
    limit: 15,
    showLoadMore: true,
    loadMoreTitle: 'Načti více',
    perPageLimit: 15
  }

  state = {
    limit: this.props.limit
  }

  increaseLimit = () =>
    this.setState(prevState => ({
      limit: prevState.limit + this.props.perPageLimit
    }))

  render() {
    const { references, title, showLoadMore, loadMoreTitle } = this.props,
      { limit } = this.state,
      visibleReferences = references.slice(0, limit || references.length)

    return (
      <div className="ReferenceSection">
        {!!visibleReferences.length && (
          <div className="ReferenceSection--Grid">
            {visibleReferences.map((reference, index) => (
              <ReferenceCard key={reference.link + index} {...reference} />
            ))}
          </div>
        )}
        {showLoadMore && visibleReferences.length < references.length && (
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

export default ReferenceSection
