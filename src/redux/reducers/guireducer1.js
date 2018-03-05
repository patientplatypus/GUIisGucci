const guireducer1 = (state = [], action) => {
  switch (action.type) {
    case 'GUI_DATA':
      console.log('inside guireducer1 and action.data: ', action.data);
      return state = action.data;
    case 'GUI_ERROR':
      return state = action.data;
    default:
      return state;
  }
}

export default guireducer1
