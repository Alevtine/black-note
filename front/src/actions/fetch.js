export const fetchNoteListAction = async (dispatch) => {
  const response = await fetch('/api/note/list');
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  dispatch({ type: 'FETCH_NOTE_LIST', payload: body })
};

export const submitNewNoteAction = async (typed) => {
  await fetch('/api/note', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ typed: typed }),
  });
}

export const showListAction = (dispatch) => {
  dispatch({ type: 'SHOW_NOTE_LIST' })
}

export const hideListAction = (dispatch) => {
  dispatch({ type: 'HIDE_NOTE_LIST' })
}

export const onChangeTextAction = (dispatch, typed) => {
  dispatch({ type: 'TYPE_NEW_NOTE', payload: typed })
}
