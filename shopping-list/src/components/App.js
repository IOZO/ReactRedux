import React from 'react';
import Form from './Form'
import ItemList from './ItemList'
import {connect} from 'react-redux' 

class App extends React.Component
{
    state = {
        titreFormulaire: "Ajouter un article",
        articles : []
    };

    addArticle = (article) => {
        this.props.dispatch({type:'ADD_ARTICLE',payload:article});
    }

    render()
    {
        return (
            <div>
                <h3>Liste de courses</h3>
                <Form formTitle={this.state.titreFormulaire} addArticle={this.addArticle} />
                <ItemList articles={this.props.articles}/>
            </div>
        );
    }
} // end class

const mapStateToProps = (store) => {
    return {
        articles:store.articles
    }
}

// export default App;
export default connect(mapStateToProps)(App);