exports.test = async function(pb, dumpio, devtool){
	await pb.start_browser(dumpio, devtool, true);
	await pb.page.bringToFront();
	pb.saveCTrace(40000);
	await pb.load_page("https://www.dailynews.com/2022/03/14/valeri-liukin-to-coach-team-usa-while-under-investigation-for-abuse/", 0);
	await new Promise(r => setTimeout(r, 1000));
}