const gifForm = $("#gif-form");

gifForm.submit(e => {
  e.preventDefault();
  const searchTerm = $(".search").val();
  const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=RFXH6dYTaB8KqYtsXqAUUbTqWzPxBpFJ&limit=80`;
  $.get(url)
    .done(resp => {
      showGiphs(resp.data.slice(0, 40));
    })
    .fail(console.log);
});

function showGiphs(dataArray) {
  const results = document.querySelector(".results");
  let output = "";
  output = dataArray
    .map(
      imgData =>
        `<a href="${imgData.images.original.url}" alt="${
          imgData.title
        }" target="_blank"><img src="${imgData.images.original.url}"></a>`
    )
    .join("");
  $(".results").html(output);
}

// ${searchTerm}