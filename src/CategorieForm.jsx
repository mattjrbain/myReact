import React, {Component} from "react";

class CategorieForm extends Component {
    state = {
        newLibelle: ''
    };

    handleChange = (event) => {
        const value = event.currentTarget.value;
        this.setState({newLibelle: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // const id = -1;
        const libelle = this.state.newLibelle;

        this.props.onCategorieAdd({libelle});

        this.setState({newLibelle: ""})
    };


    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <input className="input-group" name="libelle" id="libelle" value={this.state.newLibelle} onChange={this.handleChange} type="text"
                       placeholder="Ajouter une categorie"/>
                <button className="btn btn-primary mt-2">Confirmer</button>
            </div>
        </form>;
    }
}

export default CategorieForm;