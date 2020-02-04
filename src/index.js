import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Client from "./Client";
import ClientForm from "./ClientForm";

class App extends React.Component {



    state = {
        clients: [
            {id: 1, nom: "Lior"},
            {id: 2, nom: "Biduke"},
            {id: 3, nom: "Machin"},
        ]
    };

    handleDelete = (id) => {
        const clients = this.state.clients.slice();
        const index = clients.findIndex(client => client.id === id);


        clients.splice(index, 1);
        this.setState({clients: clients});
    };

    handleAdd = client => {
        const clients = this.state.clients.slice();
        clients.push(client);

        this.setState({clients: clients});
    };


    render() {
        const title = "Le titre";


        return (
            <div>
                <h1>{title}</h1>
                <ul>
                    {this.state.clients.map(client => (
                        <Client details={client} onDelete={this.handleDelete}/>
                    ))}
                </ul>
                <ClientForm onClientAdd={this.handleAdd}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
