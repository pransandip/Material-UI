import { AccountBox, Article, Group, Home, ModeNight, Pages, Person, PersonOutline, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#Pages'>
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#sample-item'>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#sample-item'>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#sample-item'>
              <ListItemIcon>
                <PersonOutline />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#sample-item'>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#sample-item'>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#sample-item'>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar