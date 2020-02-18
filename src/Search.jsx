import React, {Component} from 'react';
import Select from "react-select";
import Produit from "./Components/Produit";
import Categorie from "./Categorie";
import CategorieForm from "./CategorieForm";

class Search extends Component {


    state = {
        categories: [],
        categoriesForSelect: [],
        selectedOption: null,
        selectionOptionId: null,
        produits: []
    };

    componentDidMount() {
        let myInit = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        };


        fetch("http://localhost:5000/categories", myInit)
            .then(res => res.json())
            .then((resj) => {
                console.log(resj);
                this.setState({categories: resj.data});
                this.setState({categoriesForSelect: this.changeKeys(resj.data)});
                this.setState({selectedOption: this.state.categoriesForSelect[0]});
            })
            .catch(console.log)
    }

    handleChange = selectedOption => {
        this.setState({selectedOption});
        this.setState({selectedOptionId: selectedOption.value});
        console.log(`Option selected:`, selectedOption);
        console.log(selectedOption.value);

        const id = selectedOption.value;
        fetch("http://localhost:5000/categorie/"+id+"/produits", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(resj => {
                if (id !== -1) {
                    this.setState({produits: resj.data});
                    console.log(resj);
                } else {
                    alert("Déja crée");
                }
            })
            .then(data => console.log(data))
            .catch(err => console.log(err));
    };



    changeKeys = (categories) => {
        const newCat = [];
        // eslint-disable-next-line array-callback-return
        categories.map( (cat) => {
           newCat.push({value: cat.id, label: cat.libelle});
        });
        return newCat;
    };

    render() {

        const {categoriesForSelect, selectedOption} = this.state;

        return (
            <div className="row justify-content-center">
                <div className="col-6">
                    <Select
                        className="mt-3"
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={categoriesForSelect}
                    />
                    <div className="card-body justify-content-center">
                        {this.state.produits.map(produit => (

                            <Produit key={produit.id} details={produit} />

                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;