import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getStd} from '../index'

class Home extends Component {

    componentDidMount = () => {
        this.props.getStd()
    }

    renderStd = () => {
        if(this.props.value) {
            return this.props.value.map( (item,index) => {
                return (
                    <li key={index}>{item.id + " " + item.name + " " + item.surname}</li>
                )
            })
        }
    }

    render(){
        return (
            <div>
                <h1>List</h1>
                <hr/>
                <ul>{this.renderStd()}</ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value : state.std
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        getStd : () => dispatch( getStd() )
    }
}




export default connect (mapStateToProps,mapDispatchToProps)(Home)