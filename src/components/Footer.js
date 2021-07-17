import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// components
import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import visa from "../assets/visa.png";
import master from "../assets/master-logo.png";
import paypal from "../assets/paypal.png";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-container__row">
        <div className="links">
          <ul>
            <Link>
              <li>
                <span>Contato</span>
              </li>
            </Link>
            <Link>
              <li>
                <span>Termos de Serviço</span>
              </li>
            </Link>
            <Link>
              <li>
                <span>Política de Privacidade</span>
              </li>
            </Link>
            <Link>
              <li>
                <span>Cancelamento, troca e reembolso</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="newsletter">
          <form>
            <label htmlFor="email">Newsletter</label>
            <div>
              <input
                id="email"
                type="text"
                placeholder="Digite seu melhor e-mail"
              />
              <button>Inscrever</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-container__row">
        <div className="social-media">
          <i>
            <InstagramIcon />
          </i>
          <i>
            <FacebookSquareIcon />
          </i>
        </div>
        <div className="payments">
          <div>
            <img src={master} alt="Master Card" />
          </div>
          <div>
            <img src={paypal} alt="Paypal" />
          </div>
          <div>
            <img src={visa} alt="Visa" />
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: #f9f9f9;
  padding: 40px 0;
  position: relative;
  &::after {
    position: absolute;
    width: 100%;
    height: 0.4px;
    background: #a5a1a1b0;
    content: "";
    top: 216px;
  }
  .links {
    ul {
      list-style: none;
      a {
        color: black;
        li {
          margin-bottom: 10px;
          &:nth-of-type(4) {
            margin-bottom: 0px;
          }
          span {
            font-size: 20px;
          }
        }
      }
    }
  }

  .newsletter {
    form {
      display: flex;
      flex-direction: column;

      label {
        font-size: 20px;
        margin-bottom: 1rem;
      }
      div {
        input {
          padding: 0.895rem 1.3rem;
          font-size: 20px;
          width: 347px;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          border: 1px solid #d9d9d9;
          background: white;
          &:placeholder {
            color: #a8a4a4;
          }
        }
        button {
          padding: 0.895rem 1.6rem;
          font-size: 20px;
          border: 1px solid #5ca720;
          background: #5ca720;
          color: white;
          font-weight: 700;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          cursor: pointer;
        }
      }
    }
  }

  .footer-container__row {
    &:nth-of-type(1) {
      padding-bottom: 40px;
    }
    &:nth-of-type(2) {
      padding-top: 40px;
    }
    max-width: 1300px;
    margin: 0 auto;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .social-media {
      i {
        margin-right: 10px;
      }
    }
    .payments {
      align-items: center;
      display: flex;
      div {
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        margin-left: 1rem;
        &:nth-of-type(2) {
          width: 2rem;
          margin-left: 1.5rem;
          height: 2rem;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
`;

const FacebookSquareIcon = styled(FacebookSquare)`
  width: 2.5rem;
  color: #5ca720;
  pointer-events: none;
`;
const InstagramIcon = styled(Instagram)`
  width: 2.5rem;
  color: #5ca720;
  pointer-events: none;
`;
