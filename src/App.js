import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown, faImage, faMoneyCheckAlt, faSearchDollar} from '@fortawesome/free-solid-svg-icons'

class App extends Component {
    state = { isLoading: false, items : [

                {
                    "id" :"100",
                    "Title":"sunglasses",
                    "Quantity":"2",
                    "Importance":"Nice to Have"
                },
                {
                    "id" :"200",
                    "Title":"passports",
                    "Quantity":"2",
                    "Importance":"Must Have"
                },
                {
                    "id" :"300",
                    "Title":"wallets",
                    "Quantity":"2",
                    "Importance":"Must Have"
                }
            ]
    }

    removeItem(id){
        console.log(id)
        let updatedItems = [...this.state.items].filter(i => i.id !== id)
        this.setState ({items : updatedItems});
    }

    //todo: setState
    render() {
        const isLoading = this.state.isLoading;
        const allItems = this.state.items;

            if (isLoading)
                return (<div>Loading....</div>)

        let items =
        allItems.map( item =>
            <tr key={item.id}>
                <td>{item.Quantity}</td>
                <td>{item.Title}</td>
                <td>{item.Importance}</td>
                <td><Button className="btn btn-lg btn-success" onClick={() => this.removeItem(item.id)}>    <FontAwesomeIcon icon={faThumbsUp} /> DONE</Button></td>
            </tr>
        ) 
            
        return (
            <div className="container border border-secondary rounded center">

                <div className="row">
                    <div className="col-12">
                        <h4>Pending Items - HJ's Items</h4>
                    </div>
                </div>
                
                <div className="row">
                    <div className=".col-sx-12 center text-center">
                        <Table dark responsive striped bordered hover>
                            <thead>
                                <tr>
                                <th scope="row">Quantity</th>
                                <th>Title</th>
                                <th>Importance</th>
                                <th colSpan="1">Actions</th>
                                </tr>
                            </thead>

                        <tbody>
                            {this.state.items.length === 0 ? <td colSpan="5">All caught up!</td> : items}
                        </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;