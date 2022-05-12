import {
  ADD_NOTE,
  DELETE_NOTE,
  GET_NOTES,
  UPDATE_NOTE,
} from "../actions/noteUser.action";

const initialState = {};

export default function noteUserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NOTES:
      return action.payload;
    case ADD_NOTE:
      return [action.payload, ...state];
    case UPDATE_NOTE:
      return state.map((note) => {
        if (note._id === action.payload.noteId) {
          return {
            ...note,
            note: action.payload.note,
          };
        } else return note;
      });
    case DELETE_NOTE:
      return state.filter((note) => note._id !== action.payload.noteId);
    default:
      return state;
  }
}
