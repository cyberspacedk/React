import React , {Component} from 'react'; 

export default class Avatar extends Component{

state={ image: '', }

// обработчик на инпут с типом file
getUserAvatarHandler = ({target})=>{
    // записываем данные о загружаемом файле 
    const file = target.files[0];
    // записываем в стейт
    this.setState({image: file}); 
}

// обработчик на конопку отправки
sendUserAvatarHandler = ()=>{
    // получаем из стейта аватар
    const {image} = this.state; 

    // создаем на базе конструктора FormData объект
    const formdata = new FormData();
    // наполняем его методом конструктора append
    // 1 - параметр значение атрибута name инпута 
    // 2 - параметр value инпута
    formdata.append('mediafile', image);  

    // путь для загрузки файла
    const url = 'http://localhost:7000/upload';

    // посылаем данные на сервер. 
    fetch(url, {method: 'POST', body: formdata}).then(res=> console.log(res) )
}

render(){  
    return ( 
    <div> 
        <label htmlFor="avatar" 
        style={{'backgroundColor': '#ccc', 'width': '150px'}}>
            LOAD IMAGE
        </label>

        <input  type="file" 
                name="avatar" 
                id="avatar" 
                style={{'display':'none'}} 
                onChange={this.getUserAvatarHandler}
        />

        <button onClick={this.sendUserAvatarHandler}>SEND IMAGE</button>
    </div> 
    )
}
   
}
