export const fetchNoteList = async (dispatch) => {
  const response = await fetch('/api/note/list');
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  dispatch({ type: 'FETCH_NOTE_LIST', payload: body })
};

export const fetchNote = async (dispatch, id) => {
  const response = await fetch(`/api/note/${id}`);
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  dispatch({ type: 'FETCH_NOTE', payload: body })
};

export const submitNewNote = async (title, text) => {
  await fetch('/api/note', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ title, text }),
  });
}

export const deleteCurrentNote = async (dispatch, id, title, text) => {
  const response = await fetch(`/api/note/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ title, text }),
  });
  const data = response.json();
  if (response.status !== 200) throw Error(data.message);
}

export const saveEditedNote = async (dispatch, id, title, text) => {
  const response = await fetch(`/api/note/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ title, text }),
  })
  const data = await response.json();
  if (response.status !== 200) throw Error(data.message);
  dispatch({ type: 'SAVE_EDITED_NOTE', payload: data })
}
