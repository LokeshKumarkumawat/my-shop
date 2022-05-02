import { AppBar, Container, Typography } from '@mui/material'
import Head from 'next/head'
import useStyles from '../utils/styles';

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>MyShop</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Typography>mySHop</Typography>
            </AppBar>

            <Container className={classes.main}>
                {children}
            </Container>

            <footer className={classes.footer}>
                <Typography>All rights reserved. MyShop.</Typography>
            </footer>
        </div>
    )
}

export default Layout