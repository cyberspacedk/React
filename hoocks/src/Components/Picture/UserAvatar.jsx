import React , {Component} from 'react';

export default class Avatar extends Component{

state={
    avatar: '',
}

getUserAvatarHandler = ({target})=>{
    const file = target.files[0];
    this.setState({
        avatar: file
    })

}

sendUserAvatarHandler = ()=>{
    // получаем из стейта аватар
    const avatar = this.state.avatar;
    // создаем на базе конструктора FormData объект
    const fd = new FormData();
    // наполняем его 
    fd.append('image', avatar)
    
    const url = 'http://localhost:7000/upload'
    fetch(url, {
        method:'POST',
        body:{
            file:fd
        }
    }).then(res=> console.log(res))
}

render(){ 
 
    return ( 
    <div className="avatar"> 
        <label htmlFor="avatar" 
        style={{ 'backgroundColor': '#ccc', 'width': '150px'}}>
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
