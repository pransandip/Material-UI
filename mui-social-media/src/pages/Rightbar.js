import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography varient="h6" fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={5}>
          <Avatar alt="Krish" src="https://www.businessinsider.in/photo/22989369.cms" />
          <Avatar alt="Ra One" src="https://imagevars.gulfnews.com/2011/5/9/1_16a080474a8.805367_2113048204_16a080474a8_large.jpg" />
          <Avatar alt="Saktiman" src="https://www.animationkolkata.com/blog/wp-content/uploads/2016/09/SHAKTIMAAN_2.jpg" />
          <Avatar alt="Nagraj" src="https://upload.wikimedia.org/wikipedia/en/4/49/Angry_Nagraj.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography varient="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography varient="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>             
      </Box>
    </Box>
  )
}

export default Rightbar