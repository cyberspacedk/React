import React from "react";
import DetailsDescription from '../Details/DetailsDescription';
import DetailsHistory from '../Details/DetailsHistory';
import DetailsImage from '../Details/DetailsImage';
import {NavLink, Switch, Route} from 'react-router-dom';

const TeslaModelS = (props) => {
  return (
    <div>
      <h2>Tesla Model S</h2>
      <img src="https://unpluggedperformance.com/wp-content/uploads/2016/11/Unplugged-Performance-Sports-Dynamic-Air-Suspension-Upgrade-Lowering-Kit-Tesla-Model-S-1.jpg" />
      <p>
        Концепт автомобиля был представлен 26 марта 2009 года в городке Хоторн,
        Калифорния. Пятидверный хетчбэк разрабатывается под прежним условным
        обозначением «Whitestar» фирменным филиалом в Детройте. После окончания
        проектно-конструкторских работ фабрика должна производить в Калифорнии
        первоначально 10 000, позже — 25 000 автомобилей модели. Поставка
        автомобилей в США началась 22 июня 2012 года[13]. Изначально
        предлагалось две версии: на 60 и 85 кВт⋅ч, оборудованные одним
        электродвигателем, расположенным на задней оси. Затем, 9 октября 2014
        года, появилась опция с электродвигателями на каждой оси, а уже с 8
        апреля 2015 года компания полностью отказалась от однодвигательной
        комплектации и от 60 кВт⋅ч версии. С этого времени все выпускающиеся
        машины оборудованы двумя электродвигателями, полным приводом и в базовой
        версии оснащаются 70 кВт⋅ч батареей. Стартовая цена начинается от 75 750
        долларов в США. В зависимости от комплектации, без перезарядки
        автомобиль сможет проехать 442, 502 и 480 километров[14]. 12 ноября 2012
        года автомобиль получил награду «Автомобиль года» от американского
        журнала Motor Trend[15]. Поставки моделей S и X в 2015 и 2016
        годах[16][17]: 30 марта 2018 года компания Tesla отозвала около 123 тыс.
        автомобилей серии Model S, которые были выпущены до апреля 2016, для
        замены деталей гидроусилителя руля. Обуславливалось это тем, что болты
        гидроусилителя подвержены коррозии в холодное время года. Такое
        воздействие оказывается из-за соли, которую используют в целях
        предотвращения обледенения на дорогах.
      </p>

      <div className='details'>
        <NavLink to={`${props.match.path}/image`}>Image</NavLink>
        <NavLink to={`${props.match.path}/description`}>Description</NavLink>
        <NavLink to={`${props.match.path}/history`}>History</NavLink>
      </div>

      <Switch>
         
         <Route path={`${props.match.path}/`} exact component={DetailsHistory}/> 
         <Route path={`${props.match.path}/image`} component={DetailsImage}/> 
         <Route path={`${props.match.path}/description`} component={DetailsDescription}/>
         <Route path={`${props.match.path}/history`} component={DetailsHistory}/>

      </Switch>
    </div>
  );
};

export default TeslaModelS;
