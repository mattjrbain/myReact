import React, {Component} from "react";


class Categorie extends Component {

    state = {
        libelle: this.props.details.libelle
    };

    onChangeLibelle = (e) => {
        this.setState({libelle: e.currentTarget.value})
    };

    render() {
        const {details, onDelete, handleUpdate} = this.props;
        return (
                <div className="form-inline justify-content-center" >
                    <div className="form-row">
                        <span className="badge badge-primary pt-2 mb-2 mr-2">ID : {details.id}</span>
                        <div className="input-group mb-2 mr-2">
                            <input className="form-control" value={this.state.libelle}
                                   onChange={this.onChangeLibelle} name="libelle" type="text"/>
                        </div>
                        <button className="btn btn-danger mb-2 mr-2" onClick={() => onDelete(details.id)}>Supprimer
                        </button>
                        <button type="submit" className="btn btn-info mb-2" onClick={() => handleUpdate(details.id, this.state.libelle)}>Modifier</button>
                    </div>
                </div>
        );
    }


}

export default Categorie;