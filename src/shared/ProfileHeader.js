import { Menu, MenuItem, Typography } from '@mui/material';
import React from 'react'

export default function ProfileHeader(props) {
  let anchorElUser = props.anchorElUser
  let isLoggedIn = props.isLoggedIn
  let handleLogout = props.handleLogout
  let handleCloseUserMenu = props.handleCloseUserMenu
  let handleUserDetails = props.handleUserDetails
  let settings = props.settings
  let notLoggedInSettings = props.notLoggedInSettings
  return (
    <Menu sx={{
      mt: '45px'
    }} id="menu-appbar" anchorEl={props.anchorElUser} anchorOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }} keepMounted transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }} open={Boolean(props.anchorElUser)} onClose={props.handleCloseUserMenu}>
      {props.isLoggedIn ? settings.map((setting, index) => <MenuItem key={index} onClick={() => {
        props.handleUserDetails(setting.slug);
      }}>
        <Typography textAlign="center">{setting.title}</Typography>
      </MenuItem>) : notLoggedInSettings.map((setting, index) => <MenuItem key={index} onClick={() => {
        props.handleUserDetails(setting.slug);
      }}>
        <Typography textAlign="center">{setting.title}</Typography>
      </MenuItem>)}

      {props.isLoggedIn ? <MenuItem onClick={props.handleLogout}>
        <Typography textAlign="center">Logout</Typography>
      </MenuItem> : ""}
    </Menu>
  )
}
