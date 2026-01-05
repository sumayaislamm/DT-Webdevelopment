
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
    desc.innerHTML = `<p><span class="dec_title">Description: </span>${asset.asset_description}</p>`;
    desc.classList.add("padding")
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
      <h4>Thread A</h4> 
      <textarea placeholder="Enter text for Thread A"></textarea>
      <textarea placeholder="Enter Sub-thread details"></textarea>
      <select><option>Select Category</option></select>
      <select><option>Select Process</option></select>
      <button class="btn">+ Add Sub-thread</button>
      <textarea placeholder="Summary for Thread A"></textarea>
    `;
    }
    else if (asset.asset_content_type === "article") {
        if (asset.asset_title === "Structure your pointers") {
            card.innerHTML += `<textarea placeholder="Write your article here..."></textarea>`;
        } else if (asset.asset_title === "4SA Method") {
            card.innerHTML += `
        <textarea placeholder="Introduction: How to bring an idea into progress?"></textarea>
        <textarea placeholder="Thread A: Strategy development details..."></textarea>
        <textarea placeholder="Example 1: How will you put a concept into progress?"></textarea>
        <button class="btn">See More</button>
      `;
        }
    }

    cardsContainer.appendChild(card);
});