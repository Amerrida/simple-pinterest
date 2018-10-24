
import {loadBoards} from '../data/boardsData.js'
import {intializePinView} from './pins.js'
import {loadPinsOnBoard} from '../data/pinsData.js'

//place data on the board//

const bindEvents = () => {
    $('#user-boards').on('click','.board-card', (e) => {
    const clickedBoardId = $(e.target).closest('.board-card').attr('id');
    $('#boards-page').hide();
    $('#pins-page').show();
    intializePinView(clickedBoardId);
    })
}

const writeBoards = (boards)  => {
    let domString = '' ;
    boards.forEach(board => {
        domString += `  
        <div id= '${board.id}'class="board-card p-2">
          <img class="card-img-top" src="./db/default-img.jpeg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${board.name}</h5>
            <p class="card-text">${board.pins.length}pins</p>
          </div>
      </div>
        `
    });
    $('#user-boards').html(domString);
 }
const initalizeBoardView = () => {
    //first promise//
    loadBoards().then((boards) => {
        return loadPinsOnBoard (boards);  //second promise//
    }).then((boardsWithPins) => {
        writeBoards(boardsWithPins);
    bindEvents();  
    }).catch((error) => {
        console.error(error);
    })
}

export {initalizeBoardView};