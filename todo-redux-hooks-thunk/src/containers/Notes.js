import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as actionTypes from '../store/actions'

const Notes = () => {
  const notes = useSelector(state => state)
  const dispatch = useDispatch()
  const toggleTodo = (id) => ({
    type: actionTypes.TOGGLE_TODO,
    id: id
  })
  const remove = name => ({
    type: actionTypes.REMOVE,
    removeName: name
  })
  return (
    <>
      <ul>
        {notes.map(note => (<div key={Math.random().toString()} className="li-and-button-wrapper"><li key={note.id} onClick={() => dispatch(toggleTodo(note.id))} className={note.completed ? 'strike todo' : 'todo'}> {note.text} </li> <button className="button-remove" onClick={() => dispatch(remove(note.text))}>remove</button></div>))}
      </ul>
    </>
  );
};

export default Notes;