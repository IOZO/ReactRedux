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

        console.log(this);
        console.log(this.state);

        let oldarticles = this.state.articles;
        article.id = Date.now();
        let newArticles = [...oldarticles,article];
        this.setState({articles: newArticles});
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