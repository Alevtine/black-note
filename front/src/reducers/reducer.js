const initialState = {
    allNotes: [],
    currentNote: '',
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_NOTE_LIST':
      return {
        ...state,
        allNotes: action.payload,
      };
    case 'SAVE_EDITED_NOTE':
      return {
        ...state,
        allNotes: action.payload,
      };
    case 'FETCH_NOTE':
      return {
        ...state,
        currentNote: action.payload,
      };
    default:
    return state;
  }
}
