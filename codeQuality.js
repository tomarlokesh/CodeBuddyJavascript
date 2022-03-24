// level {1}

GET_daTA = async () => {

    fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => {
        return response.json();
    })
}

// level {2}

getUsers = async () => {
    let doc = await Promise.all(getUser(), getProfile(), getPosts());

    let user = doc[0];
    let Profile = doc[1];
    let p = doc[2];

    const userProfile = {
        user: user,
        profile: Profile,
        posts: p
    };

    return userProfile;
}


// level {3}

getUsers = (users) => {

    let new_users = users.filter((value, key) => {
        return value.id === key
    })

    console.log(new_users);

}

