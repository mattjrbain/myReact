import React, {Component} from 'react';
import Select from "react-select";

class Search extends Component {


    state = {
        categories: [],
        selectedOption: null
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
                this.setState({categories: this.changeKeys(resj.data)});
                this.setState({selectedOption: this.state.categories[0]})
            })
            .catch(console.log)
    }

    handleChange = selectedOption => {
        this.setState({selectedOption});
        console.log(`Option selected:`, selectedOption);
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

        const {categories, selectedOption} = this.state;

        return (
            <div>
                <p>Coucou</p>
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={categories}
                />
            </div>
        );
    }
}

export default Search;