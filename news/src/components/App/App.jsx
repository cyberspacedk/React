import React, { Component, Fragment } from "react";
import ListOfNews from '../ListOfNews/Listofnews';
import Error from '../Error/Error';
import Button from '../Button/Button'


import "./App.css";

class App extends Component {
  state = {
    news: [],
    error: false, 
  };

/*  http://content.guardianapis.com/ search ? api-key=test


    http://content.guardianapis.com/
    small-business-network/2016/feb/22/
    startup-of-the-year-competition-entry-pavillion-at-the-park?show-blocks
    =body &  api-key=test
*/

  componentDidMount(){
    this.getNews();
  }

  getNews = () => {
    const URL = 'http://content.guardianapis.com/search?api-key=test';
    fetch(URL)
      .then(response=> response.json())
      .then(data=> {
        const articles =  data.response.results.map(elem => ({
          id:elem.id,
          webTitle : elem.webTitle,
          apiUrl: elem.apiUrl, 
          toggle : false, 
        }));
        this.setState({
          news: [...articles],
        })
      })  
      .catch(err=> this.setState({
        error: true,
      }))

  };


 
  getFullText = ({target}) => {
    const extendURL = this.state.news.find(elem=> elem.id == target.dataset.id).apiUrl; 

    fetch(extendURL+'?show-blocks=body&api-key=test')
      .then(response=> response.json())
      .then(data=> {   
        const fullContent = data.response.content.blocks.body[0].bodyTextSummary;
        const sameArticle = this.state.news.map(elem => elem.id == target.dataset.id ? {...elem, fullText : fullContent , toggle: !elem.toggle } : elem);
         
        this.setState({
          news : [...sameArticle],
          toggle : !this.state.toggle,
        })

      })
      .catch(err=> this.setState({
        error: true,
      }))

      const copyArr = [...this.state.news].map(elem => ({ ...elem, toggle : false}));
      const show = copyArr.map(elem=> elem.id == target.dataset.id ? {...elem, toggle : true} : elem);
   
      this.setState({
        news : [...show],
      })
  
  }

  // toggle = ({target})=>{

  //   const copyArr = [...this.state.news].map(elem => ({ ...elem, toggle : false}));
  //   const sameArticle = copyArr.map(elem=> elem.id == target.dataset.id ? {...elem, toggle : true} : elem);
 
  //   this.setState({
  //     news : [...sameArticle],
  //   })

  // }

  


  render() {

    const {news, error} = this.state;


    return (
      <Fragment>

        <h1>The Guardians News</h1>
        <hr/>
        <Button refresh={this.getNews}/>
      { error ? 
        <Error />
        :
        <ListOfNews news={news} extend={this.getFullText}/>
      }

      </Fragment>
    );
  }
}

export default App;
