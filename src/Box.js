import React, { Component } from "react";
import './box.css';
class Box extends Component {
    render() {
        return (
            <div className="box">
                <div 
                    style={{
                        height: `${this.props.height}em`,
                        width: `${this.props.width}em`,
                        backgroundColor: `${this.props.backgroundColor}`
                    }}>
                </div>
                <button className="btn" onClick={this.props.removeBox}> Delete </button>
            </div>
        )
    }
}

export default Box;