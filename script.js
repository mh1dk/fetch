
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.onreadystatechange = function() {
  if (xhr.readyState !== 4){
    return xhr.readyState;
  }


  if (xhr.status === 200){
    console.log(JSON.parse(xhr.responseText));
  } else{
    console.log("erorr is:", xhr.status, xhr.statusText);
  }
};

xhr.send();