import React from 'react';

const UpdatePass = () => {
    return (
        <form action="http://127.0.0.1:8000/api/update" method="post">
            <h1>Nouveau Compte</h1>
            <br/>
            <div>
                <label htmlFor="pass">Mot de passe</label><br/>
                <input type="password" id="pass" name="password" required/>
            </div>
            <br/>
            <div>
                <label htmlFor="conf_pass">Confirmez votre mot de passe</label><br/>
                <input type="password" id="conf_pass" name="password_confirmation" required/>
            </div>
            <br/>
            <input type="submit" value="Enregistrer"/>
        </form>
    );
};

export default UpdatePass;