function listar(){
__ajax("data.json")
.done(function(usuarios){
	var html ="";
	for (var i in usuarios.users) { 
		html+=	`<img src="${usuarios.users[i].avatar_url}" width="260" height="260" onerror="this.src='images/icono_default.jpg';"></p>
				<h3>Nombre de usuario:</h3>
				<p> ${usuarios.users[i].name}</p>
				<h3>Nickname de usuario:</h3>
				<p> ${usuarios.users[i].nickName}</p>
				<h3>URL de Github:</h3>
				<p><a href="${usuarios.users[i].github_url}">${usuarios.users[i].github_url}</a></p>
				<hr>
				`
	}
	$("#ficha_tecnica").html(html);
});
}
function __ajax(url){
	var ajax=$.ajax({
		"method":"POST",
		"url":url,
	})
	return ajax;
}
