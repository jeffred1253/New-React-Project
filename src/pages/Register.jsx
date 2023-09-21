import React from 'react';
import "./../style/form.css"

const Register = () => {
    
    return (
        <form action="http://127.0.0.1:8000/api/register" method="post">
            <h1>Nouveau Compte</h1>
            <br/>
            <div>
                <label htmlFor="name">Nom d'utilisateur</label><br/>
                <input type="text" id="name" name="name" required/>
            </div>
            <br/>
            <div>
                <label htmlFor="mail">Email</label><br/>
                <input type="email" id="mail" name="email" required/>
            </div>
            <br/>
            <div>
                <label htmlFor="pass">Mot de passe</label><br/>
                <input type="password" id="pass" name="password" required/>
            </div>
            <br/>
            <div>
                <label htmlFor="conf_pass">Confirmation du mot de passe</label><br/>
                <input type="password" id="conf_pass" name="password_confirmation" required/>
            </div>
            <br/>
            <input type="submit" value="Enregistrer"/>
        </form>
    );
};

export default Register;