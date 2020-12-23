import React, { Component } from 'react'
import { Button, Grid, Paper, Typography, TextField, Select, MenuItem, FormControl } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import InputAdornment from '@material-ui/core/InputAdornment';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import google from './../src/docs/img/google.svg';
import yahoo from './../src/docs/img/yahoo.svg';
import linkedin from './../src/docs/img/linkedin.svg';
import iran from './docs/img/flag-1.png';
import germany from './docs/img/flag-2.png';

import './styles/login.scss';


export class App extends Component {
  render() {
    return (
      <div className='main'>
        <Paper className='form-box'>
          <Grid container direction="column" justify="center" alignItems="center" >
            <Grid container item justify="flex-end" xl={12} lg={12} md={12} sm={12} xs={12}>
              <IconButton>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Grid>
            <Grid container justify="center" item xl={12} lg={12} md={12} sm={12} xs={12}>
              {/* <img src={logo} /> */}
            </Grid>
            <Grid container justify="center" className="form-title" item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="h5">ورود به آگاپه</Typography>
            </Grid>
            <Grid container justify="center" justify="flex-end" item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="body1" className="p-number">شماره موبایل خود را وارد نمایید</Typography>
            </Grid>
            <Grid container justify="space-between" className="inputs-wrapper" item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid item xl={4} lg={4} md={5} sm={5} xs={5} >
                <FormControl fullWidth dir="rtl" >
                  <Select
                    className="form-input"
                    type="text"
                    variant="outlined"
                    fullWidth
                  >
                    <MenuItem value={1}>
                      <Grid container justify="space-around">
                        <Grid item xl={3} lg={3} md={2} sm={3} xs={3} >
                          <img className="flag" src={iran} />
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3} >
                          <Typography variant="body1" component="span" className="select-item-des">+98</Typography>
                        </Grid>
                        <Grid item xl={3} lg={3} md={6} sm={6} xs={9} >
                          <Typography variant="body1" component="span" className="select-item-des">ایران</Typography>
                        </Grid>
                      </Grid>
                    </MenuItem>
                    <MenuItem value={2} >
                      <Grid container justify="space-around">
                        <Grid item xl={3} lg={3} md={2} sm={3} xs={3} >
                          <img className="flag" src={germany} />
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3} >
                          <Typography variant="body1" component="span" className="select-item-des">+49</Typography>
                        </Grid>
                        <Grid item xl={3} lg={3} md={6} sm={6} xs={9} >
                          <Typography variant="body1" component="span" className="select-item-des">آلمان</Typography>
                        </Grid>
                      </Grid>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xl={7} lg={7} md={7} sm={7} xs={7} >
                <TextField
                  className="form-input"
                  type="text"
                  placeholder="091212345678"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" >
                        <PhoneOutlinedIcon color="disabled" />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
            <Grid container item xl={12} lg={12} md={12} sm={12} xs={12} >
              <Button variant="contained" className="enter-btn" color="primary" fullWidth size="large">ادامه</Button>
            </Grid>
            <Grid container item className="enter-des" xl={12} lg={12} md={12} sm={12} xs={12} >
              <Typography variant="body1" className="enter-des-p">
                <Typography variant="body1" className="enter-des-span" component="span">یا ورود با حساب های دیگر</Typography>
              </Typography>
            </Grid>
            <Grid container justify="space-between" item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid item className="btn-item" xl={3} lg={3} md={3} sm={3} xs={3} >
                <Button
                  variant="contained"
                  size="large"
                  className="l-btn"
                  fullWidth
                  endIcon={<img className='btn-logo' src={linkedin} />}
                >
                  Linkedin
                </Button>
              </Grid>
              <Grid item className="btn-item" xl={3} lg={3} md={3} sm={3} xs={3} >
                <Button
                  variant="contained"
                  size="large"
                  className="y-btn"
                  fullWidth
                  endIcon={<img className='btn-logo' src={yahoo} />}
                >
                  Yahoo
                </Button>
              </Grid>
              <Grid item className="btn-item" xl={3} lg={3} md={3} sm={3} xs={3} >
                <Button
                  variant="contained"
                  size="large"
                  className="g-btn"
                  fullWidth
                  endIcon={<img className='btn-logo' src={google} />}
                >
                  Google
                      </Button>
              </Grid>
            </Grid>
            <Grid item className="rolls" xl={12} lg={12} md={12} sm={12} xs={12} >
              <Typography variant="body1" align="center" className="rolls-p">
                با ورود به آگاپه شما
                <a href="#" className="rolls-a">قوانین و مقررات </a>
                استفاده از سرویس پلتفرم آگاپه را می پذیرید
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
  }
}

export default App
