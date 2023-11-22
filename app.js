// Progression 1: create a function and fetch the api using axios

const getData = async () => {
  let data = await axios.get(
    'https://gnews.io/api/v4/search?q=example&apikey=043dedf0a244b69b514b2be9c80ae2f4'
  );
  data = data.data;
  let articles = data.articles;

  // console.log(articles);
  // console.log(data);

  articles.forEach((article) => {
    let box = document.createElement('div');
    box.classList = 'article';

    let title = document.createElement('h1');
    let img = document.createElement('img');
    let desc = document.createElement('p');

    title.innerHTML = article.title;
    img.setAttribute('src', article.image);
    desc.innerHTML = article.description;

    box.append(title, img, desc);
    document.querySelector('#container').append(box);
  });
};

getData();
