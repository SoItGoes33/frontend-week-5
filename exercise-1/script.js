function addListItem() {
    var listitem = document.getElementById("listitem").value;
    var node = document.createElement("li");
    var textnode = document.createTextNode(listitem);
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    node.appendChild(checkbox);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
    event.preventDefault();
    document.getElementById("listitem").value = '';
}