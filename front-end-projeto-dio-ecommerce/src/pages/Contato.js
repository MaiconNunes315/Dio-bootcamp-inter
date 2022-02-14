import {useEffect, useState} from 'react'

import { Grid,TextField,Button } from '@mui/material';
import {Card} from 'react-bootstrap'

function Contact(){

    const url = 'http://localhost:5000/contact'
    
     const [author, setAuthor] = useState('');
     const [name, setName] = useState('');
     const [content, setContent] = useState('');
     const [validator, setValidator] = useState(false);
    const [render, setRender] = useState(false);
    const [success, setSuccess] = useState(false);

    const [message, setMessage] = useState([]);

    useEffect(()=>{
        async function fetchData(){ 
                const response = await fetch(url);
                const data = await response.json();
                setMessage(data.data);  
            }
            fetchData();
    },[render]);

   

    const sendMessage = () => {
        setValidator(false);
        if(author.length <= 0 || content.length <= 0 || name.length <= 0){
            return setValidator(!validator)
        }
        const bodyForm = {
            Nome: name,
            Email: author,
            Message: content,
        }

        fetch('http://localhost:5000/add-contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyForm)
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.id) {
                setRender(true);
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 2000)
            }
        })
        setName('');
        setAuthor('');
        setContent('');
        
        console.log(content)
    }  

    return(
        <div className='contact'>
            <Grid container className='mt-3' direction="row">
                <p>É nosso cliente? Deixe sua opnião!</p>
                <TextField className="mb-2" id="name" label="Name" value={name} onChange={(event)=>{setName(event.target.value)}} fullWidth/>
                <TextField className="mb-2" id="Email" label="Email" value={author} onChange={(event)=>{setAuthor(event.target.value)}} fullWidth/>
                <TextField id="message" label="Message" value={content} onChange={(event)=>{setContent(event.target.value)}} fullWidth/>
            </Grid>

            {validator && 
                <div className="alert alert-warning alert-dismissible fade show mt-2" role="alert">
                    <strong>Por favor preencha todos os campos!</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }

            {success && 
                <div className="alert alert-success alert-dismissible fade show mt-2" role="alert">
                    <strong>Mensagem foi enviada</strong>
                </div>
            }

            <Button onClick={sendMessage} className="mt-2" variant="contained" color="primary">
                Enviar
            </Button>

            {message.map((content)=>{
                
          return(
            <div>
                <Card className=" mt-2" key={content.id}>
                        <Card.Body >
                            <Card.Title className="card-title">{content.Nome}</Card.Title>
                            <Card.Text>{content.Message}</Card.Text>
                            <Card.Text><small className="text-muted">{content.createdAt}</small></Card.Text>
                        </Card.Body>
                </Card>
            </div>        
                            
                )
            })}
        </div>
    )
};

export default Contact;