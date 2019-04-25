import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getId} from '../index'

class Request extends Component {

    state = {
        id : 0
    }

    render() {
        return (
            <div>
                search:<input type="number" name="id" onChange={ (e) => {
                    this.setState({
                        [e.target.name] : e.target.value
                    })
                }
                }/>
                <button onClick={() => this.props.search(this.state.id)}>submit</button>
                <hr/>
                <h1>result</h1>
                id:{this.props.value.id}<br/>
                name:{this.props.value.name}<br />
                surname:{this.props.value.surname}
                 
            </div>

        )
    }
}

export const mapStateToProps = (state) => {
    return {
        value : state.std
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        search : (value) => dispatch( getId(value)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Request)
