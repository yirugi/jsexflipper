exports.test = async function(pb, dumpio, devtool){
	await pb.start_browser(dumpio, devtool, true);
	await pb.page.bringToFront();
	pb.saveCTrace(40000);
	await pb.load_page("https://time.com/5950829/vaccines-covid-19-infection-real-world-study/", 0);
	await new Promise(r => setTimeout(r, 1000));
}