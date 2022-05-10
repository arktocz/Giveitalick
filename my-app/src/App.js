import logo from './logo.svg';
// import './App.css';
import React from 'react'
//import './index.js'


function App() {
  return (
    <div>
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>Žádosti</h1>
     </div>
  
    <div className="container mt-5">
     <div className="row"></div>
      <Page id={1}/>
     </div>
    </div>
  );
}

function Col(props) {
  let className = "col";
  if (props.size) {
      className = className + " " + props.size
  }
  return (
      <div className={className}> {props.children} </div>
  )
}
function TextAreaAsk(props) {
  return(
    <div class="form-outline">
      {/* <label class="form-label" for="textAreaExample">Message</label> */}
      <textarea class="form-control" id="TextAreaAsk" rows="20" placeholder="Obsah vaší žádosti"></textarea>
      
    </div>
  )
  
}



function TableUserData(props){
  
  let request_history = props.request_history.map(
    (item, index) => (
      <Row key={index}>
        <Col>{item.ID_request}</Col>
        <Col>{item.ID_user}</Col>
        <Col>{item.name_user}</Col>
        <Col>{item.ID_TARGET}</Col>
        <Col>{item.name_target}</Col>
        <Col>{item.request_state}</Col>
        <Col>{item.poznamka}</Col>
      </Row>
    )
  )

  return(
    <Row>
      {request_history}
    </Row>
    
  )
}


function Cardcomponent(props) {
  const [request_history, setRequest_history] = React.useState(props.request_history)
  const onAdd= (request_state, poznamka)=>{
    const history=[item.request_history]//dodělat
  }
    
  return(
    
    <Card>
      <CardHeader>
        <Row>
          <Col scope="col">ID-req</Col>
          <Col scope="col">ID_user</Col>
          <Col scope="col">Uživatel</Col>
          <Col scope="col">ID_TARGET</Col>
          <Col scope="col">Target</Col>
          <Col scope="col">Stav schválení</Col>
          <Col scope="col">Poznámka</Col>
        </Row>
      </CardHeader>
      <CardBody>
          <TableUserData request_history={request_history}/>
      </CardBody>
    </Card>
  )
}

function TextAreaRespose(props) {
  return(
    <div class="form-outline margin-top:10">
      {/* <label class="form-label" for="textAreaExample">Message</label> */}
      <textarea class="form-control" id="TextAreaRespose" rows="18" placeholder="Odpověd na žádost"></textarea>
      
    </div>
  )
  
}

function Buttons(props) {
  return(
    <div class="btn-group"  role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"></input>
      <label class="btn btn-outline-primary" for="btnradio1">Schváleno</label>
  
      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"></input>
      <label class="btn btn-outline-primary" for="btnradio2">Nevyřízeno</label>
  
      <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"></input>
      <label class="btn btn-outline-primary" for="btnradio3">Zamítnuto</label>
    </div>
  )
  
}
function Buttons1(props) {
  
  return(
    <div><input type="button" class="btn-check" name="btnradio" id="btnsave" autocomplete="off"></input>
    <label class="btn btn-outline-primary" for="btnsave">Uložit</label></div>
    
    
  )
}






function Row(props) {
  return (
      <div className="row"> {props.children} </div>
  )
}


function CardHeader(props) {
  return (
      <div className="card-header" > { props.children } </div>
      )
}

function CardBody(props) {
  return (
      <div className="card-body" > { props.children } </div>
      )
}



function Textcomponent(props) {
  return(
      <Card>
        <CardHeader>Vaše žádost</CardHeader>
        <CardBody>
            <Row>
                  <Col size="col-md-8">
                      <TextAreaAsk{...props}/>
                  </Col>
                  <Col size="col-md-3">
                    <Row ><Buttons{...props}/></Row>

                    <Row><TextAreaRespose{...props}/></Row>
                    
                  </Col>

            </Row>
            <Row>
                <Col size="col-md-10"></Col>

                <Col size="col-md-1">
                  <Buttons1 onClick={()=>props.onAdd(item.request_state, item.poznamka)}/>
                  {/* dodelat */}
                  
                </Col>
            </Row>
        </CardBody>
      </Card>
  )
  
}
function Tablecomponent(props) {
  return(
    <div>
      <Row>Historie úprav:</Row>
      <Row><Cardcomponent{...props} /></Row>

    </div>
  )
  
}


function CardFooter(props) {
  return (
      <div className="card-footer" > { props.children } </div>
      )
}

function Card(props) {
  return (
      <div className="card" > { props.children } </div>
      )
}

function PageMedium(props) {
  return (
      <Card>
          <CardHeader>Další informace</CardHeader>
          <CardBody>informace</CardBody>
          <CardFooter>Patička</CardFooter>
      </Card>
  )
}


function ExtraInfo(props) {
  return (
      <Card>
          <CardHeader>Další informace</CardHeader>
          <CardBody>informace</CardBody>
          <CardFooter>Patička</CardFooter>
      </Card>
  )
}

function PageLarge(props) {
  return (
      <Card>
          {/* <CardHeader>Vaše žádost</CardHeader> */}
          <CardBody>
              <Row><Textcomponent{...props}/></Row>
          {/* <CardHeader>Historie úprav:</CardHeader>
              <Row><Table{...props}/></Row> */}
              <Row><Tablecomponent{...props}/></Row>
          
          </CardBody>
      </Card>
  )
}

function PageStoryBook(props) {
  const extraProps = {
    'name':2,
    'request_history':[
      {'ID_request':52,'ID_user':2, 'name_user':"Honza Pelikán", 'ID_TARGET':20,'name_target':"dalibor", 'request_state':"zamitnuto", 'poznamka':"text poznamky"},
    
    ],
    'request':[
      {'request_content':"sfdsgsgs", 'state':'zamítnuto'}
    ]

  };
  return <PageLarge {...extraProps} {...props} />
}

function Page(props) {
  return <PageStoryBook {...props} />
}



export default App;
