import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Exersize extends Component{ 
    render() {
        return (
            <tr>
                <td>{this.props.exersize.username}</td>
                <td>{this.props.exersize.description}</td>
                <td>{this.props.exersize.duration}</td>
                <td>{this.props.exersize.date.substring(0,10)}</td>
                <td>
                    <Link to={"/edit/"+this.props.exersize._id}>edit</Link>
                    |<a href="#" onClick={() => { this.props.deleteExersize(this.props.exersize._id) }}>delete</a>
                </td>
          </tr>
        )
    }
}