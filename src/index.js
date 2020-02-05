import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Categorie from "./Categorie";
import CategorieForm from "./CategorieForm";

class App extends React.Component {



    state = {
        categories: [],
        count: 0
    };

    handleDelete = (id) => {
        const categories = this.state.categories.slice();
        const index = categories.findIndex(categorie => categorie.id === id);


        categories.splice(index, 1);
        this.setState({categories: categories});
    };

    handleAdd = categorie => {
        let count = this.state.count;
        count += 1;
        categorie.id = count;

        const categories = this.state.categories.slice();

        let dejala = categories.filter(function (cat) {
           return cat.libelle === categorie.libelle;
        });

        if (dejala.length === 0){
            console.log(categories);
            categories.push(categorie);

            this.setState({count: count});

            this.setState({categories: categories});
        }else {
            console.log("Existe déjà.");
        }
    };


    render() {
        const title = "Le titre";


        return (
            <div>
                <h1>{title}</h1>
                <ul>
                    {this.state.categories.map(categorie => (
                        <Categorie details={categorie} onDelete={this.handleDelete}/>
                    ))}
                </ul>
                <CategorieForm onCategorieAdd={this.handleAdd}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
