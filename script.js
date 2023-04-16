/* Mobile menu function */
const hamburgerButton = document.getElementById("hamburger-button");
const hamburgerLinks = document.getElementById("hamburger-links");

hamburgerButton.addEventListener("click", () => {
  hamburgerLinks.classList.toggle("navbar-open");
});

/* Modal */

// const openBtn = document.getElementById("open-modal");
// const closeBtn = document.getElementById("close-modal");

// openBtn.addEventListener("click", () => {
//   document.getElementById("overlay").style.display = "block";
// });

// closeBtn.addEventListener("click", () => {
//   document.getElementById("overlay").style.display = "none";
// });
/* Array and Search*/

let filterInput = document.getElementById("filter-input");
filterInput.addEventListener("keyup", () => {
  let searchValue = document.getElementById("filter-input").value.toLowerCase();
  const listArray = document.querySelectorAll(".list-card");
  for (let i = 0; i < listArray.length; i++) {
    const curentItem = listArray[i].dataset.color;
    const curentMake = listArray[i].dataset.make;

    if (curentItem.includes(searchValue) || curentMake.includes(searchValue)) {
      listArray[i].style.display = "block";
    } else {
      listArray[i].style.display = "none";
    }
  }
});
