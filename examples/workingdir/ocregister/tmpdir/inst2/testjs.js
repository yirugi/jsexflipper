exports.test = async function(pb, dumpio, devtool){
	pb.load_adblock = true;
	await pb.start_browser(dumpio, devtool, true,["--user-data-dir=/mnt/hgfs/tool/dist/examples/workingdir/ocregister/tmpdir/inst2/chrome_dir"]);
	await new Promise(r => setTimeout(r, 3000));
	await pb.page.bringToFront();
	pb.saveResult("109", 15000);
	await pb.load_page("https://www.ocregister.com/2021/02/09/orange-countys-coronavirus-metrics-further-ease-since-new-year-spike/", 0);
	await new Promise(r => setTimeout(r, 1000));
}