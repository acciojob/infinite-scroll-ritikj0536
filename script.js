// ✅ Get the list element
const list = document.getElementById("infi-list");

// ✅ Function to add list items
function addItems(count = 2) {
  const currentLength = list.children.length;
  for (let i = 1; i <= count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${currentLength + i}`;
    list.appendChild(li);
  }
}

// ✅ Add initial 10 items
addItems(10);

// ✅ Add more items automatically when scrolled to bottom
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2); // Adds 2 more items
  }
});
