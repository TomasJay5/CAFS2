// Parašykite funkciją getPosts, kuri gražina Promise, kuriame yra išgaunami post'ai iš https://jsonplaceholder.typicode.com/posts panaudojant vieną iš galimų AJAX būdų: XMLHttpRequest, fetch, jQuery, axios.

// Užsibaigus Promise atvaizduokite gautus duomenys HTML lentelėje.

// Papildykite prieš tai darytą užduotį: panaudojant gautą userId parodykite vartotojo vardą šalia "post" informacijos.

// https://gist.github.com/coryhouse/68db344b82b51b99b1063ba9e5071d0e

async function getPosts() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

async function showAllPosts() {
    let posts = await getPosts();
    let users = await getUsers();
    let postTable = document.querySelector('#table-posts');

    if (!posts || !users) {
        let createTr = document.createElement('tr');
        createTr.textContent = 'error from server'
        postTable.appendChild(createTr)

    } else {
        for (let post of posts) {
            let createTr = document.createElement('tr');
            let createTdID = document.createElement('td')
            let createTdUserName = document.createElement('td')
            let createTdTitle = document.createElement('td')

            for (const user of users) {
                if (post.userId == user.id) {
                    createTdID.textContent = post.id
                    createTdUserName.textContent = user.name
                    createTdTitle.textContent = post.title
                }
            }

            createTr.appendChild(createTdID)
            createTr.appendChild(createTdUserName)
            createTr.appendChild(createTdTitle)
            postTable.appendChild(createTr)
        }


    }
}



showAllPosts()