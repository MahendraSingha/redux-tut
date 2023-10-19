import React from 'react'


const User = (props) => {
    // console.log(props.data.city)

    return (
        <div>
            <h1>User Component</h1>
            <h4>{props.data.city}</h4>
        </div>
    )
}

export default User;