// eslint-disable-next-line no-unused-vars
import React, {Component} from "react";

function Client(props) {

        const details = props.details;
        const onDelete = props.onDelete;
        //Peut s'écrire:
        // const {details, onDelete} = this.props;

        return (
            <li>
                {details.nom}
                <button onClick={() => onDelete(details.id)}>X</button>
                )
            </li>
        );

}

export default Client;