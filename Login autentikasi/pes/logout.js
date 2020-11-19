// JavaScript Document
function logout() {
	var yakin = confirm("Are you sure?");
	if (yakin) {
		document.write("LLogout");
		window.location = "index.html";
	} else {
		document.write("Thanks :)");
		window.location = "home.html"
	}
}