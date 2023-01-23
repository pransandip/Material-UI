import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import { Box, width } from '@mui/system'
import React, { useState } from 'react'


const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}))

const Navbar = () => {

  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>SANDY</Typography>
        {/* 'display' property belongs to 'Box' component, not the Icon component.. I.e. the Icon must be wrapped in the Box component. */}
        <Box><Pets sx={{ display: { xs: "bloc", sm: "none" } }} /></Box>
        <Search sx={{ marginLeft:"-25%" }}><InputBase placeholder="search..." /></Search>
        <Icons>
          <Badge badgeContent={10} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} alt="Sandy Ry" src='https://avatars.githubusercontent.com/u/15196320?s=400&u=52a385c466fb70f43df7bf35b49798321288da64&v=4' onClick={e => setOpen(true)} />
        </Icons>
        <UserBox onClick={e => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} alt="Sandy Ry" src='https://avatars.githubusercontent.com/u/15196320?s=400&u=52a385c466fb70f43df7bf35b49798321288da64&v=4' />
          <Typography variant='span'>Sandy</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar