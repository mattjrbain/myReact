import React from 'react';
import './index.css';
// import App from './App';
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
          this.setState({categories: resj.data})
        })
        .catch(console.log)
  }

  handleDelete = (id) => {
    const categories = this.state.categories.slice();
    const index = categories.findIndex(categorie => categorie.id === id);

    fetch("http://localhost:5000/categories/" + id, {
      method: "DELETE",
      headers: {
        Accept: "*/*"
      }

    })
        .then(res => res.json())
        .then(() => {
          if (index !== -1) {
            categories.splice(index, 1);
            this.setState({categories: categories});

          } else {
            alert("Déja crée");
          }
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));

  };


  handleAdd = (categorie) => {
    const categories = [...this.state.categories];
    const index = categories.findIndex(
        categories => categories.libelle === categorie.libelle
    );
    fetch("http://localhost:5000/categories", {
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
              return {categories};
            });
          } else {
            alert("Déja crée");
          }
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
  };

  handleUpdate = (id, libelle) => {
    const categories = this.state.categories.slice();
    const index = categories.findIndex(categorie => categorie.id === id);

    fetch("http://localhost:5000/categories/" + id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({libelle})

    })
        .then(res => res.json())
        .then(() => {
          if (index !== -1) {
            // categories.splice(index, 1);
            this.setState({categories: categories});

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
        <div className="main">

            <div className="row justify-content-center">

              <div className="col-6 justify-content-center">
                <h1>{title}</h1>

                <div className="card shadow">
                  <div className="card-body justify-content-center">
                    {this.state.categories.map(categorie => (

                        <Categorie key={categorie.id} details={categorie} onDelete={this.handleDelete}
                                   handleUpdate={this.handleUpdate}/>

                    ))}
                    <CategorieForm onCategorieAdd={this.handleAdd}/>
                  </div>
                </div>

              </div>

            </div>

        </div>
    )
  }
}
export default App;
// ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
