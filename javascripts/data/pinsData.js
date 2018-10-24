

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

const loadPinsOnBoard = (boards) => {
    return new Promise ((reslove, reject) => {
        $.get('../db/pins.json') ///insert the data you need
        .done((data) => {
            const boardsWithPins = boards.map(board=> {
                const matchingPins = data.pins.filter(pin => pin.board_id==board.id); //filter funtion == is true 
                board.pins = matchingPins; //we have the board object now return the board
                return board; 
            })

            reslove (boardsWithPins)
       })
        .fail((error) => {
            reject ('error loadPinsOnBoards',error);
        })
    })
}

export {loadPinsForBoard,loadPinsOnBoard};