const tableContainer = document.querySelector('.container')
const table = document.createElement('table');

const tableThRow = document.createElement('tr');
table.appendChild(tableThRow)

const firstNameTh = document.createElement('th');
firstNameTh.innerHTML = 'Nome';

const lastNameTh = document.createElement('th');
lastNameTh.innerHTML = 'Sobrenome';

const emailTh = document.createElement('th');
emailTh.innerHTML = 'Email';

tableContainer.insertBefore(table, tableContainer.firstChild)
tableThRow.appendChild(firstNameTh)
tableThRow.appendChild(lastNameTh)
tableThRow.appendChild(emailTh)

const tableInfo = document.getElementById('table-info')

const buttonLoad = document.querySelector('.load')

let numPage = 1;

function getLista(numPage){ 
    return  fetch(`https://reqres.in/api/users?page=${numPage}`)
                .then(response => response.json())
                    .catch(err => console.log(err));
}

async function carregarUsuarios(){
    lista = await getLista(numPage)

    for(item of lista.data) {
        const row = document.createElement('tr')
        table.appendChild(row)

        const nameTd = document.createElement('td');
        nameTd.innerHTML = item.first_name;

        row.appendChild(nameTd)

        const surnameTd = document.createElement('td');
        surnameTd.innerHTML = item.last_name;

        row.appendChild(surnameTd)

        const emailTd = document.createElement('td');
        emailTd.innerHTML = item.email;
        row.appendChild(emailTd)
    }

    tableInfo.innerText = `Exibindo ${lista.per_page * (numPage < lista.total_pages? numPage : lista.total_pages)} usuários de ${lista.total}`
}

carregarUsuarios(numPage)

function loadMore() {
    numPage ++;
    carregarUsuarios(numPage)
}

buttonLoad.addEventListener('click', loadMore)