import React from 'react';
  
const Contact = () => {
  return (
    <div className='formulaire'>
      <form className='contact' action="action_page.php">
        <h1>FORMULAIRE</h1>
        <label for="fname">Prénom</label>
        <input type="text" id="fname" name="firstname" placeholder="Ton Prénom..."/>
        <label for="lname">Nom</label>
        <input type="text" id="lname" name="lastname" placeholder="Ton nom..."/>
        <label for="lname">Mail</label>
        <input type="text" id="lname" name="lastname" placeholder="Marco@mail.com"/>
        <label for="country">Pays</label>
        <select id="country" name="country">
          <option value="France">France</option>
          <option value="Belgique">Belgique</option>
          <option value="Suisse">Suisse</option>
        </select>

        <label for="subject">Message</label>
        <textarea id="subject" name="subject" placeholder="Ton Message..."></textarea>

        <input type="submit" value="Envoyer"/>
      </form>
    </div>
  );
};
  
export default Contact;