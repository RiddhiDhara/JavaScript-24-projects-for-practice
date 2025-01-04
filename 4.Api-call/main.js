const postsListContainer = document.querySelector(".posts-list-container");

// fetch using XHR

function fetchUsingXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);
      displayOnHtml(xhr.response);
    } else {
      console.log("Error Occured!!");
    }
  };
}

// fetch using fetch method

function fetchUsingFetchMethod() {
  const fetchValue = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  console.log(fetchValue);

  fetchValue
    .then((response) => {
      return response.json();
    }) // this syntax is same as
    .then((value) => displayOnHtml(value)) // this syntax
    .catch((error) => console.log(error));
}

// fetch using async - await

async function fetchUsingAsyncAwait() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  const responseJson = await response.json();
  try {
    if (responseJson) {
      displayOnHtml(responseJson);
      console.log("data fetched successfuully!!");
    } else {
      console.log("unsuccessful!!");
    }
  } catch (error) {
    console.log(error);
  }
}

// fetch using async-await and xhr
 
 async function fetchUsingXHRAndAsyncAwait(){
 
     const response = await helperMethod('GET', "https://jsonplaceholder.typicode.com/posts");
     displayOnHtml(response)
     console.log('====================================');
     console.log(response);
     console.log('====================================');
 }

//===========================================================================================

// display result function

function displayOnHtml(value) {
  postsListContainer.innerHTML = value
    .map(
      (item) =>
        `
        <div class="postItem">
        <h3 class="postItemTitle">${item.title}</h3>
        <p class="postItemBody">${item.body}</p>
        </div>
        `
    )
    .join(" ");
}

// helper function 

function helperMethod(method, url){
  const promise = new Promise((resolve,reject)=> {
     const xhr = new XMLHttpRequest();
     xhr.open(method,url);
     xhr.responseType = 'json';
     xhr.send();
 
     xhr.onload = ()=> {
         if(xhr.status === 200){
             resolve(xhr.response)
         } else {
             reject(xhr.response)
         }
     }
  })
  
  return promise;
 }

//=========================================================================================

// function calls

// fetchUsingXHR();
// fetchUsingFetchMethod();
// fetchUsingAsyncAwait();
fetchUsingXHRAndAsyncAwait();

