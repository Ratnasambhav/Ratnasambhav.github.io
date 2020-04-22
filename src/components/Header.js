import React from 'react'
import { Link } from 'gatsby'
import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";

export default () => (
  <div className="header">
    <div className="header__inner">
      <div className="header__logo">
        <Link to="/">
          <div className="logo">
            Ratnasambhav
          </div>
        </Link>
      </div>
      <Menu>
        <MenuButton className="menu-trigger">
          menu&nbsp;<span aria-hidden>▾</span>
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/micro">Micro Journal</Link>
          </MenuItem>
          {/* <MenuItem>
            <Link to="/micro">Music</Link>
          </MenuItem> */}
        </MenuList>
      </Menu>
    </div>
  </div>
)