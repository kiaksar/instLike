import {
  Box,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  IconButton,
  TextField,
  Grid,
  Typography,
  Stack,
  Skeleton,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react'

function Comment(props) {
  const [commentObject, setCommentObject] = useState({
    loading: false,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.`,
    userName: 'UserName',
    userImage: '',
  })
  return (
    <>
      {commentObject.loading && (
        <Stack spacing={1} sx={{ flexDirection: 'row', p: 2 }}>
          <Skeleton variant='circular' width={40} height={40} />
          <Skeleton
            variant='text'
            sx={{
              fontSize: '1rem',
              display: 'flex',
              flexGrow: 1,
              ml: '16px!important',
              mt: '0px!important',
            }}
          />
        </Stack>
      )}
      {!commentObject.loading && (
        <Grid
          container
          alignItems='flex-start'
          sx={{ p: 2, flexWrap: 'nowrap' }}
          spacing={1}
        >
          <Grid item sx={{ mr: 0 }}>
            <Avatar alt='Remy Sharp' src='' />
          </Grid>
          <Grid item sx={{ flexGrow: 1 }}>
            <Typography
              variant='button'
              sx={{ display: 'inline', mr: 0.5, textTransform: 'none', fontWeight: "600" }}
            >
              {commentObject.userName}:
            </Typography>
            <Typography variant='body2' sx={{ display: 'inline' }}>
              {commentObject.text}
            </Typography>
          </Grid>
          <Grid item>
            <DeleteIcon />
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default Comment
