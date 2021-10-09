import axios from 'axios';
// robilam simplelightbox przez npm.. , odinstalowalam, probuje przez importy.. cos nie dziala ciagle i sie nie wyswietla
// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

const SearchForm = document.querySelector('form#search-form');
const inputSearch = document.querySelector("input[name='searchQuery']");
const gallery = document.querySelector('div.gallery');
const btnMore = document.querySelector('button.load-more');
let perPage = 40;
let page = 1;

// najpierw deklaracja asynchronicznej funkcji fetchPictures:
async function fetchPictures(inputSearchValue) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${inputSearchValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=10`,
    );
    // console.log('deklaracja fetchPictures response:', response); // dziala
    return response.data;
  } catch (error) {
    console.log('deklaracja fetchPictures ,async/await, error:', error.message);
  }
}

//  deklaracja asynchronicznej funkcji showPictures:

async function showPictures(e) {
  // zapobiega domyslnemu przeladowaniu strony po wyslaniu formularza:
  e.preventDefault();
  // łapie inputSearchValue :
  let inputSearchValue = inputSearch.value;
  //wyswietla to, co zlapalo:
  console.log('showData, inputSearchValue:', inputSearchValue);
  // wywołanie funkcji:
  fetchPictures(inputSearchValue)
    .then(respData => {
      console.log('wywolanie fetchPictures respData', respData); // dziala
      console.log('pod fetchPictures respData.hits', respData.hits);
      renderGallery(respData);
      btnMore.style.display = 'block';
      //powinno odpalic simplelightbox...
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    })
    .catch(error => console.log(error));
}

// //powinno odpalic simplelightbox...
//       const lightbox = new SimpleLightbox('.gallery a');

SearchForm.addEventListener('submit', showPictures);
/////////////////////////////////////////////

btnMore.style.display = 'none';

const q = 'cat dog';
const API_KEY = '23726584-b0725e8cc2245e4091c11b21f';

// deklaracja funkcji renderGallery do tworzenia znacznikow galerii w html:
const renderGallery = respData => {
  const markup = respData.hits
    .map(
      hit =>
        `<div class="photo-card">
        <a class="gallery__item" href=${hit.largeImageURL}>
      <img src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" />
      </a>
      <div class="info">
      <p class="info-item">
      <b>Likes</b> ${hit.likes}
      </p>
      <p class="info-item">
      <b>Views</b> ${hit.views}
      </p>
      <p class="info-item">
      <b>Comments</b> ${hit.comments}
      </p>
      <p class="info-item">
      <b>Downloads</b> ${hit.downloads}
      </p>
      </div>
      </div>`,
    )
    .join('');

  gallery.innerHTML = markup;
};

// let lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });

//*********************************************************************

/////////////// wyszukuje w API po inputSearchValue i dodatkowych kryteriach /////////////:
// axios
//   .get(
//     `https://pixabay.com/api/?key=${API_KEY}&q=${inputSearchValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=10`,
//   )
//   .then(response => {
//     console.log('inputSearchValue:', inputSearchValue);
//     console.log('response.data', response.data.hits[0]);
//     // page++;
//     console.log('page', page);
//     renderGallery(response);
//     btnMore.style.display = 'block';
//   })
//   .catch(err => console.log('Caught error:', err));
//////////////////////////////////////////

/////////////////// Want to use async/await? Add the `async` keyword to your outer function/method.///////////////
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
//////////////////////////////////////////////////

//////////////////// logi z axios.then////////////////////
// console.log('API_KEY', API_KEY); // dziala
// console.log('response:', response);
// console.log('response.data.hits', response.data.hits);
// response.data.hits.forEach(hit => console.log('hit', hit.previewURL));
// console.log('response.data.hits[0]', response.data.hits[0]);
// console.log('response.data.hits[1].pageURL', response.data.hits[1].pageURL);
// console.log('response.data.hits[2].pageURL', response.data.hits[2].pageURL);
////////////////////////////////////////////////////////////

//////////////////////z hw7 zad2////////////////////
// let gallerySL = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });

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

///////////////////async/await fetch potrzebny///////////////////////////////
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
//////////////////////////////////////////////////
