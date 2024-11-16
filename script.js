function dataFetch() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        return xhr.readyState;
      }


        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(`Error is : ${xhr.status} , ${xhr.statusText}`);
        }
      }
    ;

    xhr.send();
  });
}




dataFetch()
  .then((data) => {console.log("Users:", data);
  }).catch((error) => {console.error(error);});
