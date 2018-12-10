export const fetchNoteListAction = async (dispatch) => {
  const response = await fetch('/api/note/list');
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  dispatch({ type: 'FETCH_NOTE_LIST', payload: body })
};

export const submitNewNoteAction = async (note) => {
  await fetch('/api/note', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ currentNote: note }),
  });
}
