import React from 'react';
import "./../style/form.css"

const ForgotPass = () => {
    return (
        <form action="http://127.0.0.1:8000/api/forgotpass" method="post">
            <h1>Mot de passe oublié</h1>
            <br/>
            <div>
                <label htmlFor="mail">Veuillez entrer votre adresse email</label><br/>
                <input type="email" id="mail" name="email" required/>
            </div>
            <br/>
            <input type="submit" value="Entrer"/>
        </form>
    );
};

export default ForgotPass;