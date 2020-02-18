import React, {Component} from 'react';

class Produit extends Component {



    render() {
        const {details} = this.props;
        return (
            <div>
                <strong>{details.name}</strong>
            </div>
        );
    }
}

export default Produit;