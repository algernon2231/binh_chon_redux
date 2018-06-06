const initialState = {
    angular: 0,
    react: 0,
    vuejs: 0

}

export default(state = initialState, action) => {
    switch(action.type) {
        case 'VOTE_ANGULAR':
           return {
               ...state, 
               angular: state.angular + 1
           }
        case 'VOTE_REACT' :
          return {
             ...state,
              react: state.react  + 1 
          }  
        case 'VOTE_VUEJS' :
          return {
             ...state,
              vuejs : state.vuejs + 1 
          }
       default: 
        return state ;
    }
}