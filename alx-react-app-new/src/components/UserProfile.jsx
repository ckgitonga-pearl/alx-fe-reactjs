function UserProfile(props) {
    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}> 
            <h2>{props.name}<span style={{ color: 'blue', fontSize: '10px' }}></span></h2>
            
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
}

export default UserProfile;
