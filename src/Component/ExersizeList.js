import React, {Component} from 'react'
import axios from 'axios'
import Exersize from './Exersize'

export default class CreateUser extends Component{ 
    constructor(props){
        super(props)
        this.state = { 
            exersizes : []
        }
    }

    componentDidMount = () => { 
        axios.get('http://localhost:2999/exersizes')
        .then(res => {
            if(res.data.length > 0) {
                this.setState({
                    exersizes : res.data
                })
            }
        })
    }
    deleteExersize = (id) =>{ 
        axios.delete('http://localhost:2999/exersizes'+id )
        .then(res => console.log(res.data))
        this.setState({
            exersizes : this.state.exersizes.filter(del => del._id !== id)
        })
    } 
    exersizeList() {
        return this.state.exersizes.length > 0 ? this.state.exersizes.map(currentexersize => {
            return <Exersize exersize={currentexersize} deleteExersize={this.deleteExersize} key={currentexersize._id}/>;
          }) : <h4>No Exersizes Yet ...</h4>
        
      } 
    render(){
        return(
            <div>
                <h3>Logged exersizes</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.exersizeList() }
                    </tbody>
                </table>
            </div>
        )
    }
}