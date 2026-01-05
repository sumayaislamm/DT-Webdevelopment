const noticeSection = document.querySelector(".notice_section");

// create notice board
const noticeBoard = document.createElement("div");
noticeBoard.classList.add("notice_board");
noticeSection.appendChild(noticeBoard);

// title bar
const titleBar = document.createElement("div");
titleBar.classList.add("notice_board_title");

titleBar.innerHTML = `
    <button class="close_btn">✕</button>
    <h6>NOTICE BOARD</h6>
`;

// append title bar
noticeBoard.appendChild(titleBar);

// X click → vanish board
titleBar.querySelector(".close_btn").addEventListener("click", () => {
    noticeBoard.style.display = "none";
});
