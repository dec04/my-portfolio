import GasImg1 from '@img/patterns/gas.jpg';
import GasImg2 from '@img/patterns/gas2.jpg';
import GasImg3 from '@img/patterns/gas3.jpg';
import GasImg4 from '@img/patterns/gas4.jpg';
import WebApp1 from '@img/mockups/webMockup1.jpg';
import WebApp2 from '@img/mockups/webMockup2.jpg';
import WebSvg from '@img/web-browser.svg';
import MobileApp1 from '@img/mockups/appMockup1.jpg';
import MobileApp2 from '@img/mockups/appMockup2.jpg';
import MobileApp3 from '@img/mockups/appMockup3.jpg';
import MobileSvg from '@img/smartphone.svg';
import MobileImg1 from '@img/patterns/mobile.jpg';
import MobileImg2 from '@img/patterns/mobile2.jpg';
import MobileImg3 from '@img/patterns/mobile3.jpg';
import MobileImg4 from '@img/patterns/mobile4.jpg';

const WorkMainSlider = [
    {
        name:        'Order gas balloon app',
        description: [
            'Android application for order gas balloons at home',
            'It\'s mobile version of',
            'altaygaz22.ru and sibgaz.ru/gaz/ web application'
        ],
        image:       [
            MobileApp1,
            MobileApp2,
            MobileApp3,
        ],
        patterns:    [
            MobileImg1,
            MobileImg2,
            MobileImg3,
            MobileImg4
        ],
        logo:        MobileSvg,
        link:        'work/2'
    },
    {
        name:        ['altaygaz22', 'sibgaz.ru/gaz'],
        description: [
            'Web application for order gas balloons at home',
            'Only for abonents akgs.ru and sibgaz.ru company'
        ],
        image:       [
            WebApp1,
            WebApp2
        ],
        patterns:    [
            GasImg1,
            GasImg2,
            GasImg3,
            GasImg4
        ],
        logo:        WebSvg,
        link:        'work/1'
    },
];

export default WorkMainSlider;
