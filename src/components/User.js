import React from 'react'

function User({userdata}) {
    return (
        <div className="user">
          
            <div className="image">
               <img src={userdata.avatar_url} alt="" />
            </div>

        <table>
            <tbody>
                <tr>
                    <td>Name:{userdata.name} </td>
                    <td>Location: {userdata.location ? userdata.location : "No location found"} </td>
                </tr>
                <tr>
                    <td>Email: {userdata.email ? userdata.email : "No email found" } </td>
                    <td>Followers: {userdata.followers}</td>
                </tr>
                <tr>
                    <td>Repositories: {userdata.public_repos}</td>
                    <td>Repo URL: {userdata.repos_url} </td>
                </tr>
            </tbody>
        </table>

        </div> 
    )
}

export default User
