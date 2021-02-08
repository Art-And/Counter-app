
export const getImage = async() => {
  try {
    const APIKey = 'DA3byHL6kVXE4c6NV1vk7y4FY075ge4Z';
    const resp = await fetch(`http://api.giphy.cm/v1/gifs/random?api_key=${APIKey}`);
    const { data } = await resp.json();
    const { url } = data.images.original;

    console.log(url);
    return url;

/*     const img = document.createElement('img');
    img.src = url;
    document.body.append(img); */
  } catch (error) {
    //console.error(error);
    return 'No existe';
  }
};

