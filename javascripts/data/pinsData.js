

const loadPinsForBoard = (boardId) => {
    return new Promise ((resolve,reject) => {
        $.get('../db/pins.json')
        .done((data) => {
        const pinsforBoards = data.pins.filter(pin => pin.board_id == boardId)
        resolve(pinsforBoards)
        
        })
        .fail((error) => {
            reject.error(error);
        })
    })
}

export {loadPinsForBoard};