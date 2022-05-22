import React from 'react'

const Note = ({ note }) => {
  return (
    <li>
    <p style={{marginBottom:0}}>{note.content}</p>
    <em style={{fontSize:11}}>{note.date}</em>
    </li>
  )
}

export default Note