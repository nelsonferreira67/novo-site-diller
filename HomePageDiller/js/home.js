fotos = new Array();
fotos[0] = 'banner1.jpg';
fotos[1] = 'banner2.jpg';
fotos[2] = 'banner3.jpg';
fotos[3] = 'banner4.jpg';
fotos[4] = 'banner5.jpg';
fotos[5] = 'banner6.jpg';
fotos[6] = 'banner7.jpg';

i=0;

function muda_foto(param){
	document.getElementById('banner').src = fotos[param];
	
}

window.onload = timer();

function timer(){
	i++;
	if (i==7) i = 0;
	setTimeout('muda_foto(' + i + ')',4000);
}

