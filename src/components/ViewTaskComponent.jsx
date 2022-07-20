import React, { Component } from 'react'
import TaskService from '../services/TaskService'

class ViewTaskComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            task: {}
        }
    }

    componentDidMount(){
        TaskService.getTaskById(this.state.id).then( res => {
            this.setState({task: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Task Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Task Title: </label>
                            <div> { this.state.task.title }</div>
                        </div>
                        <div className = "row">
                            <label> Task Created: </label>
                            <div> { this.state.task.created }</div>
                        </div>
                        <div className = "row">
                            <label> Task IsCompleted ID: </label>
                            <div> { this.state.task.completed }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewTaskComponent