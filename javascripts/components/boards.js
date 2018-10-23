import{loadBoards} from '../data/boardsData.js';


//place data on the board//

const bindEvents = () => {
    $('#user-boards').on('click','.board-card', (e) => {
    const clickedBoardID = $(e.target).closest('.board-card').attr('id');
    $('#boards-page').hide();
    $('#pins-page').show();
    console.log (clickedBoardId);
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
            <p class="card-text">42 Pins</p>
          </div>
      </div>
        `
    });
    $('#user-boards').html(domString);
 }
const initalizeBoardView = () => {
    loadBoards().then((boards) => {
    writeBoards(boards);
    bindEvents();
    }).catch((error) => {
        console.error(error);
    })
}

export {initalizeBoardView};