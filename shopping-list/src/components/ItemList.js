import React from 'react';
import Item from './Item';

class ItemList extends React.Component {

    render(){
        return (
            <div>
                <h5>Liste de courses</h5>
                {this.props.articles.map((article, key) =>
                    <Item item={article} key={article.id} />
                )}
                
            </div>
        );
    }
}

export default ItemList;