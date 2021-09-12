const form = document.querySelector("#search");
form.addEventListener("submit", async (evt) => {
  evt.preventDefault();
  //   console.dir(form);
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  //   const res = await axios.get(
  //     `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  //   );
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  makeImages(res.data);
  form.elements.query.value = "";
  //   const imageUrl = res.data[0].show.image.medium;
  //   console.log(imageUrl);
  //   const img = document.createElement("img");
  //   img.src = imageUrl;

  //   document.body.append(img);

  // https://api.tvmaze.com/search/shows?q=girls
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
