import React from "react";
import Head from 'next/head'
import { compose } from "redux";
import withApollo from "../lib/with-apollo";
import { withRedux } from "../lib/redux";
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './style.styl';

function Home() {
  return (
    <div className="number-analysis">
      <Head>
        <title>數字驗證網站</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <div>
      <AppBar position="fixed" >
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            手機數字磁場分析
          </Typography>
        </Toolbar>
      </AppBar>
        <Grid container justify="center">
          <div className="phone">
            <div className="speaker"><div className="front-camera" /></div>
            <div className="screen">
              <Typography variant="subtitle1" gutterBottom>
                當您申購電話、大哥大、車牌....等等，號碼確定時，即已注定您未來運勢，是好？是壞？是吉？或凶？一目了然，因此，千萬疏忽不得。數字號碼顯現吉凶禍福，若能進而轉號開運，則歧嶇鋪平，宏業大展。
              </Typography>
              <TextField id="outlined-basic" label="輸入您的手機號碼" variant="outlined" />
              <Button variant="contained">馬上測試</Button>
            </div>
            <div className="home"></div>
          </div>
        </Grid>
        <footer>
          Version 2.5, Power by YPL.
        </footer>
      </div>
    </div>
  );
}

export default compose(withRedux, withApollo)(Home);