import axios from 'axios';
// robilam simplelightbox przez npm.. to nie wiem co z tym css - chyba nie trzeba
// import 'simplelightbox/dist/simple-lightbox.min.css';

const SearchForm = document.querySelector("form#search-form");
const inputSearch = document.querySelector("input[name='searchQuery']");
const gallery = document.querySelector('div.gallery');
const btnMore = document.querySelector('button.load-more');
let perPage = 40;
let page = 1;

/////////////// łapie search value /////////////:
const showData = e => {
  e.preventDefault();
  let searchValue = inputSearch.value;
  console.log('showData, searchValue', searchValue);
};
// inputSearch.addEventListener('click', showData );

SearchForm.addEventListener('submit', showData);
/////////////////////////////////////////////

btnMore.style.display = 'none';

const q = "cat dog";
const API_KEY = "23726584-b0725e8cc2245e4091c11b21f";

// zeby przerzucic tu axios:
const fetchPicts = searchValue => {

}

  axios
  .get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`,
  )
  .then(response => {
    // console.log('searchValue:', searchValue);
    console.log('q:', q);
    console.log('API_KEY', API_KEY);
    console.log('response:', response);
    console.log('response.data', response.data);
    console.log('response.data.hits', response.data.hits);
    console.log('response.data.hits[0]', response.data.hits[0]);
    console.log('response.data.hits[1].pageURL', response.data.hits[1].pageURL);
    console.log('response.data.hits[2].pageURL', response.data.hits[2].pageURL);
    // page++;
    console.log('page', page);
  })
  .catch(err => console.log("Caught error:", err));;

const renderGallery = (data) => {
  const markup = data
    .map(d => {
      return `<div class="photo-card">
      <img src="" alt="" loading="lazy" />
      <div class="info">
        <p class="info-item">
          <b>Likes</b>
        </p>
        <p class="info-item">
          <b>Views</b>
        </p>
        <p class="info-item">
          <b>Comments</b>
        </p>
        <p class="info-item">
          <b>Downloads</b>
        </p>
      </div>
    </div >`;
    })
    
    
     .join('');
    gallery.innerHTML = markup;
  }


////////////////////pixabay//////////////////////////////
// Your API key: 23726584-b0725e8cc2245e4091c11b21f
// https://pixabay.com/api/?key=23726584-b0725e8cc2245e4091c11b21f&q=yellow+flowers&image_type=photo&pretty=true


////////////////////axios jest bardzo podobny do fetch, ale nie trzeba zmieniac danych z jsona na js//////////////////////////////
//z axios:
// import axios from 'axios';
// axios.get('/users').then(res => {
//   console.log(res.data);
// });


//z zajec
// axios
//   .get('https://jsonplaceholder.typicode.com/posts/1')
//   .then(d => console.log(d.data))
//   .catch(err => console.log(err));

// console.log('oy');
//////////////////////////////////////////////////

/////////////////////// Want to use async/await? Add the `async` keyword to your outer function/method./////////////////////
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
//////////////////////////////////////////////////


///////////////////async/await potrzebny///////////////////////////////
//deklaracja:
// const fetchPlaceholder = async () => {
//   const postsJson = await fetch(
//     'https://pixabay.com/api/?key=23726584-b0725e8cc2245e4091c11b21f&q=yellow+flowers&image_type=photo&pretty=true',
//   );
//   const posts = await postsJson.json();
//   console.log(posts);
//   const postId = posts[0].id;
//   const postJson = await fetch(
//     `https://pixabay.com/api/?key=23726584-b0725e8cc2245e4091c11b21f&q=${inputData}&image_type=photo&pretty=true`,
//   );
//   const post = await postJson.json();
//   return post;
// };

// wywołanie:
// fetchPlaceholder()
//   .then(d => console.log(d))
//   .catch(err => console.log(err));