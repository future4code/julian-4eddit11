import styled from 'styled-components'
import { TextField } from '@material-ui/core'




export const LoginContainer = styled.div`
display:flex;
flex-direction: column;
width  :100%;
justify-content: center;
align-items: center;


`
export const LoginForm = styled.form`
  display: grid;
  grid-row-gap: 15px;
  margin-top:100px;
  margin: 10px auto;
 
`

export const LoginImg = styled.img`

width  : 300px;
margin: 40px 0;

`

export const LoginInput = styled(TextField)`
width:300px;

`
export const LoginTextSpan = styled.div`
margin-top: 10px;
font-size: 14px;



`

export const SpanClique = styled.span`
font-size: 12px;
text-transform: uppercase;
cursor:pointer;

`
