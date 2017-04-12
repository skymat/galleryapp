class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="page">Main Page
        { /* HEADER */ }
        <Header></Header>{ /* //HEADER */ }
        { /* HOME */ }
        <MainContent data={this.props.data}></MainContent>{ /* //HOME */ }
      </div>
      );
  }
}

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header> Header
        { /* MENU BLOCK */ }
        <div className="menu_block">
          { /* CONTAINER */ }
          <div className="container clearfix">
            { /* LOGO */ }
            <div className="logo pull-left">
              <a href="/"><span className="b1">w</span><span className="b2">h</span><span className="b3">i</span><span className="b4">t</span><span className="b5">e</span> <span className="b4">box</span></a>
            </div>{ /* //LOGO */ }
          </div>{ /* //MENU BLOCK */ }
        </div>{ /* //CONTAINER */ }
      </header>
      );
  }
}

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      slideSelected: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({ slideSelected : index });
  }

  render() {
    return (
      <section id="home" className="padbot0">
        <TopSlider data={this.props.data} selected={this.state.slideSelected}></TopSlider>
        <Carousel data={this.props.data} handleClick={this.handleClick} selected={this.state.slideSelected}></Carousel>
      </section>
      );
  }
}

class TopSlider extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="flexslider top_slider">
        <ul className="slides">
          {this.props.data.map(function(slide, index){
                return <Slide index={index+1} title1={slide.title1} title2={slide.title2} title3={slide.title3} title4={slide.title4}
                        isActive={this.props.selected == index+1} 
                        />;
          }, this)}
        </ul>
      </div>
      );
  }
}

class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.index = props.index;
    this.slideIndex = "slide"+this.index;
  }

  render() {
    var classN = this.props.isActive ? this.slideIndex + " flex-active-slide":this.slideIndex;
    var classtitles = [
      {
        title1:"title1 captionDelay2 FromTop",
        title2:"title2 captionDelay4 FromTop",
        title3:"title3 captionDelay6 FromTop",
        title4:"title4 captionDelay7 FromTop"
      },
      {
        title1:"title1 captionDelay6 FromLeft",
        title2:"title2 captionDelay4 FromLeft",
        title3:"title3 captionDelay2 FromLeft",
        title4:"title4 captionDelay7 FromLeft"
      },
      {
        title1:"title1 captionDelay1 FromBottom",
        title2:"title2 captionDelay2 FromBottom",
        title3:"title3 captionDelay3 FromBottom",
        title4:"title4 captionDelay5 FromBottom"
      }
    ];
    console.log(this.index-1);
    console.log(this.props);
    return (
      <li className={classN}>
        <div className="flex_caption1">
          <p className={classtitles[this.index-1].title1}>{this.props.title1}</p>
          <p className={classtitles[this.index-1].title2}>{this.props.title2}</p>
          <p className={classtitles[this.index-1].title3}>{this.props.title3}</p>
          <p className={classtitles[this.index-1].title4}>{this.props.title4}</p>
        </div>
      </li>
      );
  }
}

class Carousel extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.props.handleClick(index);
  }
  
  render() {
    return (
      <div id="carousel">
        <ul className="slides">
          {this.props.data.map(function(slide, index){
       return <CarouselSlide index={index+1}
              isActive={this.props.selected == index+1} 
              handleClick={this.props.handleClick}
              />;
      }, this)}
        </ul>
      </div>
      );
  }
}

class CarouselSlide extends React.Component {
  constructor(props) {
    super(props);
    this.index = props.index;
    this.imgSrc = "images/slider/slide"+props.index+"_bg.jpg";
    this.slideIndex = "slide"+this.index;
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.handleClick(this.index);
  }

  render() {
    
    var classActive = this.props.isActive ? "flex-active-slide":"";

    return (
          <li onClick={this.handleClick} data-target={this.slideIndex} className={classActive}><img src={this.imgSrc} alt /></li>
      );
  }
}

var model = [
  {title1 : "Lyon", title2:"Vacances été", title3:"2017",title4:"Vacance au calme dans une petite maison de campagne",imgSlider:"images/slider/slide1_bg.jpg"},
  {title1 : "Bretagne", title2:"weekend de mai", title3:"2016",title4:"Un moment de detente en famille",imgSlider:"images/slider/slide2_bg.jpg"},
  {title1 : "Biarritz", title2:"Anniversaire Théo", title3:"2017",title4:"Surf and fun entre amis",imgSlider:"images/slider/slide3_bg.jpg"}
];

ReactDOM.render(
  <App data={model}></App>,
  document.getElementById('container')
);