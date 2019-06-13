const initial_state ={
    cards:[]
}

export default (state = initial_state,action) => {
    switch (action.type) {
        case 'SAVE_CARD':
            return {cards:[...state.cards, action.payload]}
        case 'DELETE_CARD':
            return {cards:state.cards.filter((obj)=>obj.username!==action.payload.username)}
        default:
            return state
    }
}