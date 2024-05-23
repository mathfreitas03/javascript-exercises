function getUsuario(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(data => data.json())
    .catch(error => console.log(error))
}

async function carregaUsuario(id) {
    const user = await getUsuario(id);

    const userProfilePic = document.querySelector('.user-profile-pic')
    const userName = document.querySelector('.user-name')
    const userEmail = document.querySelector('.user-email')

    userProfilePic.src = `${user.data.avatar}`;
    userName.innerText = user.data.first_name + ' ' + user.data.last_name;
    userEmail.innerText = user.data.email;
}

carregaUsuario(2)