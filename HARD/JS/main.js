let names = [];

function addName() {
  let input = document.getElementById("nameInput");
  
  names.push(input.value);

  input.value = "";

  showNames();
}

function showNames() {
  let list = document.getElementById("list");
  let search = document.getElementById("searchInput").value.toLowerCase();

  list.innerHTML = "";

  for (let i = 0; i < names.length; i++) {

    let li = document.createElement("li");

    if (names[i].toLowerCase() == search && search != "") {
      li.innerHTML = "<span class='highlight'>" + names[i] + "</span>";
    } else {
      li.innerHTML = names[i];
    }

    list.appendChild(li);
  }
}