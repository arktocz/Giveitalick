import logo from './logo.svg';
// import './App.css';
import React, { useState, useRef } from 'react'
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
  // console.log(props.data.request_history[0].content);

  // const [value, setvalue] = useState('')
  const onchange=(e)=>{
    // console.log(e.target.value)
    // setvalue(e.target.value)
    props.OnTextAskChange(e.target.value)
  }
  // let last_element=props.data.request_history.lenght-1;
  // console.log(typeof(props.data.request_history))
 
  return(
    <div className="form-outline">
      {/* <label class="form-label" for="textAreaExample">Message</label> */}
      {/* <input type="textarea"></input> */}
      
      {/* <textarea className="form-control" id="TextAreaAsk" rows="20" defaultValue={props.data.request_history.slice(-1)[0].content} onChange={onchange}   ></textarea> */}
      <textarea className="form-control" id="TextAreaAsk" rows="20" defaultValue={props.data.request_history[props.data.request_history.length-1].content} onChange={onchange}   ></textarea>
      
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


function Cardcomponent(props) {
  // console.log(props.data.request_history[0]);
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

function TextAreaRespose(props){
  // const [value, setvalue] = useState('')
  const onchange=(e)=>{
    // console.log(e.target.value)
    // setvalue(e.target.value)
    props.OnTextResponseChange(e.target.value)
  }
  return(
    <div class="form-outline margin-top:10">
      {/* <label class="form-label" for="textAreaExample">Message</label> */}
      <textarea class="form-control" id="TextAreaRespose" rows="18" placeholder="Odpověd na žádost" onChange={onchange} ></textarea>
      
    </div>
  )
  
}

function Buttons(props) {
  
  // const pressedbutton="";
  const [value, setvalue] = useState('')
  const ButtonPressed=(e)=>{
  
    setvalue(e.target.value)
    // props.OnSetClick(value)
  }

  const saveButtonHandler = () => {

    props.returnNewRecord(value);
  }

  
  return(
    
    <div class="btn-group"  role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" value="Schvaleno" onClick={ButtonPressed} ></input>
      <label class="btn btn-outline-primary" htmlFor="btnradio1">Schváleno</label>
  
      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" value="Nevyrizeno" onClick={ButtonPressed} ></input>
      <label class="btn btn-outline-primary" htmlFor="btnradio2">Nevyřízeno</label>
  
      <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" value="Zamitnuto" onClick={ButtonPressed} ></input>
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

    const newRecord={'id':0, 'date':fulldate, 'poznamka':textAreaResponse, 'editor_id':0, 'editor_name':'Odpovídač', 'state':status, 'content':textAreaAsk};
    console.log(newRecord);
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

const [data, setdata]=useState(props.data);
let data2=props.data;
// console.log("data2 jsou:",data2);
// console.log(data)
  return (
      <Card>
          {/* <CardHeader>Vaše žádost</CardHeader> */}
          <CardBody>
          <Row><Textcomponent{...props} onchange={setdata}/></Row>
          <Row><Tablecomponent{...props}/></Row>
          
          </CardBody>
          <button className='btn btn-primary' onClick={()=>setdata(data2)}>set</button>
      </Card>
  )
}


function PageStoryBook(props) {
  
  // const reqHistoryDATA= [
  //   {'id':89, 'date':'1.2.2020', 'poznamka':'props1', 'editor_id':622, 'editor_name':'Alexandr', 'state':'nevyřízeno', 'content':"obsah žadosti"},
  //   {'id':90, 'date':'1.2.2020', 'poznamka':'props1', 'editor_id':622, 'editor_name':'Alexandr', 'state':'nevyřízeno', 'content':"obsah žadosti2"},
  //   // {'id':89, 'date':'1.2.2020', 'poznamka':'props2', 'editor_id':622, 'editor_name':'Alexandr', 'state':'nevyřízeno','content':{'rows':[]}},
  //   // {'id':89, 'date':'1.2.2020', 'poznamka':'props3', 'editor_id':622, 'editor_name':'Alexandr','state':'nevyřízeno', 'content':{'rows':[]}},
  // ];

  const extraProps = {
    
    'data':{
    'name':2,
    'request_history':[
      {'id':89, 'date':'1.2.2020', 'poznamka':'props1', 'editor_id':622, 'editor_name':'Alexandr', 'state':'nevyřízeno', 'content':"obsah žadosti"},
      {'id':89, 'date':'1.2.2020', 'poznamka':'props1', 'editor_id':622, 'editor_name':'Alexandr', 'state':'nevyřízeno', 'content':"obsah žadosti"},
      {'id':89, 'date':'1.2.2020', 'poznamka':'konec', 'editor_id':622, 'editor_name':'Alexandr', 'state':'nevyřízeno', 'content':"obsah žadostilast"},
      
      // {'id':89, 'date':'1.2.2020', 'poznamka':'props3', 'editor_id':622, 'editor_name':'Alexandr','state':'nevyřízeno', 'content':{'rows':[]}},
    
    ],
  }};

  const [reqHistory, setReqHistory ]= useState(extraProps);
  
  
  const onEditReqHistory= (newHistoryRecord) =>{
    console.log("edit history called")
    console.log(newHistoryRecord)
   
    setReqHistory((prevHistory) => {
      let prevHistory2=prevHistory.data.request_history;
      console.log(prevHistory.data.request_history)
      prevHistory2.push(newHistoryRecord);
      return {...prevHistory, request_history: `${prevHistory2}`};
    });
  }
  




  // 'data':{
  // 'id':15,
  // 'content':{'rows':[]},
  // 'editor': {'id':622, 'name': 'Alexander'},
  // 'history':[
  //   {'id':89, 'date':'1.2.2020', 'poznamka':'bla1', 'editor':{'id':622, 'name':'Alexandr'}, 'content':{'rows':[]}},
  //   {'id':90, 'date':'1.2.2020', 'poznamka':'bla2', 'editor':{'id':666, 'name':'Josef'}, 'content':{'rows':[]}},
  
  // ]
  // }};
  return <PageLarge {...extraProps} {...props} onEditReqHistory={onEditReqHistory}/>
}

function Page(props) {
  return <PageStoryBook {...props} />
}



export default App;
