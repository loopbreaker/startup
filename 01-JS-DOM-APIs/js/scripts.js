// Exercise 4
function fadeMeIn() {

	$('#hidden-section').fadeIn(1500);
}

//Exercise 6
function getJoke() {

  let request = new XMLHttpRequest();
  request.onload = function() {

    if (request.readyState === request.DONE && request.status === 200) {

      let jsonResponse = JSON.parse(request.response);
      $('#hidden-section').html('<p>' + jsonResponse.value.joke + '</p>');
    }
    
  };

	request.open('GET', 'http://api.icndb.com/jokes/random');
	request.send();
}

// Exercise 7
function ajaxCall(config) {

  let promise = new Promise(function (resolve, reject) {

    let request = new XMLHttpRequest();
    request.onload = function() {

      if (request.readyState === request.DONE && request.status === 200) {
        // Promise fulfilled
        resolve(request.response);
      }
      else {
        // Promise rejected
        reject(request.statusText);
      }
    };

    request.open('GET', config);
    request.send();

  });

  return promise;
}

// Exercise 8
function jokeHook() {
  let promise = ajaxCall('http://api.icndb.com/jokes/random');

  promise.then(
    function (value) {
      let jsonResponse = JSON.parse(value);
      $('#hidden-section').html('<p>' + jsonResponse.value.joke + '</p>');

    },
    function (reason) {
      console.error('Error: ' + reason);
      $('#hidden-section').css("background-color", "#FF0000");
      $('#hidden-section').css("color", "#FFFFFF");
    }
  );

}

// Exercise 9
function repositories(args) {
  let promise = ajaxCall('https://api.github.com/search/repositories?q=\'' + args + '\'');

  promise.then(
    function (value) {
      let jsonResponse = JSON.parse(value);
      let length;
      let items;
      let i;
      
      // Log the service response in console
      //console.log(jsonResponse);

      items = [];
      length = jsonResponse.items.length;

      for (i = 0; i < length ; i++) {
        items[i] = jsonResponse.items[i].full_name;
      }

      // If no repo found do not print out
      if (length !== 0) {
        $('#repo-placeholder').html('<ul><li>' + items.join('</li><li>') + '</li></ul>');
      }

    },
    function (reason) {
      console.error('Error: ' + reason);
    }
  );
}

// Exercise 12
function outputDomTable(matrix) {

  let table;
  let tr;
  let td;
  let txt;
  let i;
  let j;
  
  table = document.createElement('table');

  for (i = 0; i < matrix.length ; i++ ) {
    tr = document.createElement('tr');
    table.appendChild(tr);

    for (j = 0; j < matrix[i].length ; j++ ) {
      td = document.createElement('td');
      txt = document.createTextNode(matrix[i][j]);
      td.appendChild(txt);
      tr.appendChild(td);
    }
  }

  return table;
}

// Event hooking
$(window).load(fadeMeIn);
$('#joke-btn').on('click', jokeHook);

// Hook for Exercise 10
$('#search-box').on(
  'change', 
  function() {
    repositories($('#search-box').val());
  }
);

// Setup for exercise 12
let matrix = [];
let domTable;
let rows = 8;
let cols = 20;
let i;

for (i = 0; i < rows; i++) {
  matrix[i] = [];
  
  for (j = 0; j < cols; j++) {
    // Some random kanji katakana chars as in The Matrix code =P
    matrix[i][j] = String.fromCharCode(Math.floor(Math.random() * (0x30ff - 0x30a0 + 1)) + 0x30a0);
  }
}

domTable = outputDomTable(matrix);
document.getElementById('table-placeholder').appendChild(domTable);
