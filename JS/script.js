
const dummyData = {
    tasks: [
        {
            task_title: "Explore the world of management",
            assets: [
                {
                    asset_title: "Technical Project Management",
                    asset_description: "Story of Alignment, Scope of Agility, Specific Accountable, Staggering Approach",
                    asset_content_type: "video",
                    asset_content: "https://www.youtube.com/embed/TiMRwri1xJ8"
                },
                {
                    asset_title: "Threadbuild",
                    asset_description: "Watch the video and thread build, and jot out key threads while watching the video",
                    asset_content_type: "threadbuilder"
                },
                {
                    asset_title: "Structure your pointers",
                    asset_description: "Write a 300-400 word article from your thread. Publish your understanding and showcase your understanding",
                    asset_content_type: "article"
                },
                {
                    asset_title: "4SA Method",
                    asset_description: "To Explore more read more",
                    asset_content_type: "article"
                }
            ]
        }
    ]
};
// All cards work ----------------

const cardsContainer = document.querySelector(".all_cards");

// ------mapping 
dummyData.tasks[0].assets.forEach(asset => {
    const card = document.createElement("div");
    card.classList.add("card");

    // -----title
    const title = document.createElement("div");
    title.classList.add("card_title")
    title.innerHTML = `<h6> ${asset.asset_title} </h6> <button class="icon_btn card_icon"><img src="../images/icons/i_icon.png" alt="profile icon"></button>`;
    card.appendChild(title);

    // -----Description
    const desc = document.createElement("p");
    desc.innerHTML = `<p class="padding"><span class="dec_title">Description: </span>${asset.asset_description}</p>`;
    card.appendChild(desc);



    // Individual Cards Content 
    if (asset.asset_content_type === "video") {
        const iframe = document.createElement("iframe");
        iframe.src = asset.asset_content;
        iframe.width = "100%";
        iframe.height = "350";
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "true");
        card.appendChild(iframe);
    }
    else if (asset.asset_content_type === "threadbuilder") {
        card.innerHTML += `
      <div class="thread_head"><span> <img src="../images/icons/upper sign.png" alt=""/> </span> 
      <p>Thread A</p> </div>
      <div class="thread_block">
      <div class="single_texarea">
      <label for="subthread1">Sub thread 1</label>
      <textarea id="subthread1" placeholder="Enter Text here"></textarea>
      </div>
      <div class="single_texarea"> 
      <label for="interpretation1">Sub Interpretation 1</label>
      <textarea id="interpretation1" placeholder="Enter Text here"></textarea>
      </div>
      </div>
      <div class="three_button"> 
      <img src="../images/icons/Group.png" alt=""/>
      
      <select>
      <option>Select Categ</option>
      <option>A</option>
      <option>B</option>
      </select>
      
     
      <select>
      <option>Select Proces</option>
      <option>A</option>
      <option>B</option>
      </select>
      </div>
      <button class="btn btn-thread">Add Sub-thread</button>
      <div class="last_texarea"> 
      <label for="interpretation1">Sub Interpretation 1</label>
      <textarea id="interpretation1" placeholder="Enter Text Here"></textarea>
      </div>
    `;
    }
    else if (asset.asset_content_type === "article") {
        if (asset.asset_title === "Structure your pointers") {
            card.innerHTML += `
        <div class="article_block">
            <label>Title</label>
            <textarea class="article_title" "></textarea>

            <label>Content</label>
            <div class="toolbar">
                <button type="button">File</button>
                <button type="button">Edit</button>
                <button type="button">View</button>
                <button type="button">Insert</button>
                <button type="button">Format</button>
                <button type="button">Tools</button>
                <button type="button">Table</button>
                <button type="button">Help</button>
                
                <button type="button"><img src="../images/icons/arrow-curve-left-right.png" alt=""/></button>
                <button type="button"><img src="../images/icons/arrow-curve-left-down.png" alt=""/></button>
                <button type="button"><img src="../images/icons/arrow-expand-02.png" alt=""/></button>
                <button type="button">Paragraph</button>
            </div>
            <textarea class="article_content" ></textarea>
        </div>
    `;
        }

        else if (asset.asset_title === "4SA Method") {
    card.innerHTML += `
        <div class="method_container">

            <div class="method_block">
                <h6 class="introduction">Introduction</h6>
                <p>The 4SA Method, How to bring a idea into progress ?</p>
                <button class="see_more_btn">See More</button>
            </div>

            <div class="method_block">
                <h6 class="without_introduction">Thread A</h6>
                <p >How are you going to develop your strategy? Which method are you going to use to develop a strategy? What if the project is lengthy?</p>
                <button class="see_more_btn">See More</button>
                <div class="method_block">
                <h6 class="without_introduction">Example 1</h6>
                <p readonly>You have a concept, How will you put it into progress?</p>
            </div>
            </div>

          

        </div>
    `;
}

    }

    cardsContainer.appendChild(card);
});