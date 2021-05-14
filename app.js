let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);

//remove the last string of the array secretMessage
secretMessage.pop();
console.log(secretMessage.length);

// add the words 'to' and 'Program' to the end
secretMessage.push('to', 'Program');
console.log(secretMessage);

//change a word by accessing the index and replacing it
secretMessage.splice(secretMessage.indexOf('easily'), 1, 'right');
//replace 1 element 
console.log(secretMessage);

// remove the first string of the array
secretMessage.shift();
console.log(secretMessage);

//add the string Programming to the beginning of the array.
secretMessage.unshift('Programming');
console.log(secretMessage);

//remove the strings 'get, right, the, first, time', 
//replace them with the single string 'know,'
secretMessage.splice(secretMessage.indexOf('get'), 5, 'know,');

//print the secret message as a sentence
console.log("The secret message is: " + secretMessage.join(" "));