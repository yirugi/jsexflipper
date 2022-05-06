exports.test = async function(pb, dumpio, devtool){
	await pb.start_browser(dumpio, devtool, true,["--user-data-dir=/mnt/hgfs/tool/dist/examples/workingdir/time/tmpdir/inst2/chrome_dir"]);
	await pb.page.bringToFront();
	pb.saveResult("118", 15000);
	await pb.load_page("https://time.com/5950829/vaccines-covid-19-infection-real-world-study/", 0);
	await new Promise(r => setTimeout(r, 1000));
}