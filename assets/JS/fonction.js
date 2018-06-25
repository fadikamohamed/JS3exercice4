//Déclaration de la fonction verifPassword
function verifPassword() {
  //Déclaration des variables
  pass = document.getElementById('password').value;
  confirmPass = document.getElementById('confirmPassword').value;
  //Déclaration de la condition
  if (pass == confirmPass) {
    //Application des effets de bordure
    document.getElementById('password').style.border = '3px solid green';
    document.getElementById('confirmPassword').style.border = '3px solid green';
  } else {
    //Application des effets de bordure
    document.getElementById('password').style.border = '3px solid red';
    document.getElementById('confirmPassword').style.border = '3px solid red';
    }
}
//Déclaration de la fonction securite
function securite() {
  //Déclaration du regex
  regexMotDePasse = /^[\w]{5,}[\']*[éèàçêëâäûùüöô]*/;
  //Déclaration de la condition et test de des valeurs
  if (regexMotDePasse.test(pass && confirmPass)) {
    //Si valider il ne se passe rien
  } else {
    //Message d'érreur
    alert('Entré non valide' + '\nMinimun 5 caracteres !');
  }
}
