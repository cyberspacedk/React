import React, { Component, Fragment } from "react";
import ListOfNews from '../ListOfNews/Listofnews';
import Error from '../Error/Error';
import Button from '../Button/Button'
import Pagination from '../Pagination/Pagination';


import "./App.css";

class App extends Component {
  state = {
    news: [],
    error: false, 
    currentPage: 1,
    totalPage: null,
    prevButton: false,
    nextButton: false,
  };
 

  componentDidMount(){
    // this.getNews();  
    this.getAllNews(this.state.currentPage);
    this.checkControls();  
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
          error: false,
        })
      })  
      .catch(err=> this.setState({
        error: true,
      }))

  };

  getAllNews(counter){ 
    fetch(`http://content.guardianapis.com/search?page=${counter}&api-key=test`)
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
          totalPage : data.response.pages,
        })

      })
      .catch(()=> this.setState({
        error: true,
    }))
}

  handleCurrentPage = async({target})=>{
  

  await this.setState({
    currentPage: target.value,
    error: false,
  })

  if(this.state.currentPage === '' || this.state.currentPage < 1 || this.state.currentPage === this.state.totalPage ) return;

  this.getAllNews(Number(target.value));

}

  handleNavigation = async ({target})=>{ 
  if(target.nodeName !== 'BUTTON') return; 
  
  if(target.dataset.nav === 'prev'){ 
    await this.setState((prevState)=>({
      currentPage: prevState.currentPage - 1,
    }))
  }
  if(target.dataset.nav === 'next'){ 
    await this.setState((prevState)=>({
      currentPage: prevState.currentPage + 1,
    }))
  }
  this.getAllNews(this.state.currentPage);
  this.checkControls();  
}

  checkControls =()=>{ 
    (this.state.currentPage <=1 ) ? this.setState({ prevButton: true}) : this.setState({ prevButton: false });
    (this.state.currentPage === this.state.totalPage) ? this.setState({ nextButton: true}) : this.setState({ nextButton: false });
  }
  
  getFullText = ({target}) => {
    const extendURL = this.state.news.find(elem=> elem.id == target.dataset.id).apiUrl; 

    fetch(extendURL+'?show-blocks=body&api-key=test')
      .then(response=> response.json())
      .then(data=> {   
        const fullContent = data.response.content.blocks.body[0].bodyTextSummary;
        const sameArticle = this.state.news.map(elem => elem.id == target.dataset.id ? {...elem, fullText : fullContent } : elem);
         
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


  render() {

    const {news, error, currentPage, totalPage, prevButton,nextButton} = this.state;


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
        <Pagination   currentPage={currentPage} 
                      totalPage={totalPage} 
                      handleCurrentPage={this.handleCurrentPage}
                      handleNavigation={this.handleNavigation}
                      prevButton={prevButton}
                      nextButton={nextButton}
        />
      </Fragment>
    );
  }
}

export default App;
