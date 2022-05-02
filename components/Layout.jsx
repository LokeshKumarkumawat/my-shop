import { AppBar, Container ,Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <Head>
            <title>MyShop</title>
        </Head>
        <AppBar position="static">
            <Typography>mySHop</Typography>
        </AppBar>

        <Container>
            {children}
        </Container>

        <footer>
            <Typography>All rights reserved. MyShop.</Typography>
        </footer>
    </div>
  )
}

export default Layout