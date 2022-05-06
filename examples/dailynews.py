from jsexflipper import JSExFlipperOption
from jsexflipper import JSExFlipperLauncherHybridPaywall

if __name__ == '__main__':
    option = JSExFlipperOption()
    option.test_name = 'dailynews'
    free_pages = [
        'https://www.dailynews.com/2022/03/25/alexander-others-have-ncaa-magic-this-year-but-uclas-runs-out/',
        'https://www.dailynews.com/2022/03/25/caleb-love-north-carolina-shoot-down-ucla-in-ncaa-tournament/',
        'https://www.dailynews.com/2022/03/25/rock-world-mourns-loss-of-taylor-hawkins-from-foo-fighters/'
    ]
    sub_pages = [
        'https://www.dailynews.com/2022/03/11/photos-time-to-get-out-and-view-cherry-tree-blossoms/',
        'https://www.dailynews.com/2022/03/22/another-ex-woga-gymnast-alleges-she-was-abused-by-liukin/',
        'https://www.dailynews.com/2022/03/14/valeri-liukin-to-coach-team-usa-while-under-investigation-for-abuse/'
    ]

    jsexf = JSExFlipperLauncherHybridPaywall(option=option, free_pages=free_pages, sub_pages=sub_pages)
    jsexf.perform_analysis()
    jsexf.start_test()