const contentEditor = document.getElementById("content-editor");
const saveButton = document.getElementById("save");
const editButton = document.getElementById("edit");
const deleteButton = document.getElementById("delete");

// Load content from local storage if it exists
contentEditor.value = localStorage.getItem("content") || "";

// Save content to local storage
function saveContent() {
    const content = contentEditor.value;
    localStorage.setItem("content", content);
    alert("Content saved!");
}

// Enable or disable editing
function toggleEditing() {
    contentEditor.readOnly = !contentEditor.readOnly;
}

// Delete content
function deleteContent() {
    if (confirm("Are you sure you want to delete the content?")) {
        contentEditor.value = "";
        localStorage.removeItem("content");
        alert("Content deleted!");
    }
}

// Event listeners for buttons
saveButton.addEventListener("click", saveContent);
editButton.addEventListener("click", toggleEditing);
deleteButton.addEventListener("click", deleteContent);

// By default, the content editor is read-only
contentEditor.readOnly = true;
