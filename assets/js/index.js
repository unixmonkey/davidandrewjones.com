(function(){
  function rotate(str) {
    return str.replace(/[a-zA-Z]/g, function(char) {
      var charCode = (char <= "Z" ? 90 : 122) >= (char = char.charCodeAt(0)+13) ? char : (char-26)
      return String.fromCharCode(charCode);
    });
  }
  var contact = document.getElementById('contact');
  contact.href = rotate(contact.href);
})();
