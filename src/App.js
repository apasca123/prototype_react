import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import SlideShow from "./components/SlideShow";
import './slideshow.css'
import Header from "./components/Header";
import React, {Component} from "react";
import $ from "jquery";

const data = [{
    id: 0,
    header: 'Gluten-free Bicycle',
    body: 'Chillwave knausgaard chambray flannel tumblr, narwhal microdosing blog...',
    colour: '#242846',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc1.jpg'
}, {
    id: 1,
    header: 'Post-ironic Disrupt',
    body: 'Swag biodiesel disrupt retro fashion, salvia food truck kitsch wolf DIY...',
    colour: '#ba9077',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc2.jpg'
}, {
    id: 2,
    header: 'Lumber-Sexual Roof Party ',
    body: 'Flexitarian 3 wolf moon cliche, migas scenester street art...',
    colour: '#1ABC9C',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc3.jpg'
}, {
    id: 3,
    header: 'Vegan hoodie trust fund',
    body: 'Farm-to-table tousled try-hard, normcore ethical tilde iPhone...',
    colour: '#C0392B',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc4.jpg'
}, {
    id: 4,
    header: 'cliche craft beer',
    body: 'Tote bag flannel normcore polaroid +1. Quinoa actually 90s sustainable...',
    colour: '#513B56',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc5.jpg'
}];

class App extends Component{
  componentDidMount() {
      $("#middle").click(function() {
          $('html,body').animate({
              scrollTop: $("#section2").offset().top},'slow');
      });
      $(function() {
          $(window).scroll(function () {
              var scrollact = $(window).scrollTop();
              $("#fade").css({
                  opacity: function() {
                      var elementHeight = $(this).height(),
                          opacity = 1 - ((elementHeight - scrollact) / elementHeight);
                      return opacity;
                  }
              });
              if(scrollact >=300){
                  $(".sec_nav").css({"opacity":"0"});
                  $(".sec_nav").css({"transition":"0.8s"});
                  $(".logo img").css({"transform": "translateY(-130px)"});
                  $(".logo img").css({"transition": "1s"});
              }
              else if(scrollact <=300){
                  $(".sec_nav").css({"opacity":"1"});
                  $(".sec_nav").css({"transition":"0.8s"});
                  $(".menu-it").css({"margin-top": "40px"});
                  $(".logo img").css({"transform": "translateY(+130px)"});
                  $(".logo img").css({"transition": "1s"});
              }
          })
      })
  }

    render() {
      return (
          <div>
              <div className="section1">
                  <div className="background"></div>
                  <div className="fade" id="fade"> </div>
                  <Nav/>
              </div>
              <div className="section2">
                  <SlideShow className='h-screen w-full' data={data}/>
              </div>
          </div>
      );
  }
}

export default App;
