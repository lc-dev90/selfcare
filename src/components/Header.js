import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// components
import { Cart2 } from "@styled-icons/bootstrap/Cart2";
import { Search } from "@styled-icons/heroicons-outline/Search";
import { User } from "@styled-icons/boxicons-regular/User";
import { Star } from "@styled-icons/boxicons-solid/Star";
import { MenuOutline } from "@styled-icons/evaicons-outline/MenuOutline";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

// to do - header - navbar
// event listener to document.body to watch if user clicks outside dropdown menu and if it clicked, close the dropdown
// animate open and close dropdown
// animate menu open and close

const Header = () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  if (width > 600 && open) {
    setOpen(false);
  }

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuOpen = () => {
    setOpen(true);
  };
  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Link to="/" className="nav__logo">
          <div>
            <i>
              <StarIcon />
            </i>
            <span>selfcare</span>
          </div>
        </Link>

        <ul>
          <li>
            <Link to="/search">
              <i>
                <SearchIcon />
              </i>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <i>
                <UserIcon />
              </i>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i>
                <CartIcon />
              </i>
            </Link>
          </li>
        </ul>
        <div className="nav__mobile-menu">
          {open ? (
            <i
              className="nav__mobile-menu-close"
              tabIndex="0"
              onClick={handleMenuClose}
            >
              <CloseOutlineIcon />
            </i>
          ) : (
            <i
              className="nav__mobile-menu-open"
              tabIndex="0"
              onClick={handleMenuOpen}
            >
              <MenuOutlineIcon />
            </i>
          )}
        </div>
        {open ? (
          <div className="nav_dropdown-menu">
            <ul>
              <Link to="/search">
                <li>
                  <span>Search</span>
                  <i>
                    <SearchIcon />
                  </i>
                </li>
              </Link>
              <Link to="/">
                <li>
                  <span>Login / Register</span>
                  <i>
                    <UserIcon />
                  </i>
                </li>
              </Link>
              <Link to="/cart">
                <li>
                  <span>Cart</span>
                  <i>
                    <CartIcon />
                  </i>
                </li>
              </Link>
            </ul>
          </div>
        ) : (
          ""
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  max-width: 1300px;
  margin: 0 auto;
  width: 95%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 94px;
  align-items: center;
  position: relative;
  .nav_dropdown-menu {
    position: absolute;
    z-index: 100;
    top: 85%;
    right: 2%;
    background: #5ca5221c;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
    transition: all 0.4s ease-in-out;
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      a {
        text-decoration: none;
        color: black;
        width: 100%;
        li {
          margin: 0;
          padding: 0.5rem 1rem;
          width: 100%;
          text-align: end;
          &:hover {
            background: #5ca72021;
          }
          span {
            font-size: 0.85rem;
            color: #000000b0;
          }
          i {
            margin-left: 0.4rem;
          }
        }
      }
    }
  }
  .nav__logo {
    color: #161616;
    text-decoration: none;
    div {
      display: flex;
      align-items: center;
      span {
        font-size: 1.5rem;
        font-weight: 700;
      }
    }
  }
  .nav__mobile-menu {
    display: none;

    .nav__mobile-menu-close {
      cursor: pointer;
    }
    .nav__mobile-menu-open {
      cursor: pointer;
    }
    @media (max-width: 600px) {
      display: block;
    }
  }
  ul {
    @media (max-width: 600px) {
      display: none;
    }
    list-style: none;
    display: flex;
    align-items: center;
    li {
      margin-right: 1.7rem;
      &:nth-of-type(3) {
        margin-right: 0px;
      }
    }
  }
`;

const CartIcon = styled(Cart2)`
  width: 26px;
  margin-bottom: 4px;
  color: #5ca720;
  pointer-events: none;
`;
const UserIcon = styled(User)`
  width: 27px;
  color: #5ca720;
  pointer-events: none;
`;
const SearchIcon = styled(Search)`
  width: 27px;
  color: #5ca720;
  pointer-events: none;
`;
const StarIcon = styled(Star)`
  width: 23px;
  margin-top: 2px;
  margin-right: 6px;
  pointer-events: none;
`;
const MenuOutlineIcon = styled(MenuOutline)`
  width: 30px;
  color: #5ca720;
  pointer-events: none;
`;
const CloseOutlineIcon = styled(CloseOutline)`
  width: 30px;
  pointer-events: none;
  color: #161616;
`;
