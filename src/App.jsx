function Header() {
  return (<h1>Simple React Application</h1>);
}

function Content(props) {
  return(<p style={{color: props.color}}>{props.text}</p>);
}

function Footer(){
  return(<h1>Created by me, of course.</h1>)
}
function App() {

  return (
    <>
    <Header />
    <Content color="blue" text="This is my first React App!" />
    <Content color="red" text="Fun times!!" />
    <Content color="green" text="I understand it in due time!" />
    <Footer />
   
    </>
  )
}

export default App
