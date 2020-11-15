const getImage = async () => {
  try {
    const api_key = "w6Qg6ulrmwcZrFHFem8AC2MTENnLadTS";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    );
    const { data } = await resp.json();

    const { url } = await data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (err) {
    //manejo del error
    console.log(err);
  }
};

getImage();
