
export const addCard = (card, username, error=false) => (dispatch) => {
    dispatch({
        type:"SAVE_CARD",
        payload:{card,username,error}
    });
}

export const deleteCard = (username) => (dispatch) => {
    dispatch({
        type:"DELETE_CARD",
        payload:{username}
    });
}