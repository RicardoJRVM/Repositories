function listar(){
__ajax("data.json")
.done(function(usuarios){
	var html ="";
	for (var i in usuarios.users) { 
		html+=	`<div class="card" style="width: 18rem; background-color:#20B2AA;border-color:#287233; ">
					<img class="card-img-top img-fluid" style="background-color:white;" src="${usuarios.users[i].avatar_url}" alt="profile_pic"
					width="260" height="260" onerror="this.src='images/icono_default.jpg';">
						<div class="card-body" >
					    <h5 class="card-title">Ficha Tecnica ${i}</h5>
					    <h3>Nombre de usuario:</h3>
					    <p class="card-text"> ${usuarios.users[i].name}</p>
					    <h3>Nickname de usuario:</h3>
					    <p class="card-text"> ${usuarios.users[i].nickName}</p>
					    <h3>URL de Github:</h3>
					    <a href="${usuarios.users[i].github_url}" class="btn btn-primary" style="white-space:normal;">${usuarios.users[i].github_url}</a>
					  	</div>
				</div>
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
