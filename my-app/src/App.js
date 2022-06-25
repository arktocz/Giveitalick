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

  const [value, setvalue] = useState('')
  const onchange=(e)=>{
    console.log(e.target.value)
    setvalue(e.target.value)
    props.OnTextChange(value)
  }
 
  return(
    <div className="form-outline">
      {/* <label class="form-label" for="textAreaExample">Message</label> */}
      {/* <input type="textarea"></input> */}
      <textarea className="form-control" id="TextAreaAsk" rows="20" defaultValue={props.data.request_history[0].content} onChange={onchange}   ></textarea>
      
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
  console.log(props.data.request_history[0]);
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
  const [value, setvalue] = useState('')
  const onchange=(e)=>{
    console.log(e.target.value)
    setvalue(e.target.value)
    props.OnTextChange(value)
  }
  return(
    <div class="form-outline margin-top:10">
      {/* <label class="form-label" for="textAreaExample">Message</label> */}
      <textarea class="form-control" id="TextAreaRespose" rows="18" placeholder="Odpověd na žádost" onChange={onchange} ></textarea>
      
    </div>
  )
  
}

function Buttons(props) {
  
  // const data2={
  //   'name':2,
  //   'request_history':[
  //     {'id':89, 'date':'1.2.2020', 'poznamka':'blasdfsdfsdfsdfsf', 'editor_id':622, 'editor_name':'Alexandr', 'content':{'rows':[]}},
  //     {'id':89, 'date':'1.2.2020', 'poznamka':'bla7', 'editor_id':622, 'editor_name':'Alexandr', 'content':{'rows':[]}},
  //     {'id':89, 'date':'1.2.2020', 'poznamka':'lue', 'editor_id':622, 'editor_name':'Alexandr', 'content':{'rows':[]}}
  //     // {'ID_request':52,'ID_user':4, 'name_user':"Honza Pelikán", 'ID_TARGET':20,'name_target':"dalibor", 'request_state':"zamitnuto", 'poznamka':"text poznamky"},
  //     // {'ID_request':53,'ID_user':4, 'name_user':"Honza Pelikán", 'ID_TARGET':20,'name_target':"dalibor", 'request_state':"zamitnuto", 'poznamka':"text pozsnamky"},
  //     // {'ID_request':53,'ID_user':4, 'name_user':"Honza Pelikán", 'ID_TARGET':20,'name_target':"dalibor", 'request_state':"zamitnuto", 'poznamka':"text pozsnamky"}

  //   ],};
   
  const [value, setvalue] = useState('')
  const OnSetClick=(e)=>{
    
    console.log(e.target.value)
    setvalue(e.target.pressedbutton)
    
    props.OnSetClick(value)
  }
  
  return(
    
    <div class="btn-group"  role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" value={1} onClick={OnSetClick} ></input>
      <label class="btn btn-outline-primary" htmlFor="btnradio1">Schváleno</label>
  
      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" value={2} onClick={OnSetClick} ></input>
      <label class="btn btn-outline-primary" htmlFor="btnradio2">Nevyřízeno</label>
  
      <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" value={3} onClick={OnSetClick} ></input>
      <label class="btn btn-outline-primary" htmlFor="btnradio3">Zamítnuto</label>
      &nbsp;
      <button className='btn btn-primary' onClick={props.OnSetClick}>ULOŽIT</button>
    </div>
   
    
  )
  
}
// function ButtonAdd(props) {
  
//   return(
//     <div><input type="button" class="btn-check" name="btnradio" id="btnsave" autocomplete="off" onClick={props.onClick}></input>
//     <label class="btn btn-outline-primary" htmlfor="btnsave" onClick={props.OnSetClick}>Uložit</label></div>

    
    
//   )
// }



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
                      <TextAreaAsk{...props} OnTextChange={OnTextChange}/>
                      
                  </Col>
                  <Col size="col-md-3">
                    <Row ><Buttons{...props} OnSetClick={OnSetClick}/></Row>

                    <Row><TextAreaRespose{...props} OnTextChange={OnTextChange}/></Row>
                    
                  </Col>

            </Row>
            {/* <Row>
                <Col size="col-md-10"></Col>

                <Col size="col-md-1">
                  <ButtonAdd OnSetClick={OnSetClick}/>
                  
                  
                </Col>
            </Row> */}
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
console.log("data2 jsou:",data2);
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
  const reqHistoryDATA= [
    {'id':89, 'date':'1.2.2020', 'poznamka':'props1', 'editor_id':622, 'editor_name':'Alexandr', 'state':'nevyřízeno', 'content':"obsah žadosti"},
    // {'id':89, 'date':'1.2.2020', 'poznamka':'props2', 'editor_id':622, 'editor_name':'Alexandr', 'state':'nevyřízeno','content':{'rows':[]}},
    // {'id':89, 'date':'1.2.2020', 'poznamka':'props3', 'editor_id':622, 'editor_name':'Alexandr','state':'nevyřízeno', 'content':{'rows':[]}},
  ];

  const [reqHistory, setReqHistory ]= useState(reqHistoryDATA);
  
  
  const onEditReqHistory= (newHistoryRecord) =>{
    setReqHistory((prevHistory) => {
      return [...prevHistory,newHistoryRecord];
    });
  }
  


  const extraProps = {
    
    'data':{
    'name':2,
    request_history: reqHistory
    // 'request_history':[
    //   {'id':89, 'date':'1.2.2020', 'poznamka':'props1', 'editor_id':622, 'editor_name':'Alexandr', 'state':'nevyřízeno', 'content':"obsah žadosti"},
    //   // {'id':89, 'date':'1.2.2020', 'poznamka':'props2', 'editor_id':622, 'editor_name':'Alexandr', 'state':'nevyřízeno','content':{'rows':[]}},
    //   // {'id':89, 'date':'1.2.2020', 'poznamka':'props3', 'editor_id':622, 'editor_name':'Alexandr','state':'nevyřízeno', 'content':{'rows':[]}},
    
    // ],
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
  return <PageLarge {...extraProps} {...props} onEditReqHistory={onEditReqHistory}/>
}

function Page(props) {
  return <PageStoryBook {...props} />
}



export default App;
