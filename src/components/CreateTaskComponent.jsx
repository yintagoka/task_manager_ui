import React, { Component } from 'react'
import TaskService from '../services/TaskService';

class CreateTaskComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            title: '',
            created: '',
            completed: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeIsCompletedHandler = this.changeIsCompletedHandler.bind(this);
        this.saveOrUpdateTask = this.saveOrUpdateTask.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            TaskService.getTaskById(this.state.id).then( (res) =>{
                let task = res.data;
                this.setState({title: task.title,
                    created: task.created,
                    completed : task.completed
                });
            });
        }        
    }
    saveOrUpdateTask = (e) => {
        e.preventDefault();
        let task = {title: this.state.title, created: this.state.created, completed: this.state.completed};
        console.log('task => ' + JSON.stringify(task));

        // step 5
        if(this.state.id === '_add'){
            TaskService.createTask(task).then(res =>{
                this.props.history.push('/tasks');
            });
        }else{
            TaskService.updateTask(task, this.state.id).then( res => {
                this.props.history.push('/tasks');
            });
        }
    }
    
    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeIsCompletedHandler= (event) => {
        this.setState({completed: event.target.checked});
    }

    cancel(){
        this.props.history.push('/tasks');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Task</h3>
        }else{
            return <h3 className="text-center">Update Task</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" 
                                                value={this.state.completed} onChange={this.changeIsCompletedHandler}/>
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                            IsCompleted
                                            </label>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateTask}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateTaskComponent