import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react'
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
      <Row key={item.id}>
        <Col>{item.id}</Col>
        <Col>{item.date}</Col>
        <Col>{item.poznamka}</Col>
        <Col>{item.editor_id}</Col>
        <Col>{item.editor_name}</Col>
      
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
  // const onAdd= (request_state, poznamka)=>{
  //   const history=[item.request_history]//dodělat


  // }
    
  return(
    
    <Card>
      <CardHeader>
        <Row>
          <Col scope="col">ID</Col>
          <Col scope="col">Date</Col>
          <Col scope="col">Poznamka</Col>
          <Col scope="col">Editor_ID</Col>
          <Col scope="col">Editor_Name</Col>
          {/* <Col scope="col">ID_TARGET</Col>
          <Col scope="col">Target</Col>
          <Col scope="col">Stav schválení</Col>
          <Col scope="col">Poznámka</Col> */}
        </Row>
      </CardHeader>
      <CardBody>
          <TableUserData request_history={props.request_history}/>
      </CardBody>
    </Card>
  )
}

function TextAreaRespose(props){
  const [value, setvalue] = useState('')
  const onchange=(e)=>{
    console.log(e.target.value)
    setvalue(e.target.value)
    props.OnTextChange(value)
  }
  return(
    <div class="form-outline margin-top:10">
      {/* <label class="form-label" for="textAreaExample">Message</label> */}
      <textarea class="form-control" id="TextAreaRespose" rows="18" placeholder="Odpověd na žádost" onChange={onchange} value={value}></textarea>
      
    </div>
  )
  
}

function Buttons(props) {
  
  const data2={
    'name':2,
    'request_history':[
      {'id':89, 'date':'1.2.2020', 'poznamka':'bla5', 'editor_id':622, 'editor_name':'Alexandr', 'content':{'rows':[]}},
      {'id':89, 'date':'1.2.2020', 'poznamka':'bla7', 'editor_id':622, 'editor_name':'Alexandr', 'content':{'rows':[]}},
      {'id':89, 'date':'1.2.2020', 'poznamka':'lue', 'editor_id':622, 'editor_name':'Alexandr', 'content':{'rows':[]}}
      // {'ID_request':52,'ID_user':4, 'name_user':"Honza Pelikán", 'ID_TARGET':20,'name_target':"dalibor", 'request_state':"zamitnuto", 'poznamka':"text poznamky"},
      // {'ID_request':53,'ID_user':4, 'name_user':"Honza Pelikán", 'ID_TARGET':20,'name_target':"dalibor", 'request_state':"zamitnuto", 'poznamka':"text pozsnamky"},
      // {'ID_request':53,'ID_user':4, 'name_user':"Honza Pelikán", 'ID_TARGET':20,'name_target':"dalibor", 'request_state':"zamitnuto", 'poznamka':"text pozsnamky"}

    ],
    
  
  };
  return(
    <div class="btn-group"  role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"></input>
      <label class="btn btn-outline-primary" htmlFor="btnradio1">Schváleno</label>
  
      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"></input>
      <label class="btn btn-outline-primary" htmlFor="btnradio2">Nevyřízeno</label>
  
      <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"></input>
      <label class="btn btn-outline-primary" htmlFor="btnradio3">Zamítnuto</label>
      <button className='btn btn-primary' onClick={props.OnSetClick}>set</button>
    </div>
  )
  
}
function ButtonAdd(props) {
  
  return(
    <div><input type="button" class="btn-check" name="btnradio" id="btnsave" autocomplete="off" onClick={props.onClick}></input>
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
  function OnSetClick(){
    console.log('OnSetClick')
  }
  function OnTextChange(value){
    console.log('OnTextChange')
  }
  return(
      <Card>
        <CardHeader>Vaše žádost</CardHeader>
        <CardBody>
            <Row>
                  <Col size="col-md-8">
                      <TextAreaAsk{...props}/>
                      
                  </Col>
                  <Col size="col-md-3">
                    <Row ><Buttons{...props} OnSetClick={OnSetClick}/></Row>

                    <Row><TextAreaRespose{...props} OnTextChange={OnTextChange}/></Row>
                    
                  </Col>

            </Row>
            <Row>
                <Col size="col-md-10"></Col>

                <Col size="col-md-1">
                  <ButtonAdd/>
                  {/* <ButtonAdd onClick={()=>props.onAdd(item.request_state, item.poznamka)}/> */}
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
      {/* zkusit předelat do card */}
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

  // function onAdd(request_state, poznamka) {
  //   const poznamka=

    
  // }
const [data, setdata]=useState(props.data)
const data2={
  'name':2,
  'request_history':[
    {'id':89, 'date':'1.2.2020', 'poznamka':'bla1', 'editor_id':622, 'editor_name':'Alexandr', 'content':{'rows':[]}},
    {'id':89, 'date':'1.2.2020', 'poznamka':'bla6', 'editor_id':622, 'editor_name':'Alexandr', 'content':{'rows':[]}},
    {'id':89, 'date':'1.2.2020', 'poznamka':'bla3', 'editor_id':622, 'editor_name':'Alexandr', 'content':{'rows':[]}},
    
  ],
  

};
console.log(data)
  return (
      <Card>
          {/* <CardHeader>Vaše žádost</CardHeader> */}
          <CardBody>
          <Row><Textcomponent{...data} onchange={setdata}/></Row>
              {/* <Row><Textcomponent{...props} onClick={onAdd}/></Row> */}
          {/* <CardHeader>Historie úprav:</CardHeader>
              <Row><Table{...props}/></Row> */}
              <Row><Tablecomponent{...data}/></Row>
          
          </CardBody>
          <button className='btn btn-primary' onClick={()=>setdata(data2)}>set</button>
      </Card>
  )
}

function PageStoryBook(props) {
  const extraProps = {
    'data':{
    'name':2,
    'request_history':[
      {'id':89, 'date':'1.2.2020', 'poznamka':'bla1', 'editor_id':622, 'editor_name':'Alexandr', 'content':{'rows':[]}},
      {'id':89, 'date':'1.2.2020', 'poznamka':'bla66', 'editor_id':622, 'editor_name':'Alexandr', 'content':{'rows':[]}},
      {'id':89, 'date':'1.2.2020', 'poznamka':'bla3', 'editor_id':622, 'editor_name':'Alexandr', 'content':{'rows':[]}},,
    
    ],
  }};

  // 'data':{
  // 'id':15,
  // 'content':{'rows':[]},
  // 'editor': {'id':622, 'name': 'Alexander'},
  // 'history':[
  //   {'id':89, 'date':'1.2.2020', 'poznamka':'bla1', 'editor':{'id':622, 'name':'Alexandr'}, 'content':{'rows':[]}},
  //   {'id':90, 'date':'1.2.2020', 'poznamka':'bla2', 'editor':{'id':666, 'name':'Josef'}, 'content':{'rows':[]}},
  
  // ]
  // }};
  return <PageLarge {...extraProps} {...props} />
}

function Page(props) {
  return <PageStoryBook {...props} />
}



export default App;
