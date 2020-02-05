import React, {Component} from "react";

class CategorieForm extends Component{
    state = {
        newLibelle: ''
    };

    handleChange = (event) => {
        const value = event.currentTarget.value;
        this.setState({ newLibelle: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const id = -1;
        const libelle = this.state.newLibelle;

        this.props.onCategorieAdd({id, libelle});

        this.setState({newLibelle: ""})
    };


    render() {
        return <form onSubmit={this.handleSubmit}>
            <input value={this.state.newLibelle} onChange={this.handleChange} type="text" placeholder="Ajouter une categorie"/>
            <button>Confirmer</button>
        </form>;
    }
}

export default CategorieForm;