const journeyData = {
    tasks: [
        {
            task_id: 18882,
            task_title: "Explore the world of management",
            assets: [
                { asset_id: 18883, asset_title: "Technical Project Management", asset_content_type: "video" },
                { asset_id: 18884, asset_title: "Threadbuild", asset_content_type: "threadbuilder" },
                { asset_id: 18885, asset_title: "Structure your pointers", asset_content_type: "article" },
                { asset_id: 18886, asset_title: "4SA Method", asset_content_type: "article" }
            ]
        }
    ]
};

let expanded = true;


const journeyContainer = document.querySelector(".journey_section");


const box = document.createElement("div");
box.classList.add("journey_board");
journeyContainer.appendChild(box);

function updateJourneyBoard() {
  
    box.innerHTML = "";
    box.style.width = expanded ? "350px" : "50px";

    
    const journeyBoardTitle = document.createElement("div");
    journeyBoardTitle.classList.add("journey_board_title");

    journeyBoardTitle.innerHTML = `
        ${expanded ? `<h6>Journey Board</h6>` : ``}
        <button class="arrow_icon">
            <img src="../images/icons/${expanded ? "arrowreverse.png" : "arrow.png"}" alt="">
        </button>
    `;

    box.appendChild(journeyBoardTitle);

   
    journeyBoardTitle.querySelector(".arrow_icon").onclick = () => {
        expanded = !expanded;
        updateJourneyBoard();
    };

    
    if (expanded) {
        const content = document.createElement("div");
        content.style.padding = "15px";

        journeyData.tasks.forEach(task => {
            const taskBlock = document.createElement("div");
            taskBlock.innerHTML = `<strong>${task.task_title}</strong>`;

            const ul = document.createElement("ul");

            task.assets.forEach(asset => {
                const li = document.createElement("li");
                li.textContent = asset.asset_title;
                ul.appendChild(li);
            });

            taskBlock.appendChild(ul);
            content.appendChild(taskBlock);
        });

        box.appendChild(content);
    }
}


updateJourneyBoard();

