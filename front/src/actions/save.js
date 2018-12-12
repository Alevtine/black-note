export const saveEditedNote = async (dispatch, id, title, text) => {
  const response = await fetch(`/api/note/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, text }),
  })
  const data = await response.json()
  console.log(response, data)
  dispatch({ type: 'SAVE_EDITED_NOTE', payload: data })
}
