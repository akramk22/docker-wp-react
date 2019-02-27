import React, { Component } from "react";
import Link from "next/link";
import { Config } from "../config.js";
import styled, { ThemeProvider } from 'styled-components';
import Headroom from 'react-headroom'
import { theme } from '../src/styles/theme.js'


const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
`

const MenuItem = styled.a`
  margin: 0 12px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 12px;
  color: ${props => props.theme.white};
  position: relative;
  transition: .3s cubic-bezier(.66,0,.75,1);
  &:before {
    position: absolute;
    content: '';
    background: ${props => props.theme.white};
    height: 2px;
    width: 0%;
    bottom: -3px;
    transition: .3s cubic-bezier(.66,0,.75,1);
  }
  &:hover::before {
    width: 100%;
  }

`

const Hotline = styled.div`
  display: flex;
  flex-direction: column;
  span {
      font-size: 12px;
      color: ${props => props.theme.white};
  }
  a {
    color: ${props => props.theme.white};
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;
  }
`


class Menu extends Component {
  constructor() {
      super();
  }

  getSlug(url) {
      const parts = url.split("/");
      return parts.length > 2 ? parts[parts.length - 2] : "";
  }

  render() {
      const menuItems = this.props.menu.items.map((item, index) => {
        if (item.object === "custom") {
            return (
                <Link href={item.url} key={item.ID}>
                    <MenuItem>{item.title}</MenuItem>
                </Link>
            );
        }
        const slug = this.getSlug(item.url);
        const actualPage = item.object === "category" ? "category" : "post";
        return (
            <Link
                as={item.object === 'post' || item.object === 'page' ? `/${slug}` : `/${item.object}/${slug}`}
                href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
                key={item.ID}
            >
                <MenuItem>{item.title}</MenuItem>
            </Link>
        );
    });


    return(
      <Headroom style={{
        WebkitTransition: 'all .4s ease-in-out',
        MozTransition: 'all .4s ease-in-out',
        OTransition: 'all .4s ease-in-out',
        transition: 'all .4s ease-in-out'
      }}>
      <ThemeProvider theme={theme}>
      <HeaderContainer>
        <div style={{cursor: 'pointer'}}>
          <Link href="/">
            <picture>
                <source type="images/webp" srcSet="/static/images/BellBros_Logo.webp"/>
                <source type="images/png" srcSet="/static/images/BellBros_Logo.png"/>
                <img
                    src="/static/images/BellBros_Logo.png"
                    width="200"
                  />
            </picture>
          </Link>
        </div>
          <nav>
            {menuItems}
            <Link href="/blog">
                <MenuItem>Blog</MenuItem>
            </Link>
          </nav>
          <Hotline>
            <span>THE <em>NO SUPRISE</em> HOTLINE</span>
              <Link href="tel:9162269677">
                  <a>916-226-9677</a>
              </Link>
          </Hotline>
        </HeaderContainer>
       </ThemeProvider>
      </Headroom>
    )
  }


}

export default Menu;
