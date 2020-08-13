import React from 'react'
import ChevronDown from 'react-feather/dist/icons/chevron-down'
import _kebabCase from 'lodash/kebabCase'
import './Accordion.css'

export default class Accordion extends React.Component {
  static defaultProps = {
    items: [],
    className: ''
  }

  // use state to auto close but has issues mobile view. onClick={() => this.handleClick(index)}
  // state = {
  //   activeItem: null
  // }
  //
  // handleClick = index => {
  //   this.setState({
  //     activeItem: this.state.activeItem === index ? null : index
  //   })
  // }

  handleClick = event => event.target.classList.toggle('active')

  render() {
    const { items, className } = this.props
    return (
      <div className={`Accordion ${className}`}>
        {!!items &&
          items.map((item, index) => (
            <div
              className={`Accordion--item `}
              key={`accordion-item-${_kebabCase(item.name) + '-' + index}`}
              onClick={this.handleClick}
            >
              <h2 className="flex">
                <span>{item.name}</span>
                <ChevronDown />
              </h2>
              <div className={'description'}>
               Telefon: {item.phone} <br />
               Email: {item.email} <br />
              </div>
            </div>
          ))}
      </div>
    )
  }
}
