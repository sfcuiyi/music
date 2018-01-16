let loadSlider = (cb) => {

	$.ajax({
		url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
		dataType: 'jsonp',
		jsonp:'jsonpCallback',
		success:cb
	});

}


let loadHotSongs = (cb) => {
	$.ajax({
		url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?topid=26&song_num=12&song_begin=0',
		dataType: 'jsonp',
		jsonp:'jsonpCallback',
		success:cb
	});
}


let musicList = (cb) => {
	$.ajax({
		url: 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg',
		dataType: 'jsonp',
		jsonp:'jsonpCallback',
		success:cb
	});
}


let loadListDetail = (id,cb) => {
	$.ajax({
		url: `https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?topid=${id}&song_num=12&song_begin=0`,
		dataType: 'jsonp',
		jsonp:'jsonpCallback',
		success:cb
	});
}