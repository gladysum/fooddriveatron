import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {openTheOrganizerModal} from './reducer';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


// Confirmation modal appears when user creates a food drive
class OrganizerModal extends React.Component {
  constructor() {
    super()
    this.state = {
      open: true,
    }
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({open: false});
    this.props.openTheOrganizerModal();
    console.log("GLADYS this.props.organizermodal", this.props.organizermodal)

  }

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Food drive successfully created!"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <div className="question">
            Your food drive will take place at the following location:
          </div>
          <div className="answer">
            {this.props.fooddrive.venue + ', ' + this.props.fooddrive.streetaddress + ', ' + this.props.fooddrive.townstatezip}
          </div>

          <div className="question">
            Your food drive will take place at the following date/time:
          </div>
          <div className="answer">
            {this.props.fooddrive.monthdayyear + ', ' + this.props.fooddrive.starttime + ' to ' + this.props.fooddrive.endtime}
          </div>

          <div className="question">
            Spread the word about your food drive on social networks:
          </div>

          <div className="socialmedia">
            <img src="./images/gmail.png" style={{width: "60px", height: "40px", paddingRight: "30px"}}/>
            <img src="./images/fb.png" style={{width: "43px", height: "40px", paddingRight: "30px"}}/>
            <img src="./images/tw.png" style={{width: "40px", height: "40px", paddingRight: "30px"}}/>
            <img src="./images/ig.png" style={{width: "40px", height: "40px", paddingRight: "30px"}}/>
            <img src="./images/snap.png" style={{width: "40px", height: "40px", paddingRight: "30px"}}/>
            <img src="./images/in.png" style={{width: "46px", height: "40px", paddingRight: "30px"}}/>
            <img src="./images/twilio.png" style={{width: "40px", height: "40px", paddingRight: "30px"}}/>
          </div>

          <div className="question">
            <Link to={'/volunteer'} className="link" id="bio-name">Go to your food drive volunteer sign-up page</Link>
          </div>



        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  organizermodal: state.organizermodal
})

const mapDispatchToProps = dispatch => ({
  openTheOrganizerModal: () => {
    dispatch(openTheOrganizerModal())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(OrganizerModal)
