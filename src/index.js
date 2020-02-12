import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Categorie from "./Categorie";
import CategorieForm from "./CategorieForm";
// import {Http2ServerResponse as res} from "node/http2";

class App extends React.Component {

    state = {
        categories: [],
        count: 0
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
                this.setState({ categories: resj.data})
            })
            .catch(console.log)
    }

    handleDelete = (id) => {
        const categories = this.state.categories.slice();
        const index = categories.findIndex(categorie => categorie.id === id);


        categories.splice(index, 1);
        this.setState({categories: categories});
    };

    //Former struggle
    // handleAdd = categorie => {
    //
    //     // let count = this.state.count;
    //     // count += 1;
    //     // categorie.id = count;
    //
    //     // const categories = this.state.categories.slice();
    //     //
    //     // let dejala = categories.filter(function (cat) {
    //     //    return cat.libelle === categorie.libelle;
    //     // });
    //     //
    //     // if (dejala.length === 0){
    //     //     console.log(categories);
    //     //     categories.push(categorie);
    //     //
    //     //     this.setState({count: count});
    //     //
    //     //     this.setState({categories: categories});
    //     // }else {
    //     //     console.log("Existe déjà.");
    //     // }
    //
    //
    //     let json = JSON.stringify(categorie);
    //
    //     let myInit = {
    //         method: 'POST',
    //         mode: 'cors',
    //         cache: 'default',
    //         body: json
    //     };
    //     fetch("http://localhost:5000/categorie", myInit)
    //         .then(res => res.json())
    //         .then((resj) => {
    //             console.log(resj);
    //             this.setState({count: resj.data.length});
    //             // this.setState({categories: resj.data})
    //         })
    //         .catch(console.log)
    // };

    handleAdd = categorie => {
        const categories = [...this.state.categories];
        const index = categories.findIndex(
            categories => categories.libelle === categorie.libelle
        );
        fetch("http://localhost:5000/categorie", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                                     categorie
                                 })
        })
            .then(res => res.json())
            .then(resj => {
                if (index === -1) {
                    categorie.id = resj.data.insertId;
                    categories.push(categorie);
                    this.setState(state => {
                        return { categories };
                    });
                } else {
                    alert("Déja crée");
                }
            })
            .then(data => console.log(data))
            .catch(err => console.log(err));
    };


    render() {
        const title = "Le titre";


        return (
            <div>
                <h1>{title}</h1>
                <ul>
                    {this.state.categories.map(categorie => (
                        <Categorie /*key={categorie}*/ details={categorie} onDelete={this.handleDelete}/>
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
