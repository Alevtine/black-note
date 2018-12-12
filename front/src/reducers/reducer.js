const initialState = {
    allNotes: [],
    currentNote: '',
    something: ''
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_NOTE_LIST':
      return {
        ...state,
        allNotes: action.payload
      }
    case 'SUBMIT_NOTE':
      return {
        ...state,
        currentNote: action.payload
      }
    case 'SAVE_EDITED_NOTE':
      return state;
    default:
    return state;
  }
}
