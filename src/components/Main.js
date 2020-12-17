import React from 'react';
import HeaderWhite from "./HeaderWhite";
import styles from '../css_modules/main.module.css'
import SideBarLeft from "./SideBarLeft";
import Content from "./Content";
import SideBarRight from "./SideBarRight";

const Main = (props) => {

    return (
        <div>
            <HeaderWhite/>
            {/*В контейнер-флюид должна передаваться инфо о бэкграунде (весь зеленый или зелено-белый градиент) */}
            <div className={`container-fluid ${styles[props.bcFluid]}`}>
                <div className='row'>
                    <div className='container-xl'>
                        <div className='row'>
                            <SideBarLeft location={props.location}/>
                            {/*В Content должна передаваться информация о кол-ве занимаемых колонок (7 или 10)*/}
                            <Content colQuantity={props.colQuantity} location={props.location}/>
                            <SideBarRight className={props.isShow}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;