exports.test = async function(pb, dumpio, devtool){
	await pb.start_browser(dumpio, devtool, true);
	await pb.page.bringToFront();
	pb.saveCTrace(40000);
	await pb.load_page("https://www.capjournal.com/community/sc-student-council-steps-up-for-missouri-shores/article_cdb0bc96-b13e-11ec-ba8b-6becb278f38d.html", 0);
	await new Promise(r => setTimeout(r, 1000));
}