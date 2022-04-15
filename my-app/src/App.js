import logo from './logo.svg';
// import './App.css';


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

function Table(params) {
  return(
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Uživatel</th>
          <th scope="col">Stav schválení</th>
          <th scope="col">Datum</th>
          <th scope="col">Poznámka</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>001</td>
          <td>Tomas</td>
          <td>Neschváleno</td>
          <td>22.1.2022</td>
          <td>dodělat</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>001</td>
          <td>Tomas</td>
          <td>Neschváleno</td>
          <td>22.1.2022</td>
          <td>dodělat</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>001</td>
          <td>Tomas</td>
          <td>Neschváleno</td>
          <td>22.1.2022</td>
          <td>dodělat</td>
        </tr>
        
      </tbody>
    </table>
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

function Buttons(params) {
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
function Buttons1(params) {
  return(
    <div><input type="button" class="btn-check " name="btnradio" id="btnsave" autocomplete="off"></input>
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
          <CardHeader>Vaše žádost</CardHeader>
          <CardBody>
              <Row>
                  <Col size="col-md-8">
                      <TextAreaAsk{...props}/>
                  </Col>
                  

                  {/* <Col size="col-md-6">
                      <ExtraInfo {...props} />
                  </Col> */}

                  <Col size="col-md-3">
                    <Row ><Buttons{...props}/></Row>

                    <Row><TextAreaRespose{...props}/></Row>
                     
                      
                  </Col>

              </Row>
              <Row>
                <Col size="col-md-10"></Col>

                <Col size="col-md-1">
                  <Buttons1{...props}/>
                  
                </Col>
              </Row>
              <Row>Historie úprav:</Row>
              <Row><Table{...props}/></Row>
          
          </CardBody>
      </Card>
  )
}

function PageStoryBook(props) {
  const extraProps = {};
  return <PageLarge {...extraProps} {...props} />
}

function Page(props) {
  return <PageStoryBook {...props} />
}



export default App;
