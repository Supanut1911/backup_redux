import React , {Component } from 'react'
import {connect} from 'react-redux'

import { updatevaluebyId} from '../index'
class Updatevalue extends Component {

    state = {
        id : 0,
        name : " ",
        surname : " "
    }

    render(){
        return (
            <div>
                Edit mode
                id : <input type="number" name="id" onChange={ (e) => {
                    this.setState({
                        [e.target.name] : e.target.value
                    })
                }}/>

                name : <input type="text" name="name" onChange = { (e) => {
                    this.setState({
                        [e.target.name] : e.target.value
                    })
                }}/>

                surname : <input type="text" name="surname" onChange = { (e) => {
                    this.setState({
                        [e.target.name] : e.target.value
                    })        
                
                }}/>

                <button onClick={() => { this.props.updatenow(this.state.id, this.state);alert('update success')}}>submit</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value : state.std
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatenow: (id,value) => dispatch(updatevaluebyId(id,value))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Updatevalue)