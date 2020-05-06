//Working jQuery Code
const gifForm = $("#gif-form");
gifForm.submit(e => {
    e.preventDefault();
    const searchTerm = $(".search").val();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Ab2k8Getoartsbv2vWXQ22MNQ7c6Ip10&q=${searchTerm}&limit=25&offset=0&rating=G&lang=en`;
    $.get(url)
        .done(resp => {
            showGiphs(resp.data.slice(0, 10));
        })
    .fail(console.log);
});

//Working jQuery Code
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