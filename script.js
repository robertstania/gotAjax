$(document).ready(function() {
  var charArr = ['Daenerys Targaryen', 'Arya Stark', 'Jon Snow', 'Marie Walker'];

  for (let i = 0; i < charArr.length; i++) {
    $.get(('https://www.anapioficeandfire.com/api/characters?name=' + charArr[i]), function(data) {
      if (!data) {
        console.log('Character ' + charArr[i] + ' not found');
      } else {
        console.log(data);
        // create a div
        // put the name and gender that we are currently looping through into that div. 
      }
    })
  }
})

