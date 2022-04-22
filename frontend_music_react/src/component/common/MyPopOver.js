import {React} from 'react';
import { connect } from 'react-redux';

import {Button, Popover, OverlayTrigger} from 'react-bootstrap';



const MyPopOver = ({triggerText, popHeader, popBody, popPostion}) => {

    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">{popHeader}</Popover.Header>
          <Popover.Body>
            {popBody}
          </Popover.Body>
        </Popover>
      );
      
      const Example = () => (
        <OverlayTrigger trigger="click" placement={popPostion} overlay={popover}>
          <Button style={{padding:"0", border:"0", verticalAlign: "inherit"}} variant="link">{triggerText}</Button>
        </OverlayTrigger>
      );
      
    return (
        <Example />
    ); 

}




const mapStateToProps = (state, ownProps) => {
    return { 
        triggerText: ownProps.triggerText,
        popHeader: ownProps.popHeader, 
        popBody: ownProps.popBody, 
        popPostion: ownProps.popPostion, 
    }
}

export default connect(
    mapStateToProps, 
    {}
)(MyPopOver);