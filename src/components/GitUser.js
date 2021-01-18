import React from 'react'

function GitUser({results,total_count}) {
    return (
        <div className="profile-github">
            <h2 className="text-primary my-1">
                <i className="fab fa-github"></i> Github Users
            </h2>
            <h3>Total count: {total_count}</h3>
            {results.map(user=>{
                return(
                        <div key={user.id} className="repo bg-white p-1 my-1">
                            <div className="ui card">
                                    <div>
                                    <div className="content">
                                        <div className="center aligned header">{user.login}</div>
                                        <div className="center aligned author">
                                            <img className="ui avatar image" src={user.avatar_url}/>
                                        </div>
                                        <div className="meta center aligned m">
                                            <span><a href={user.html_url}  target="_blank">{user.html_url}</a></span>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                )
            })}
                
        </div>
    )
}

export default GitUser
