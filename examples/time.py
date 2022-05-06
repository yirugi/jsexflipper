from jsexflipper import JSExFlipperOption
from jsexflipper import JSExFlipperLauncherSoftPaywall

if __name__ == '__main__':
    option = JSExFlipperOption()
    option.test_name = 'time'

    paywall_pages = [
        'https://time.com/6173104/lula-da-silva-transcricao/',
        'https://time.com/5950888/suez-canal-boat-freed-explained/',
        'https://time.com/5950829/vaccines-covid-19-infection-real-world-study/'
    ]

    free_pages = [
        'https://time.com/6167919/new-orleans-history-french-women/',
        'https://time.com/5947893/what-constitutes-a-mass-shooting/',
        'https://time.com/6170100/starbucks-sued-labor-baord/'
    ]

    jsexf = JSExFlipperLauncherSoftPaywall(option=option, paywall_pages=paywall_pages, free_pages=free_pages)
    jsexf.perform_analysis()
    jsexf.start_test()
