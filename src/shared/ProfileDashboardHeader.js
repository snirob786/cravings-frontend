import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'

export default function ProfileDashboardHeader(props) {
  let isLoggedIn = props.isLoggedIn
  let handleLogout = props.handleLogout
  let user = props.user

  useEffect(() => {
    console.log("user: ", user?.name);
  }, [user])
  return (
    <>
      <Container>
        {/* <img></img> */}
        <Typography variant='p' className='font-bold'>{user?.name}</Typography>
      </Container>
    </>
  )
}
