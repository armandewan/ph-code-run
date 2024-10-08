// fetch add 
// create load api, display api

const loadCategories =() => {
    fetch ('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error))
}
// category: "Music"
// category_id: "1001"
const displayCategories =(categories) => {
    const categoryContainer = document.getElementById("category-btn");
    categories.forEach((item) => {
        console.log(item)
        // create button
        
        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = item.category;
        categoryContainer.append(button);
    });
}

// const formate =authors: Array [ {…} ]
// ​
// category_id: "1001"
// ​
// description: "Ethan Clark's 'Colors of the Wind' is a vibrant musical exploration that captivates listeners with its rich, expressive melodies and uplifting rhythm. With 233K views, this song is a celebration of nature's beauty and human connection, offering a soothing and enriching experience for fans of heartfelt, nature-inspired music."
// ​
// others: Object { views: "233K", posted_date: "16090" }
// ​
// thumbnail: "https://i.ibb.co/hY496Db/coloer-of-the-wind.jpg"
// ​
// title: "Colors of the Wind"
// ​
// video_id: "aaah"

const loadVideos = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .catch(error => console.log(error))
}
const displayVideos = (videos) => {
    const videosContainer = document.getElementById("videoScript");
    videos.forEach((video) => {
        console.log(video);
        const card = document.createElement ('div');
        card.classList ="";
        card.innerHTML=`
         <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">"${video.title}"</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
        `;
        videosContainer.append(card);

    })
}




loadCategories();
loadVideos();