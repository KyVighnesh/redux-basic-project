import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import {decrementBy10000} from './Slice/counterSlice'
import {decrementBy5000} from './Slice/counterSlice'


const Mainapp = () => {

  const dispath = useDispatch()


  const OnHandleClickdeplete10000 = ()=> {
    dispath(decrementBy10000())
  }

  const OnHandleClickdeplete5000 = ()=> {
    dispath(decrementBy5000())
  }



  const globalBalance = useSelector((state)=> {
    return state.counterReducer.value
  })




  
  return (
    <div>
        <div>
          <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">

        <div style={{position:'relative', top:20,height:5}}>

            <div style={{borderRadius:'50%', height:70, width:70, margin:'auto'}}>

              <img style={{borderRadius:'50%', height:'inherit', width:'inherit'}} src="https://th.bing.com/th/id/OIP.yh5tI6JVosofOhznWcn-8gAAAA?pid=ImgDet&rs=1" alt="" /> 
            </div>

            <h5>Hello Linda</h5>

        </div>
        <Box sx={{ bgcolor: 'rgba(255, 99, 71, 0.5)', height: '30vh' }} />
      </Container>
    </React.Fragment>
    </div>
    <div>
          <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '40vh' }} />
    <div style={{position:'relative',top:-150, display:'flex',justifyContent:'space-evenly'}}>
    <Button onClick = {OnHandleClickdeplete10000} variant="outlined">Withdraw $10000</Button>
<Button onClick = {OnHandleClickdeplete5000} variant="outlined">Withdraw $5000</Button>
</div>
    



      </Container>
    </React.Fragment>
    </div>
    <Card sx={{ width: 400,height:"20vh",margin:'auto',position:'relative',top:-390 }}>
      <CardContent>
        
        <Typography variant="body2" style={{fontSize:40}}>
          ${globalBalance}
        </Typography>
      </CardContent>
      <CardActions>
        <h4 style={{margin:'auto'}} size="small">Total Balance</h4>
      </CardActions>
    </Card>
    
    </div>
  )
}

export default Mainapp