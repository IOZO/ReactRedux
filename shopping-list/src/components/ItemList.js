import React from 'react';
import Article from './Article';

class ItemList extends React.Component {

    render(){
        return (
            <div>
                <h5>Liste de courses</h5>
                {this.props.articles.map((article) =>
                    <Article data={article} key={article.id} />
                )}
                
            </div>
        );
    }
}

export default ItemList;