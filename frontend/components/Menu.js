import React, { Component } from "react";
import Link from "next/link";
import { Config } from "../config.js";
import styled from 'styled-components';
import Headroom from 'react-headroom'


const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`

const MenuItem = styled.a`
  margin: 0 12px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 12px;
  transition: .2s ease all;
  &:hover {
    color: #464646;
  }
`

const Hotline = styled.div`
  display: flex;
  flex-direction: column;
  span {
      font-size: 12px;
  }
  a {
    font-weight: 700;
    font-size: 18px;
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
                as={`/${item.object}/${slug}`}
                href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
                key={item.ID}
            >
                <MenuItem>{item.title}</MenuItem>
            </Link>
        );
    });


    return(
      <Headroom style={{
        webkitTransition: 'all 1s ease-in-out',
        mozTransition: 'all 1s ease-in-out',
        oTransition: 'all 1s ease-in-out',
        transition: 'all 1s ease-in-out'
      }}>
      <HeaderContainer>
        <div>
          <picture>
              <source type="images/webp" srcSet="/static/images/BellBros_Logo.webp"/>
              <source type="images/png" srcSet="/static/images/BellBros_Logo.png"/>
              <img
                  src="/static/images/BellBros_Logo.png"
                  width="200"

                />
          </picture>
        </div>
          <nav>
            <Link href="/">
                <MenuItem>Home</MenuItem>
            </Link>
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
      </Headroom>
    )
  }


}

export default Menu;
