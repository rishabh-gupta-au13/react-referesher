import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { useState } from 'react';


function NewPost(props) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function changeBodyHandler(event) {

        setEnteredBody(event.target.value)
      




    }
    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value)


    }
    function submitHandler(event){
        event.preventDefault();
        const postData={
            body:enteredBody,
            author:enteredAuthor
        };
        console.log(postData)
        props.onAddPost(postData)
        props.onCancel()
       





    }

    
    return (
        <Modal>
        <form className={classes.form} onSubmit={submitHandler}>

            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={changeBodyHandler} />
            </p>
           
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={changeAuthorHandler} />
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={props.onCancel} >Cancel</button>
                <button>Submit</button>
            </p>
          
        </form>
        </Modal>
    );
}

export default NewPost;