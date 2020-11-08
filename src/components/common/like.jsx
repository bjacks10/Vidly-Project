import React, { Component } from 'react';

//Input: Liked: boolean
//Output: onClick
//could turn into a stateless functional component
//when turning into a sfc get rid of mentions of 'this' keyword when it comes to props
//and pass props in as a variable of the component i.e const Like = (props) => {...}
class Like extends Component {
    render() { 
        let classes = "fa fa-heart";
        if(!this.props.liked) classes += "-o";
        return ( 
            <i onClick={this.props.onClick} style={{cursor: 'pointer'}} className={classes} aria-hidden="true"></i>
         );
    }
}
 
export default Like;