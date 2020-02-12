import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div key={this.props.item.id}>
                {this.props.item.quantity} {this.props.item.name}
            </div>
        );
    }
}

export default Item;