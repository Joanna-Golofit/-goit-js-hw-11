import './sass/main.scss';


// https://pixabay.com/api/?key=23726584-b0725e8cc2245e4091c11b21f&q=yellow+flowers&image_type=photo&pretty=true

//////////////////////////////////////////////////
//  axios jest bardzo podobny do fetch

axios
  .get('https://jsonplaceholder.typicode.com/posts/1')
  .then(d => console.log(d.data))
  .catch(err => console.log(err));

console.log('oy');
//////////////////////////////////////////////////


const fetchPlaceholder = async () => {
  const postsJson = await fetch(
    'https://pixabay.com/api/?key=23726584-b0725e8cc2245e4091c11b21f&q=yellow+flowers&image_type=photo&pretty=true',
  );
  const posts = await postsJson.json();
  console.log(posts);
  const postId = posts[0].id;
  const postJson = await fetch(
    `https://pixabay.com/api/?key=23726584-b0725e8cc2245e4091c11b21f&q=${inputData}&image_type=photo&pretty=true`,
  );
  const post = await postJson.json();
  return post;
};

fetchPlaceholder()
  .then(d => console.log(d))
  .catch(err => console.log(err));