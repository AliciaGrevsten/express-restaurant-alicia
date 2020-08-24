$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "/data",
    dataType: "json",
  }).done(function (data) {
    $("#name").append(data.name);
    document.getElementById("resImage").src = "/assets" + data.image;
    $("#location").append(data.location);
    $("#description").append(data.description);
    $("#avgRating").append(data.avgRating);

    const reviews = data.reviews;

    reviews.forEach((review) => {
      $("#reviews").append(
        `<tr>
            <td>${review.user}</td>
            <td>${review.rating}</td>
            <td>${review.review}</td>
        </tr>`
      );
    });
  });
});
