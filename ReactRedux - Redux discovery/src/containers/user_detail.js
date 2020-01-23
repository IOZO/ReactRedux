import React, { Component } from 'react'
import {connect} from 'react-redux'

class UserDetail extends Component {
    render() {
        const {myActiveUser} = this.props;

        if(!myActiveUser)
        {
            return(
                <div>
                    Selectionnez un utilisateur pour commencer !
                </div>
            )
        }
        
        return (
            <div>
                <h3>Detail de {myActiveUser.name}</h3>
                <ul>
                    <li>Id : {myActiveUser.id}</li>
                    <li>Role : {myActiveUser.role}</li>
                    <li>Actif : {myActiveUser.active}</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myActiveUser : state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail);
