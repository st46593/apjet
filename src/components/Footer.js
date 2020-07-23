import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          {new Date().getFullYear()} © AP Jet s. r. o. All rights reserved.
        </span>
      </div>
    </footer>
  </div>
)