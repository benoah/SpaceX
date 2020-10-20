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
    const rocketContainer = document.querySelector(".rocket");
    // declare a vairable to hold the HTML we will create
    let html = "";
    // loop through each using a for loop
    for (let i = 0; i < rocket.length; i++) {
        // console.log(rocket[i].rocket_name);
        console.log(rocket);

        // add the new HTML string to the existing HTML string
        html += `
        <div class="page-content">
        <div class="card">
        <img src="${rocket[i].flickr_images}" alt="">

        <div class="content">

          <h2 class="title">${rocket[i].rocket_name}</h2>
        
          <button class="btn">Links</button>
      </div>
      </div>
  </div>`;
    }
    // assign the new HTML string to the innerHTML property of Container
    rocketContainer.innerHTML = html;
}


/*




<div class = "flex">
     <img class = "designImage" src="${rocket[i].flickr_images}" alt="">
     <div class ="sameLine">

     <p> <a href="details.html?rocket_name=${rocket[i].rocket_id}">Links..</a><p>
     </div>
    </div>



<main class="page-content">
  <div class="card">
      <div class="content">
          <h2 class="title">Mountain View</h2>
          <p class="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
          <button class="btn">View Trips</button>
      </div>
  </div>
  <div class="card">
      <div class="content">
          <h2 class="title">To The Beach</h2>
          <p class="copy">Plan your next beach trip with these fabulous destinations</p>
          <button class="btn">View Trips</button>
      </div>
  </div>
  <div class="card">
      <div class="content">
          <h2 class="title">Desert Destinations</h2>
          <p class="copy">It's the desert you've always dreamed of</p>
          <button class="btn">Book Now</button>
      </div>
  </div>
  <div class="card">
      <div class="content">
          <h2 class="title">Explore The Galaxy</h2>
          <p class="copy">Seriously, straight up, just blast off into outer space today</p>
          <button class="btn">Book Now</button>
      </div>
  </div>
</main>*/