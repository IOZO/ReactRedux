import React from 'react';
import '../styles.css'

class Form extends React.Component{

    state = {
        name:'',
        quantity:0
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addArticle(this.state);
        this.setState({name:'',quantity:0});
    }

    render(){
        return(
            <div>
                <h5>{this.props.formTitle}</h5>
                <form onSubmit={this.handleSubmit}>
                <input type="number" placeholder="quantité" className="quantity"
                       value = {this.state.quantity} onChange = {(event)=>this.setState({quantity:event.target.value})} />
                <input type="text" placeholder="article" 
                       value = {this.state.name} onChange = {(event)=>this.setState({name:event.target.value})} />
                <button type="submit" className="btn btn-success">Ajouter</button>
                </form>
            </div>
        );
    }


}

export default Form;