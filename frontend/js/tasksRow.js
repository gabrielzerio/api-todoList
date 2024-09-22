const createElement = (tag, innerText = "", innerHTML = "", classe = "") => {
  const element = document.createElement(tag);
  if (classe) {
    element.classList.add(classe);
  }
  if (innerText) {
    element.innerText = innerText;
  }
  if (innerHTML) {
    element.innerHTML = innerHTML;
  }
  return element;
};
const createSelect = (value) => {
  const options = `
  <option value="pendente">pendente</option>
  <option value="em andamento">em andamento</option>
  <option value="concluída">concluída</option>
  `;
  const select = createElement("select", '', options);
  select.value = value;
  return select;
};

const createRow = (task) => {
  const { id, title, created_at, status } = task;

  const tr = createElement("tr");
  const tdTitle = createElement("td", title);
  const tdCreatedAt = createElement("td", formatDate(created_at));
  const tdStatus = createElement("td");
  const tdActions = createElement("td");
  const select = createSelect(status);

  tdStatus.appendChild(select);

  const editButton = createElement("button","",'<span class="material-symbols-outlined">edit</span>',"btn-action");
  const deleteButton = createElement("button","",'<span class="material-symbols-outlined">delete</span>',"btn-action");

  tdActions.appendChild(editButton);
  tdActions.appendChild(deleteButton);
  tr.appendChild(tdTitle);
  tr.appendChild(tdCreatedAt);
  tr.appendChild(tdStatus);
  tr.appendChild(tdActions);
  return tr;
};

const formatDate = (dateUTC) => {
const options = {dateStyle: 'long', timeStyle:'short'}  
const date = new Date(dateUTC).toLocaleString(options);
return date;
}

export default createRow;
