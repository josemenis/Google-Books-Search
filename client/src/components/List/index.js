import React from 'react';
import './style.css';

// This file exports both the List and ListItem components

export function List ({ children }) {
  return (
    <div className='list-overflow-container'>
      <ul className='list-group'>{children}</ul>
    </div>
  )
}
                          // key added to arg, why?
export function ListItem ({ key, children }) {
          // key is added here ask why?
  return <li key={key} className='list-group-item'>{children}</li>
}
