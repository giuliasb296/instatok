//essa função vai exibir nossos ícones
export const exibirIcones = () => {
    console.log("Oi")
    //armazenamos na variável nosso menu inferior
    const bottomNavigation = document.getElementById('bottom_navigation');

    //vamos criar imagens contendo os ícones
    const imgIconHouse = document.createElement('img');
    const imgIconFriends = document.createElement('img');
    const imgIconUser = document.createElement('img');

    //collocar os ícones e atribuir o id
    imgIconHouse.src = '../assets/icons/home.svg';
    imgIconHouse.id = 'iconHouse';
    
    imgIconFriends.src = '../assets/icons/amigos.svg';
    imgIconFriends.id = 'iconFriends';

    imgIconUser.src = '../assets/icons/profile.svg';
    imgIconUser.id = 'iconUser';

    //adicionamos tudo ao bottom
    bottomNavigation.appendChild(imgIconHouse);
    bottomNavigation.appendChild(imgIconFriends);
    bottomNavigation.appendChild(imgIconUser);
}

//função que será chamada quando o ícone for clicado
export const clickIcon = () => {
    //pegamos os ids dos ícones criados anteriormente
    const iconHouseId = document.getElementById('iconHouse');
    const iconFriendsId = document.getElementById('iconFriends');
    const iconUserId = document.getElementById('iconUser')

    //pegamos os ids do nosso htmml
    const home = document.getElementById('home');
    const friends = document.getElementById('friends');
    const user = document.getElementById('user');

    //vamos ouvir os eventos de click nos ícones
    iconHouseId.addEventListener('click', ()=>{
        //removemos a classe dos outros
        iconFriendsId.classList.remove('icon');
        iconUserId.classList.remove('icon');
        //add a classe no atual
        iconHouseId.classList.add('icon');
        //escondemos os elementos
        friends.style.display = 'none';
        user.style.display = 'none';
        //fazemos aparecer o atual 
        home.style.display = 'block'

    })

    //evento no ícone dos amigos
    iconFriendsId.addEventListener('click', ()=>{
        //removemos a classe dos outros
        iconHouseId.classList.remove('icon');
        iconUserId.classList.remove('icon');
        //add a classe no atual
        iconFriendsId.classList.add('icon');
        //escondemos os elementos
        home.style.display = 'none';
        user.style.display = 'none';
        //fazemos aparecer o atual 
        friends.style.display = 'block'

    })

     //evento no ícone de usuário
     iconUserId.addEventListener('click', ()=>{
        //removemos a classe dos outros
        iconHouseId.classList.remove('icon');
        iconFriendsId.classList.remove('icon');
        //add a classe no atual
        iconUserId.classList.add('icon');
        //escondemos os elementos
        home.style.display = 'none';
        friends.style.display = 'none';
        //fazemos aparecer o atual 
        user.style.display = 'block'

    })
}