import React, {Component} from 'react';
import style from "../App.css"
import "../App.css"
class Header extends Component {
    constructor(props) {
        super(props);
        this.ref1 = React.createRef();
        this.ref2 = React.createRef();
        this.open_menu = this.open_menu.bind(this);
        this.close_menu = this.close_menu.bind(this);
    }
    open_menu(){
        const ref1 = this.ref1.current;
        const ref2 = this.ref2.current;
        ref1.style.transform = "scaleY(-1)";
        ref1.style.opacity = "0";
        ref1.style.transition = "0.5s";
        ref1.style.visibility = "hidden";
        const nav = document.getElementById("nav1");
        nav.style.visibility = "visible";
        nav.style.opacity = "1";
        nav.style.transition = "0.8s";
        nav.style.transform = "translateX(-320px)";
        nav.style.zIndex = "1";
        ref2.style.opacity = "1";
        ref2.style.visibility = "visible";
        ref2.style.transform = "scaleY(-1)";
        ref2.style.transition = "0.8s";

     }
     close_menu(){
         const ref1 = this.ref1.current;
         const ref2 = this.ref2.current;
         ref2.style.transform = "scaleY(1)";
         ref2.style.opacity = "0";
         ref2.style.transition = "0.5s";
         ref2.style.visibility = "hidden";
         const nav = document.getElementById("nav1");
         nav.style.visibility = "hidden";
         nav.style.opacity = "0";
         nav.style.transition = "0.8s";
         nav.style.transform = "translateX(0)";
         nav.style.zIndex = "-3";
         ref1.style.opacity = "1";
         ref1.style.visibility = "visible";
         ref1.style.transform = "scaleY(1)";
         ref1.style.transition = "0.8s";
     }
    render() {
        return (
            <div>
             <div className="header">
                    <div className="logo" style={{position: "absolute"}}>
                        <img style={style.logo1} src="../images/facebook.png" alt="" />
                    </div>
                    <button className="buton" onClick={this.open_menu} type="button"><img ref={this.ref1} className="menu"
                                                                                src={require('../images/menu.png')}/>
                    </button>
                    <button className="buton" onClick={this.close_menu} type="button" style={{visibility: "hidden"}}><img ref={this.ref2} style={{color: "aqua"}} className="menu" src={require('../images/x.png')}/>
                    </button>
              </div>
            </div>
        );
    }
}

export default Header;