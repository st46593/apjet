import React from 'react'
import './Footer.css'
import FacebookCorner from './FacebookCorner'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          {new Date().getFullYear()} © AP Jet s. r. o.
        </span>
        <FacebookCorner url="https://www.facebook.com/apjet.cz"/>
      </div>
    </footer>
  </div>
)