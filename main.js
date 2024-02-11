document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var nome = document.getElementById('nome').value.trim();
    var cognome = document.getElementById('cognome').value.trim();
    var email = document.getElementById('email').value.trim();
    var eta = document.getElementById('eta').value.trim();
    var compleanno = document.getElementById('compleanno').value.trim();
  
    var nomeError = document.getElementById('nomeError');
    var cognomeError = document.getElementById('cognomeError');
    var emailError = document.getElementById('emailError');
    var etaError = document.getElementById('etaError');
    var compleannoError = document.getElementById('compleannoError');
  
    var isValid = true;
  
    // Regex rules:
    /* /..../ inizio e fine di una regex
       /^.../ controlla l'inizio della stringa
       /...$/ controlla la fine della stringa
       /[a-zA-Z]/ controlla il range all'interno delle parentesi
       /[^.....]/ controlla tutti i caratteri non nel range
       \d prende una cifra
       \s prende spazi, tab, line break
       + concatena
    */
    var nomeRegex = /^[a-zA-Z]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var etaRegex = /^\d+$/;
    var compleannoRegex = /^\d{4}-\d{2}-\d{2}$/;
  
    if (!nomeRegex.test(nome)) {
      nomeError.textContent = 'Please enter a valid first name.';
      isValid = false;
    } else {
      nomeError.textContent = '';
    }
  
    if (!nomeRegex.test(cognome)) {
      cognomeError.textContent = 'Please enter a valid last name.';
      isValid = false;
    } else {
      cognomeError.textContent = '';
    }
  
    if (!emailRegex.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    } else {
      emailError.textContent = '';
    }
  
    if (!etaRegex.test(eta)) {
      etaError.textContent = 'Please enter a valid age.';
      isValid = false;
    } else {
      etaError.textContent = '';
    }
  
    if (!compleannoRegex.test(compleanno)) {
      compleannoError.textContent = 'Please enter a valid date of birth (YYYY-MM-DD).';
      isValid = false;
    } else {
      compleannoError.textContent = '';
    }
  
    if (isValid) {
      this.submit();
    }
  });