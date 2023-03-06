import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './box.css';

class NewBoxForm extends Component {

    constructor(props) {
        super(props);
        this.state = { height: "", width: "", backgroundColor: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        const newBox = {...this.state, id: uuidv4()}
        this.props.createBox(newBox);
        this.setState({
            height: "",
            width: "",
            backgroundColor: "" 
        })
    }


  render() {
    return (
      <div>
            <form onSubmit={this.handleSubmit} className="form">
                <div>
                    <label htmlFor='height'> Height : </label>
                    <input id='height' type="text" name="height" value={this.state.height} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor='width'> Width : </label>
                    <input id='width' type="text" name='width' value={this.state.width} onChange={this.handleChange} />
                </div>
                <div>

                </div>
                <div>
                    <label htmlFor='backgroundColor'> Color : </label>
                    <input id='backgroundColor' type='text' name='backgroundColor' value={this.state.backgroundColor} onChange={this.handleChange} />
                </div>
                <button>
                    Add New Box
                </button>

            </form>
        
      </div>
    );
  }
}

export default  NewBoxForm;