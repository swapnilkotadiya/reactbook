import React from "react";
import { SocialIcon } from "react-social-icons";
import {
  CDBFooter,
  CDBFooterLink,
  CDBBox,
  CDBBtn,
  CDBIcon,
  CDBContainer
} from "cdbreact";

export default Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: "80%" }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <span className="ml-4 h5 mb-0 ">ReactJs</span>
          </a>
        </CDBBox>
        <CDBBox>
          <small className="ml-2">
            &copy; Swapnil Kotadiya, 2022. All rights reserved.
          </small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <SocialIcon
              url="https://www.facebook.com/"
              style={{ height: 25, width: 25 }}
            />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <SocialIcon
              url="https://www.instagram.com/"
              style={{ height: 25, width: 25 }}
            />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <SocialIcon
              url="https://www.twitter.com/"
              style={{ height: 25, width: 25 }}
            />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};
