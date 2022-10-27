import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function ContainerFluidExample() {
  return (
    <Container fluid className='link-section'>
      <Container className='wrapper'>
        <div className="profile-section">
     <div className="profile-img" id='profile__img'>
      <img src="" alt="" srcset="" />
     </div>
     <div className="socials">
      <div className="social-links">
        <h6>Twitter:</h6>
      <a href="http://">@esteraj</a>
      </div>
      <div className="social-links">
        <h6>Slack:</h6>
      <a href="http://">name</a>
      </div>
     
     </div>
     </div>
  {/*<Col className="col">
     <a className='links' id='twitter' href="http://">Twitter link</a>
   </Col>*/}
   <Col>
     <a id='btn__zuri' href="https://training.zuri.team">Zuri team</a>
     </Col>
     <Col>
     <a id='books' href="https://books.zuri.team">Zuri books</a>
     </Col>
     <Col>
     <a id='book_python' href="https://books.zuri.team/python-for-beginners?
     ref_id=<yourslackname>">Python books</a>
     </Col>
     <Col>
     <a id='pitch' href="https://background.zuri.team">Background check for coders</a>
     </Col>
     <Col>
     <a href="https://books.zuri.team/design-rules">Design books</a>
     </Col>
    
     </Container>
    </Container>
  );
   /*<Col>
     <a href="http://">Zuri team</a>
     </Col>
     <Col>
     <a href="http://">Zuri books</a>
     </Col>
     <Col>
     <a href="http://">Python books</a>
     </Col>
     <Col>
     <a href="http://">Background check for coders</a>
     </Col>
     <Col>
     <a href="http://">Design books</a>
     </Col>*/
}

export default ContainerFluidExample;