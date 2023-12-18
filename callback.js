const req=new XMLHttpRequest();

req.responseXML('GET','https://jsonplaceholder.typicode.com/todos/1')
req.send();
