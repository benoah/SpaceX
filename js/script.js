const baseUrl = "https://api.spacexdata.com/v3/";
const rocketsUrl = `${baseUrl}rockets/`;

// the function must be marked as async
async function fetchRockets() {
    try {
        // use await when calling fetch
        const response = await fetch(rocketsUrl);
        // use await when resolving the returned value, which is a promise
        const rocket = await response.json();
        // pass the array of elephants to the displayElephants function
        displayRockets(rocket);
    } catch (error) {
        console.log(error);
    }
}
fetchRockets();

function displayRockets(rocket) {
    const rocketContainer = document.querySelector(".page-content");
    let html = "";
    for (let i = 0; i < rocket.length; i++) {
        html += `
        <div class="card" >
         <div class="content">
        <h2 class="title">${rocket[i].rocket_name}</h2>
        <p class="copy">${rocket[i].description}</p>
        <button class="btn">See More</button>
        </div>
  </div> `
    }
    rocketContainer.innerHTML = html;

}




/*



      <img src="${product.image} " alt="">
        <div class="content ">
        <h2 class="title">${rocket.rocket_name}</h2>
        <p class="copy">${rocket.description}</p>
        <button class="btn">View Trips</button>
</div>

  const rocketContainer = document.querySelector(".grid");
    // declare a vairable to hold the HTML we will create
    let html = "";
    // loop through each using a for loop
    for (let i = 0; i < rocket.length; i++) {
      // console.log(rocket[i].rocket_name);

      if (!rocket[i].rocket_name) {
        // continue will skip the remaining code and return to the top of the loop
        continue;
      }
      // add the new HTML string to the existing HTML string
      html += `< div class = "flex" >
            <img class="designImage" src="${rocket[i].flickr_images}" alt="">
                <div class="sameLine">
                    <p>${rocket[i].rocket_name}</p>
                    <p> <a href="details.html?rocket_name=${rocket[i].rocket_id}">Links..</a><p>
     </div>
    </div>`;
    }
    // assign the new HTML string to the innerHTML property of Container
    rocketContainer.innerHTML = html;















async function fetchRockets() {
    try {
        // use await when calling fetch
        const response = await fetch(rocketsUrl);
        // use await when resolving the returned value, which is a promise
        const rocket = await response.json();
        // pass the array of elephants to the displayElephants function
        createDetails(rocket);
    } catch (error) {
                        console.log(error);
    }
}
fetchRockets();








/* <div class="card">
                        <div class="content">
                            <h2 class="title">Mountain View</h2>
                            <p class="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it,
         the mountains</p>
                            <button class="btn">View Trips</button>
                        </div>
                    </div>*/