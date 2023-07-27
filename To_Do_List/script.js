let date = new Date();

let dateText = date.toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
});

// let time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");
const tasksCardContainer = document.querySelector(".tasks-card-container");
const tasksCardtemplate = document.querySelector(".task-card-template");

const dateTime = document.querySelector(".date-time");
dateTime.innerHTML = dateText;

let taskCount = 0;

function getInputTask() {
  const taskName = newTaskInput.value.trim();
  if (!taskName) {
    error.style.display = "block";
    setTimeout(() => {
      error.style.display = "none";
    }, 2000);
    return;
  } else {
    addTask(taskName);
  }
}

function addTask(taskName) {
  const cardClone = tasksCardtemplate.content.cloneNode(true);
  fillDataInCard(cardClone, taskName);
  tasksCardContainer.appendChild(cardClone);
  newTaskInput.value = "";
  taskCount++;
  displayCount(taskCount);
  let deleteButtons = tasksCardContainer.querySelectorAll(".delete");
  let checkBoxes = tasksCardContainer.querySelectorAll(".task-check");
  deleteTask(deleteButtons);
  completeTask(checkBoxes);
}

function displayCount(taskCount) {
  countValue.innerText = `${taskCount}`;
}

function fillDataInCard(cardClone, taskName) {
  const taskBox = cardClone.querySelector(".taskname");
  taskBox.innerText = `${taskName}`;
}

function deleteTask(deleteButtons) {
  deleteButtons.forEach((button) => {
    button.onclick = () => {
      if (!button.parentNode.querySelector(".task-check").checked) {
        taskCount--;
      }
      button.parentNode.remove();
      displayCount(taskCount);
    };
  });
}

function completeTask(checkBoxes) {
  checkBoxes.forEach((checkBox) => {
    checkBox.onchange = () => {
      checkBox.nextElementSibling.classList.toggle("completed");
      if (checkBox.checked) {
        taskCount--;
      } else {
        taskCount++;
      }
      displayCount(taskCount);
    };
  });
}

addBtn.addEventListener("click", () => {
  getInputTask();
});
