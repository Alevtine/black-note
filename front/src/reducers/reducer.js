const initialState = {
    allNotes: [],
    typed: '',
    isListShown: false,
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_NOTE_LIST':
      return {
        ...state,
        allNotes: state.allNotes,
        isListShown: true
      }
    case 'HIDE_NOTE_LIST':
      return {
        ...state,
        isListShown: false
      }
    case 'FETCH_NOTE_LIST':
      return {
        ...state,
        allNotes: action.payload
      }
    case 'TYPE_NEW_NOTE':
      return {
        ...state,
        typed: action.payload
      }
    default:
    return state;
  }
}
