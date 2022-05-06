from jsexflipper import JSExFlipperOption
from jsexflipper import JSExFlipperLauncherHybridPaywall

if __name__ == '__main__':
    option = JSExFlipperOption()
    option.timeout = 20
    option.timeout_callstack_collection = 50
    option.test_name = 'bookmate'
    free_pages = ['./bookmate_data/bookmate_free.js']
    sub_pages = ['./bookmate_data/bookmate_sub.js']
    jsexf = JSExFlipperLauncherHybridPaywall(option=option, free_pages=free_pages, sub_pages=sub_pages)
    jsexf.perform_analysis()
    jsexf.start_test()
