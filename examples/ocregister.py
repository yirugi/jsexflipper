from jsexflipper import JSExFlipperOption
from jsexflipper import JSExFlipperLauncherAntiAdblocker

if __name__ == '__main__':
    option = JSExFlipperOption()
    option.test_name = 'ocregister'
    page = 'https://www.ocregister.com/2021/02/09/orange-countys-coronavirus-metrics-further-ease-since-new-year-spike/'
    jsexf = JSExFlipperLauncherAntiAdblocker(option=option, page=page)
    jsexf.perform_analysis()
    jsexf.start_test()