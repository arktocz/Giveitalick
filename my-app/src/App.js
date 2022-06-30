//import logo from './logo.svg';
// import './App.css';
import React, { useState, useRef } from 'react'
//import './index.js'

/** @module Zadost */

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

/**
 * Renders a request field
 * @param {*} props 
 * @param {string} props.data.request_history[] - element of history request array
 * @function
 */
function TextAreaAsk(props) {
  const onchange=(e)=>{
    props.OnTextAskChange(e.target.value)
  }
  return(
    <div className="form-outline">
      <textarea className="form-control" id="TextAreaAsk" rows="20" defaultValue={props.data.request_history[props.data.request_history.length-1].content} onChange={onchange}   ></textarea>
    </div>
  )
  
}

/**
 * Renders each of history request elements into table by .map
 * @param {*} props 
 * @param {array} props.data.request_history - history request array of dicts
 * @function
 */
function TableUserData(props){
  let request_history = props.request_history.map(
    (item, index) => (
      <Row key={item.id}>
        <Col>{item.id}</Col>
        <Col>{item.date}</Col>
        <Col>{item.poznamka}</Col>
        <Col>{item.state}</Col>
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

/**
 * Renders a complete history of requests into cardcomponent
 * @param {*} props 
 * @param {array} props.data.request_history - history request array of dicts
 * @function
 */
function Cardcomponent(props) {
  const [request_history, setRequest_history] = React.useState(props.data.request_history)  
  return(
    <Card>
      <CardHeader>
        <Row>
          <Col scope="col">ID</Col>
          <Col scope="col">Date</Col>
          <Col scope="col">Poznamka</Col>
          <Col scope="col">Stav</Col>
          <Col scope="col">Editor_ID</Col>
          <Col scope="col">Editor_Name</Col>
        </Row>
      </CardHeader>
      <CardBody>
          <TableUserData request_history={request_history}/>
      </CardBody>
    </Card>
  )
}

/**
 * Renders each of history request elements into table by .map
 * @param {*} props 
 * @param {array} props.data.request_history - history request array of dicts
 * @function
 */
function TextAreaRespose(props){
  const onchange=(e)=>{
    props.OnTextResponseChange(e.target.value)
  }
  return(
    <div class="form-outline margin-top:10">
      <textarea class="form-control" id="TextAreaRespose" rows="18" placeholder="Odpověd na žádost" onChange={onchange} ></textarea>
    </div>
  )
}

/**
 * Renders save and state buttons
 * @param {*} props 
 * @function
 */
function Buttons(props) {
  const [value, setvalue] = useState('')
  const ButtonPressed=(e)=>{
    setvalue(e.target.value)
  }
  const saveButtonHandler = () => {
    props.returnNewRecord(value);
  }
  return(
    <div class="btn-group"  role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" value="Schváleno" onClick={ButtonPressed} ></input>
      <label class="btn btn-outline-primary" htmlFor="btnradio1">Schváleno</label>
  
      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" value="Nevyřízeno" onClick={ButtonPressed} ></input>
      <label class="btn btn-outline-primary" htmlFor="btnradio2">Nevyřízeno</label>
  
      <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" value="Zamítnuto" onClick={ButtonPressed} ></input>
      <label class="btn btn-outline-primary" htmlFor="btnradio3">Zamítnuto</label>
      &nbsp;
      <button className='btn btn-primary' onClick={saveButtonHandler}>ULOŽIT</button>
    </div>   
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

/**
 * Renders request, note and buttons fields+ creates new record onclick
 * @param {*} props 
 * @function
 */
function Textcomponent(props) {
  const [textAreaResponse, setTextAreaResponse] = useState("");
  const [textAreaAsk, setTextAreaAsk] = useState("");

  function OnTextAskChange(value){
    setTextAreaAsk(value);
    // console.log('OnTextChange')
  }

  function OnTextResponseChange(value){
    setTextAreaResponse(value);
    // console.log('OnTextChange')
  }

  const returnNewRecord = (status)=> {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let fulldate= `${date}.${month}.${year}`;

    let fakeID=Math.random() * (500 - 100) + 100;
    fakeID=Math.round(fakeID);
   
    const nameDict={405:"Spytihněv",521:"Božidara",480:"Haštal",222:"Servác",253:"Kařesomysl",785:"Irmhild",542:"Voršila",632:"Kordula",564:"Zvonimíra"}
    let keys = Object.keys(nameDict)
    let values = Object.values(nameDict)
    let numberOfElement=Math.floor(Math.random() * keys.length)
    let fakeEditorID = keys[numberOfElement]
    let fakeName=values[numberOfElement]
    
    const newRecord={'id':fakeID, 'date':fulldate, 'poznamka':textAreaResponse, 'editor_id':fakeEditorID, 'editor_name':fakeName, 'state':status, 'content':textAreaAsk};
    //console.log(newRecord);
    props.onEditReqHistory(newRecord);

  }
  return(
      <Card>
        <CardHeader>Vaše žádost</CardHeader>
        <CardBody>

            <Row>
              <Col size="col-md-8">
                <TextAreaAsk{...props} OnTextAskChange={OnTextAskChange}/>                     
              </Col>
              <Col size="col-md-3">
                <Row ><Buttons{...props} returnNewRecord={returnNewRecord}/></Row>
                <Row><TextAreaRespose{...props} OnTextResponseChange={OnTextResponseChange}/></Row>
              </Col>
            </Row>

        </CardBody>
      </Card>
  ) 
}

/**
 * Renders carcomponent into table component (bottom half)
 * @param {*} props 
 * @function
 */
function Tablecomponent(props) {
  return(
  <Card>
    <CardHeader>Historie úprav</CardHeader>
    <CardBody>
        <Row> <Cardcomponent{...props} /> </Row>
    </CardBody>
  </Card>
  )
  
}


function Card(props) {
  return (
      <div className="card" > { props.children } </div>
      )
}


/**
 * Renders teaxt and table into one component
 * @param {*} props 
 * @param {array} props.data - extra props inside
 * @function
 */
function PageLarge(props) {

  const [data, setdata]=useState(props.data);
  return (
    <Card>
        <CardBody>
        <Row><Textcomponent{...props} onchange={setdata}/></Row>
        <Row><Tablecomponent{...props}/></Row>
        </CardBody>
    </Card>
  )
}

/**
 * Renders pagelarge into final page and serves as main com channel for components
 * @param {*} props 
 * @param {array} props.extraProps - request history
 * @function
 */
function PageStoryBook(props) {
  const extraProps = {
    'data':{
    'name':2,
    'request_history':[
      {'id':89, 'date':'1.2.2020', 'poznamka':'props1', 'editor_id':622, 'editor_name':'Alexandr', 'state':'nevyřízeno', 'content':"obsah žadosti"},
      {'id':89, 'date':'1.2.2020', 'poznamka':'props1', 'editor_id':622, 'editor_name':'Alexandr', 'state':'nevyřízeno', 'content':"obsah žadosti"},
      {'id':89, 'date':'1.2.2020', 'poznamka':'konec', 'editor_id':622, 'editor_name':'Alexandr', 'state':'nevyřízeno', 'content':"obsah žadostilast"},
    ],
  }};

  const [reqHistory, setReqHistory ]= useState(extraProps);

  const onEditReqHistory= (newHistoryRecord) =>{
    //console.log("edit history called")
    //console.log(newHistoryRecord)
    setReqHistory((prevHistory) => {
      let prevHistory2=prevHistory.data.request_history;
      console.log(prevHistory.data.request_history)
      prevHistory2.push(newHistoryRecord);
      return {...prevHistory, request_history: `${prevHistory2}`};
    });
  }
  return <PageLarge {...extraProps} {...props} onEditReqHistory={onEditReqHistory}/>
}

function Page(props) {
  return <PageStoryBook {...props} />
}

export default App;
