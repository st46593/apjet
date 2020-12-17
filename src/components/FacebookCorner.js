import React from 'react'
import './FacebookCorner.css'

export default ({ url, style, className = ''}) => (
  <a
    className={`FacebookCorner ${className}`}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View source on Github"
    style={style}
  >
    <svg 
      width="30"
      height="30"
      id="Capa_1" 
      viewBox="0 0 112.196 112.196" fill="#3B5998">
      <g>
	      <circle cx="56.098" cy="56.098" r="56.098"/>
	      <path fill="#FFFFFF" d="M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34   c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z"/>
      </g>
    </svg>
  </a>
)
