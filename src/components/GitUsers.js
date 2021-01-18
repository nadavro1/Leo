import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { load_users } from '../actions/user';
import mainLogo from'../img/GitHub-Mark-120px-plus.png';
import GitUser from './GitUser';
import Spinner from './layout/spinner.js';
import Pagination from './Pagination';

function GitUsers({load_users,results,total_count,loading}) {
    const [term, setTerm] = useState('');//term for the input
    useEffect(() => {
        const timeoutId= setTimeout(() => {//only will start the search function after 500 ms 
            if (term) {
                load_users(term);
            }
        }, 500);
        return()=>{
            clearTimeout(timeoutId);//clear timeout when the app is rerendering (like the user press on another key)
        }
    }, [term])//every first render and when the term is changed the app will be rerendered
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = results.slice(indexOfFirstUser, indexOfLastUser);
     // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <Fragment>
            <div className="profile-grid my-1">
                <div className="profile-top bg-primary p-2">
                    <img
                    className="round-img my-1"
                    src={mainLogo}
                    alt="avatar"
                    />
                    <h1 className="large">Welcome!</h1>
                </div>
                <div className="ui form">
                    <div className="field">
                        <label>Enter Search Term..</label>
                        <input
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            className="input"
                        />
                    </div>
                </div>
                {loading?
                    <Spinner/>:
                    (
                        <GitUser results={currentUsers} total_count={total_count}/>
                    )
                }
               
            </div>
            {loading?<div></div>:<Pagination usersPerPage={usersPerPage} total_count={100} paginate={paginate}/>}
        </Fragment>
    )
}

const mapDispatchToProps= state=>{
    return{
        results: Object.values(state.user.users),//Object.values turn the users object into array
        total_count:state.user.total_count,
        loading:state.user.loading
    }
}

export default connect(mapDispatchToProps,{load_users})(GitUsers)
