import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
const Footermail=()=>{
    return(
        <MDBFooter bgColor='dark' color='white' className='text-center text-lg-left'>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          Mail Us At 
          <a className='text-light' align="right" href='foodcomm@iiitb.ac.in'>
            foodcomm@iiitb.ac.in
          </a>
        </div>
      </MDBFooter>
    );
}
export default Footermail;