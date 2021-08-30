import * as actionTypes from '../actions'
import noteServices from '../../services/Notes'

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_NOTES:
      return action.data
    case actionTypes.ADD_TODO:
      return state.concat({
        id: action.id + 1,
        text: action.text,
        completed: action.completed
      })
    case actionTypes.TOGGLE_TODO:
      const noteToChange = state.find(n => n.id === action.id)
      const changeNote = { ...noteToChange, completed: !noteToChange.completed }
      return state.map((note) => (note.id !== action.id ? note : changeNote))
  }
  return state
}

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteServices.getAll()
    dispatch({
      type: actionTypes.INIT_NOTES,
      data: notes
    })
  }
}

export default reducer