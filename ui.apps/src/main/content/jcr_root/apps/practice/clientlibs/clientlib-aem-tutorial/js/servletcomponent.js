function myButtonFunction(status) {
	const servletResource = $(".my-button-component").data(
    "current-resource"
  );
      var settings = {
        url: servletResource + ".buttoncomponent.html",
        data: {
          statusFlag : status,
        },
        method: "GET",
      };
      $.ajax(settings)
        .done(function (response) {
          console.log("Success")
        })
        .fail((response) => {
          console.log("Failure")
        });
}