import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import ReactPlayer from 'react-player';


const modalStyle = {
  position: 'absolute',
  backgroundColor: 'white',
  boxShadow: 1,
  padding: '0px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

class Slide extends Component {
  state = {
    open : false
  }

  handleOpen = () => {
    this.setState({open: true });
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const image = this.props.image;
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%',
      height: '50vh',
      opacity: 1,
      // width: '100%'
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }     
    return (
      <div className="slide" style={styles}>

        <Modal 
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}>
          <div style={modalStyle}>
            <ReactPlayer 
              url={`https://www.youtube.com/watch?v=M3XO7L1rwGY`} 
              playing={false} 
              controls={true}
            />
          </div>
        </Modal>

        <div style={{maxWidth: '20%', cursor: 'pointer'}} onClick={this.handleOpen}>
          <i className="fa fa-play-circle fa-9x" aria-hidden="true" style={{color: 'white'}}></i>
        </div>
      </div>
    )    
  }
}

export default Slide


// const Slide = ({ image }) => {
//     const styles = {
//         backgroundImage: `url(${image})`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: '50% 60%',
//         height: '50vh',
//         opacity: 1,
//         // width: '100%'
//         textAlign: 'center',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center'
//     }    
//   return (
//     <div className="slide" style={styles}>
//       <div style={{maxWidth: '20%'}}>
//         <i className="fa fa-play-circle fa-9x" aria-hidden="true" style={{color: 'white'}}></i>
//       </div>
//     </div>
//   )
// }

// export default Slide