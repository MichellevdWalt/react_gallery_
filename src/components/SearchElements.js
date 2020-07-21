import React, {Component} from 'react';
import { withRouter } from "react-router-dom";


//Deals with search input from user
class SearchElements extends Component {
    state = {
        currentSearch: ""
    }
   
    handleSubmit = e => {
        e.preventDefault(); 
        if (this.state.currentSearch !== this.query.value) {
            this.setState({
                currentSearch: this.query.value
            }, ()=>{
                    let path = `/search=${this.state.currentSearch}`;
                    this.props.history.push(path);
                    this.props.onSearch(this.state.currentSearch);
                    this.query.value = "";
                })
        }   
    }
        
    render(){
    return(
        <div>
        <form className= "search-form"  onSubmit={this.handleSubmit }>
            <input 
                type= "text" 
                name= "search" 
                placeholder="Search" 
                className= "search-form" 
                onChange= {this.searchOnChange} 
                ref={(input) => this.query = input}
                />
            <button 
                type= "submit" 
                className= "search-form button">Search</button>
            
        </form>
        </div>
        
    );}
}

export default withRouter(SearchElements);