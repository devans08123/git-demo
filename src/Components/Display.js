function Display({ userData }) {
    return(
        <div>
            <h1>{userData.name}</h1>
            <img src={userData.avatar_url} alt='profile' />
            <a href={userData.html_url} target='blank'>
                <h3>Profile page</h3>
            </a>
            {userData.Location && <h3> Location:{userData.location}</h3>}
            {userData.email && <h3>email:{userData.email}</h3>}
    
        </div>
    )
}

export default Display