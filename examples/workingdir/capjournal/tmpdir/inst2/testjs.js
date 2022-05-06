exports.test = async function(pb, dumpio, devtool){
	await pb.start_browser(dumpio, devtool, true,["--user-data-dir=/mnt/hgfs/tool/dist/examples/workingdir/capjournal/tmpdir/inst2/chrome_dir"]);
	await pb.page.bringToFront();
	pb.saveResult("034", 15000);
	await pb.load_page("https://www.capjournal.com/news/hayes-readies-its-69th-year-of-community-theater/article_0a82bbe6-ac6d-11ec-b9a5-279bd1f4e4cc.html", 0);
	await new Promise(r => setTimeout(r, 1000));
}