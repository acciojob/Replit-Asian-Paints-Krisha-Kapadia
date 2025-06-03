//your JS code here. If required.
const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("Reset");

changeButton.addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  // Reset all blocks to transparent
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => {
    item.style.backgroundColor = "transparent";
  });

  // Change background color of specified block if valid
  const targetBlock = document.getElementById(blockId);
  if (targetBlock) {
    targetBlock.style.backgroundColor = color;
  } else {
    alert("Please enter a valid block ID between 1 and 9.");
  }
});

resetButton.addEventListener("click", () => {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => {
    item.style.backgroundColor = "transparent";
  });
});
