import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import ProfilePicture from "../icons/user64.png";

const Profile = () => {
    return(
        <>
            <div >
            <MDBContainer>
                <MDBRow>
                <MDBCol md="10" lg="10" xl="5" className="mt-1">
                    <MDBCard>
                    <MDBCardBody className="p-4">
                        <div id="main-content">
                        {/* <div> */}
                        <div className="">
                        <img className="profile-picture"
                            src={ProfilePicture}
                            alt='profile image'
                        />
                        </div>
                        <div className="">
                            <MDBCardTitle className = "profile-name">This is name</MDBCardTitle>
                            <MDBCardText className = "profile-info">here is some more info </MDBCardText>

                            {/* <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                            style={{ backgroundColor: '#efefef' }}>
                            <div>
                                <p className="small text-muted mb-1">Articles</p>
                                <p className="mb-0">41</p>
                            </div>
                            <div className="px-3">
                                <p className="small text-muted mb-1">Followers</p>
                                <p className="mb-0">976</p>
                            </div>
                            <div>
                                <p className="small text-muted mb-1">Rating</p>
                                <p className="mb-0">8.5</p>
                            </div>
                            </div> */}
                            
                        </div>
                        </div>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                </MDBRow>
            </MDBContainer>
            </div>
        </>
    )
}
 export default Profile;