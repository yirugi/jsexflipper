from jsexflipper import JSExFlipperOption
from jsexflipper import JSExFlipperLauncherAntiAdblocker

if __name__ == '__main__':
    option = JSExFlipperOption()
    option.test_name = 'latimes'
    page = 'https://www.latimes.com/business/story/2019-12-19/boeing-spacex-spacecraft-parachutes'
    jsexf = JSExFlipperLauncherAntiAdblocker(option=option, page=page)
    jsexf.perform_analysis()
    jsexf.start_test()