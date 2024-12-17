 let isEditing = false;

const editButton = document.getElementById("editNameButton");
const nameLabel = document.getElementById("nameLabel");

editButton.addEventListener("click", () => { //箭頭函式"()=>"可以省略 function 關鍵字
	if (isEditing) {
	// save狀態，保存輸入框的內容
		const inputField = document.getElementById("nameInput");
		nameLabel.textContent = inputField.value;
		inputField.remove();
		editButton.textContent = "edit";
	} else {
	// edit狀態，進入編輯模式
		const inputField = document.createElement("input");
		inputField.id = "nameInput";
		inputField.type = "text";
		inputField.value = nameLabel.textContent;
		nameLabel.insertAdjacentElement("afterend", inputField);
		editButton.textContent = "save";
	}
	isEditing = !isEditing; // 切換狀態
});

const addButton = document.getElementById("addMusicButton");
const musicList = document.getElementById("musicList");

addButton.addEventListener("click", () => {
	const form = document.createElement("form");
	form.id = "musicForm";

	const linkInput = document.createElement("input");
	linkInput.type = "url";
	linkInput.placeholder = "Music link";
	linkInput.required = true;

	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.placeholder = "Music name";
	nameInput.required = true;

	const submitButton = document.createElement("button");
	submitButton.type = "submit";
	submitButton.textContent = "Submit";

	form.appendChild(linkInput);
	form.appendChild(nameInput);
	form.appendChild(submitButton);

	addButton.insertAdjacentElement("afterend", form);

	form.addEventListener("submit", () => {
	const musicLink = linkInput.value;
	const musicName = nameInput.value;

	if (musicLink && musicName) {
	const musicItem = document.createElement("div");
	const musicAnchor = document.createElement("a");
	musicAnchor.href = musicLink;
	musicAnchor.target = "_blank";

	const musicNameLabel = document.createElement("label");
    musicNameLabel.textContent = musicName;
    musicNameLabel.classList.add("album-row");

	const musicImage = document.createElement("img");
	musicImage.src = "ytIcon.jpg"; 
	musicImage.alt = musicName;

	musicAnchor.appendChild(musicImage);
	musicItem.appendChild(musicAnchor);
	musicItem.appendChild(musicNameLabel);
	musicList.appendChild(musicItem);

	form.remove(); 
    } else {
    	alert("Music link or Music name isn't filled");
    }
  });
});  