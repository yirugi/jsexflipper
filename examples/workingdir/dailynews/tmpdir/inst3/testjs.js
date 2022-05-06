exports.test = async function(pb, dumpio, devtool){
	await pb.start_browser(dumpio, devtool, true,["--user-data-dir=/mnt/hgfs/tool/dist/examples/workingdir/dailynews/tmpdir/inst3/chrome_dir"]);
	await pb.page.bringToFront();
	pb.saveResult("050", 15000);
	await pb.load_page("https://www.dailynews.com/2022/03/11/photos-time-to-get-out-and-view-cherry-tree-blossoms/", 0);
	await new Promise(r => setTimeout(r, 1000));
}