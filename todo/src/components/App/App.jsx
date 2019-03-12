import React, { Component } from "react";
import "./app.css"; 
import Header from "../Header/Header";
import Create from "../Create/Create";
import List from "../List/List";
import Status from '../Status/Status'; 
import Nav from '../Nav/Nav';
import {Switch, Route} from 'react-router-dom';



{
  /* 
1) Пишемо текст в інпуті
2) При кліку на Submit створюється нова задача і відображається на екрані
3) При кліку на кнопку DELETE задача видаляється
4) При кліку на кнопку EDIT в задачі зявляється інпут для редагування
5) Якщо в режиммі редагування натискаємо на CANCEL інпут пропадає і залишається невідредагований текст
6) При кліку на кнопку SAVE задача редагується

Додатково

1) Стаорити 3 кнопки All Complite Uncomplite
2) При кліку на текст задачі він перекреслюється і задача вважається виконаною
3) Кнопка All показує всі задачі
4) Кнопка Complite показує задачі які виконані
5) Кнопка Uncomplite показує задачі що невиконані
Collapse
*/
}

export default class App extends Component {
	
  state = {
    text: "",
		todolist: [], 
		editInput: '',
		filter: null,
  };

  createNote = ({ target }) => { 
    this.setState({
      text: target.value
    });
	};
 
	submitForm = (evt) => {
		evt.preventDefault();  
		if(!this.state.text) return; 

		const item= {
			id: Date.now(),
			text: this.state.text,
			edit: false, 
			complete: false,
		} 
		this.setState((prevState) => ({
			todolist : [...prevState.todolist, item], 
			text: "",
		}));
	};

	editNote = ({target}) => {   
	this.setState({
		editInput : target.value,
	})
	}

	saveNote = ({target}) => {
		this.setState((prevState)=> ({ 
			todolist : prevState.todolist.map(elem => elem.id == target.dataset.id ? {...elem , edit : false, text: prevState.editInput} : elem ), 
	})) 
	}	

	deleteItem = ({target}) => {   
		this.setState( (prevState)=> ({
			todolist : prevState.todolist.filter(elem => String(elem.id) !== String(target.dataset.id))
		}))
	} 

	editMode =({target})=>{   
		this.setState((prevState)=> ({
				todolist : prevState.todolist.map(elem => elem.id == target.dataset.id ? {...elem , edit : true} : elem ),
				editInput :  prevState.todolist.find(elem => elem.id == target.dataset.id).text,
		}))  
	}
 
	cancelEdit =({target})=>{ 
		this.setState((prevState)=> ({
			todolist : prevState.todolist.map(elem => elem.id == target.dataset.id   ?  {...elem , edit : false}  : elem ), 
	}))  
	}

	doneItem = ({target})=>{ 
	this.setState( {
		todolist : this.state.todolist.map(elem => elem.id == target.dataset.id ? {...elem, complete : !elem.complete} : elem)
		})
	}
	showAllItem =()=>{
		this.setState({
			filter:  null,
		})
	}

	showDoneItem =()=>{ 
		this.setState({
			filter:  true,
		})
	}
	showActiveItem =()=>{ 
		this.setState({
			filter:  false,
		})
	}

  render() {
    const { text, todolist , editInput, filter} = this.state;

    return (
      <div className="todo-wrapper">

        <Header />
				<Nav />
				<Status showDoneItem={this.showDoneItem}
								showAllItem={this.showAllItem}
								showActiveItem={this.showActiveItem}
								/>

        <Create text={text}
								submitForm={this.submitForm}
								createNote={this.createNote}
        />
				
        <Switch>
				<Route path='/' exact render={()=> <List todolist={todolist} 
																											deleteItem={this.deleteItem}
																											editMode={this.editMode}
																											cancelEdit={this.cancelEdit} 
																											editNote={this.editNote}
																											saveNote={this.saveNote}
																											editInput={editInput}
																											doneItem={this.doneItem}
																											 />} /> 

         <Route path='/all'  render={()=> <List todolist={todolist} 
																											deleteItem={this.deleteItem}
																											editMode={this.editMode}
																											cancelEdit={this.cancelEdit} 
																											editNote={this.editNote}
																											saveNote={this.saveNote}
																											editInput={editInput}
																											doneItem={this.doneItem}
																											filter={'null'} />} /> 
  
         <Route path='/done' render={()=> <List todolist={todolist} 
																											deleteItem={this.deleteItem}
																											editMode={this.editMode}
																											cancelEdit={this.cancelEdit} 
																											editNote={this.editNote}
																											saveNote={this.saveNote}
																											editInput={editInput}
																											doneItem={this.doneItem}
																											filter={true} />} /> 

         <Route path='/in-progress' render={()=> <List todolist={todolist} 
																											deleteItem={this.deleteItem}
																											editMode={this.editMode}
																											cancelEdit={this.cancelEdit} 
																											editNote={this.editNote}
																											saveNote={this.saveNote}
																											editInput={editInput}
																											doneItem={this.doneItem}
																											filter={false} />} />  
        </Switch>

			 

				 
      </div> 
    );
  }
}
