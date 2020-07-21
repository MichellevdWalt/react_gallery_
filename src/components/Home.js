//to do
//loading

import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config/config.js';
import { withRouter } from "react-router-dom";

import PhotoConstructor from './PhotoConstructor';
import SearchElements from "./SearchElements";
import Categories from "./Categories";
import '../index.css'; 
import cornerL from "./images/corner_left.png";
import cornerR from "./images/corner_right.png";


class Home extends Component {
  state = {
    photos: [],
    loading: true,
    search: ""
  }

componentDidUpdate(prevState) {
  if (this.state.search !== this.props.search) {
  this.setState({
   search: this.props.search,
   loading: true
  }, ()=>{
    this.performSearch(this.state.search)
  })   
 }
}

componentDidMount(){
  if (this.state.search !== this.props.search) {
    if(this.props.search !== undefined){
      this.setState({
      search: this.props.search,
      loading: true
      }, ()=>{
    this.performSearch(this.state.search)
  })   
 }else{
   this.props.history.push('/search="cats"')
 }}
}

//Search flikr API and return array of photo information.
performSearch = (query = "cats") => {
    
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1&tags=${query}`)
  .then(response => {
    this.setState({
    photos: response.data.photos.photo,
    search: query,
    loading: false
  })
  })
  .catch(error => {
  console.log('Woops', error)
  })
  }

//If statements deal with loading state and No Results Found.
  render(){
    if(this.state.loading){
      return(
        <div className= "container">
           <img src={cornerL} id="cornerL" alt="decor"></img>
       <img src={cornerR} id="cornerR" alt="decor"></img>
       <SearchElements onSearch={this.performSearch} search= {this.state.search}/>
       <Categories />
       <h1>Loading...</h1>
        </div>
      )}else if(this.state.photos.length === 0){
      return(
        <div className= "container">
           <img src={cornerL} id="cornerL" alt=""></img>
       <img src={cornerR} id="cornerR" alt=""></img>
       <SearchElements onSearch={this.performSearch} search= {this.state.search}/>
       <Categories />
       <h1>No Results Found</h1>
        </div>
      )}else{
    return (
      <div className= "container">
       <img src={cornerL} id="cornerL" alt=""></img>
       <img src={cornerR} id="cornerR" alt=""></img>
       <SearchElements onSearch={this.performSearch} search= {this.state.search}/>
       <Categories />
       <PhotoConstructor data={this.state.photos} />
      </div>
    );
  }}}

  export default withRouter(Home);