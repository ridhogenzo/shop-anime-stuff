import React from "react";
import Button from "../elements/button";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineCopyright,
} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="container-fluid">
      <div className="m-5">
        <div className="row">
          <div className="col-2 mr-5">
            <h6 className="footer-item-title text-gray-900 font-weight-bold h4">
              Feature
            </h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/Newfigure" className="text-gray-500">
                  New Figure
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/Store" className="text-gray-500">
                  Store
                </Button>
              </li>
              <li className="list-group-item">
                <Button
                  type="link"
                  href="/Helpcenter"
                  className="text-gray-500"
                >
                  Help Center(FAQ)
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="footer-item-title text-gray-900 font-weight-bold h4">
              I'm The Hunter
            </h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/LaporBug" className="text-gray-500">
                  Lapor Bug
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/Feedback" className="text-gray-500">
                  Feedback
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="footer-item-title text-gray-900 font-weight-bold h4">
              Terms of services
            </h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  type="link"
                  href="/Privacypolicy"
                  className="text-gray-500"
                >
                  Privacy Policy
                </Button>
              </li>
            </ul>
            <h6 className="footer-item-title text-gray-900 font-weight-bold h4 mt-4">
              Contact Us
            </h6>
            <Button
              href="https:/facebook.com/ridhogenzo"
              type="link"
              isExternal
              className="mr-2"
            >
              <AiFillFacebook color="green" size="3rem" />
            </Button>
            <Button
              href="https://wa.me/6281318609456"
              className="mr-2"
              type="link"
              isExternal
            >
              <FaWhatsapp color="green" size="3rem" />
            </Button>
            <Button
              href="https://www.instagram.com/ridhogenzoo/"
              type="link"
              isExternal
            >
              <AiFillInstagram color="green" size="3rem" />
            </Button>
            <li className="list-group-item">
              <Button
                type="link"
                isExternal
                href="mailto:genzocuy123@gmail.com"
                className="text-gray-500 mt-3"
              >
                ridhogenzo@store.id
              </Button>
            </li>
          </div>
          <div className="col-3 mr-5">
            <h6 className="footer-item-title text-gray-900 font-weight-bold h4">
              Visit dho
            </h6>
            <p className="text-gray-500">
              Jl.Swadaya IV RT 07/07 No.24 Kel.Rawabunga Kec.Jatinegara Jakarta
              Timur 13350
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3203493288856!2d106.8688554152953!3d-6.221421562666779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f379a3f6d6bf%3A0x81c50028d15c5f66!2sSMAN%2054%20Jakarta!5e0!3m2!1sid!2sid!4v1635319754666!5m2!1sid!2sid"
              width="400"
              height="200"
              allowfullscreen=""
              loading="lazy"
              className="maps-animeshop"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col align-items-center text-center">
          <AiOutlineCopyright /> Copyright 2021 • All Rights Reserved •
          Ridhogenzo
        </div>
      </div>
    </footer>
  );
}
