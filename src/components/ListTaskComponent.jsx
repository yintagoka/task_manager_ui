import React, { Component } from 'react'
import TaskService from '../services/TaskService'
import { withRouter } from 'react-router-dom';
import { format } from 'date-fns';


class ListTaskComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                tasks: []
        }
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.handleChange = this.handleChange.bind(this);        
    }

    deleteTask(id){
        TaskService.deleteTask(id).then( res => {
            this.setState({tasks: this.state.tasks.filter(task => task.id !== id)});
        });
    }
    viewTask(id){
        this.props.history.push(`/view-task/${id}`);
    }
    editTask(id){
        this.props.history.push(`/add-task/${id}`);
    }

    handleChange(task, event) {
        task.completed = event.target.checked;
        TaskService.updateTask(task,task.id);
    }

    componentDidMount(){
        TaskService.getTasks().then((res) => {
            var tasks = res.data
            tasks.forEach(task => task.createdView = format(task.created, 'yyyy/MM/dd kk:mm:ss')
            )
            this.setState({ 
                tasks: tasks
            });
        });
    }

    addTask(){
        this.props.history.push('/add-task/_add');
    }
    
    render() {
        return (
            <div>
                 <h2 className="text-center">Tasks List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTask}> Add Task</button>
                 </div>
                 <br></br>
                 {
                    this.state.tasks.map(
                        task => 
                    <div className='card' key = {task.id}>
                        <div className='card-body'>
                            <h4 className='card-title'>{task.title}</h4>
                            <p className="card-text"><small className="text-muted">{task.createdView}</small></p>
                            <div className='form-check'>
                            <input className="form-check-input" type="checkbox" id={task.id}
                                value={this.state.completed} onChange={(e) => this.handleChange(task, e)}
                                defaultChecked={task.completed}/>
                            <label className="form-check-label" htmlFor={task.id}>Completed</label>
                            </div>
                        </div>
                        
                    </div>
                    )
                 }
                 {/* <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <tbody>
                                {
                                    this.state.tasks.map(
                                        task => 
                                        <tr key = {task.id}>
                                             <td> {task.title} </td>   
                                             <td> {task.created}</td>
                                             <td> {task.completed}</td>
                                             <td>
                                                 <button onClick={ () => this.editTask(task.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTask(task.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewTask(task.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div> */}

            </div>
        )
    }
}

export default withRouter(ListTaskComponent)