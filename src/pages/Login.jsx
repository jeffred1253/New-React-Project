import axios from "axios";
import React from "react";
import { NavLink } from 'react-router-dom';
import "./../style/form.css"

/*const config = {
    headers:{
        Authorization: 'Bearer ' + localStorage.getItem('token')
    }
}*/

const Login = () => {
    async function submit(email, password){
        console.log(email.value, password.value)
        await axios.post("http://127.0.0.1:8000/api/login", {
          email: email.value,
          password: password.value,
        })
        .then((response)=>{
            localStorage.setItem("token", response.data.token);
            //router.push({path:'/protected-page'});
        })
        .catch(error => console.log(error));
    }

    return (
      <form action="http://127.0.0.1:8000/api/login" method="post">
        <h1>Connexion</h1>
        <br />
        <div>
          <label htmlFor="mail">Email</label>
          <br />
          <input type="email" id="mail" name="email" required />
        </div>
        <br />
        <div>
          <label htmlFor="pass">Mot de passe</label>
          <br />
          <input type="password" id="pass" name="password" required />
        </div>
        <br />
        <input
          type="submit"
          value="Entrer"
          //onSubmit={submit(email.value, password.value)}
        />
        <NavLink to="/forgotpass">Mot de passe oublié ?</NavLink>
      </form>
    );
};

export default Login;