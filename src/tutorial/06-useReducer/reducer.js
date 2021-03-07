const reducer = (state, action) => {
  if (action.type === 'ADD_PERSON') {
    for (let i = 0; i < state.people.length; i++)
      if (state.people[i].name === action.person.name)
        return {
          ...state,
          showModal   : true,
          modalContent: 'Person already added'
        }

    return {
      ...state,
      people      : [...state.people, action.person],
      showModal   : true,
      modalContent: 'Person added'
    }
  }

  if (action.type === 'EMPTY_PERSON')
    return {
      ...state,
      modalContent: 'Please, enter a value',
      showModal   : true
    }

  if (action.type === 'CLOSE_MODAL')
    return {
      ...state,
      showModal: false
    }

  if (action.type === 'REMOVE_PERSON')
    return {
      ...state,
      people      : state.people.filter(person => person.id !== action.id),
      modalContent: 'Person removed',
      showModal   : true
    }
}

export { reducer }
