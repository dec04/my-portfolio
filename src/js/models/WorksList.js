import webMockup3 from '@img/mockups/webMockup3Blurred.jpg';
import webMockup4 from '@img/mockups/webMockup4Blurred.jpg';
import webMockup5 from '@img/mockups/webMockup5Blurred.jpg';
import mobileMockup1 from '@img/mockups/mobileMockups1.jpg';
import mobileMockup2 from '@img/mockups/mobileMockups2.jpg';
import mobileMockup3 from '@img/mockups/mobileMockups3.jpg';
import mobileMockup4 from '@img/mockups/mobileMockups4.jpg';
import mobileMockup5 from '@img/mockups/mobileMockups5.jpg';
import akgsMockup1 from '@img/mockups/akgsMobile1.jpg';
import akgsMockup2 from '@img/mockups/akgsMobile2.jpg';
import akgsMockup3 from '@img/mockups/akgsMobile3.jpg';
import akgsMockup4 from '@img/mockups/akgsMobile4.jpg';
import akgsMockup5 from '@img/mockups/akgsMobile5.jpg';

const worksList = [
    {},
    {
        title:       'Subscriber\'s account site',
        description: 'Order gas cylinders at home, manage gas meter readings, pay without leaving your home.',
        elements:    [
            { // Row 0
                img:         webMockup3,
                header:      'Subscriber\'s profile',
                description: 'All information about subscribers is obtained directly from 1C Enterprise.'
            },
            { // Row 1
                img:         webMockup4,
                header:      'Orders',
                description: 'All subscriber can send gas meter readings directly from the website. Order a gas cylinder' +
                                 ' with home delivery and pay the debt for services.'
            },
            { // Row 2
                img:         webMockup5,
                header:      'Delivery',
                description: 'Choose a delivery date when it is convenient for you.'
            },
        ]
    },
    {
        title:       'Order gas cylinders mobile application',
        description: 'Order gas cylinders at home, pay without leaving your home.',
        elements:    [
            {
                img:         mobileMockup1,
                header:      'For Android users',
                description: 'Mobile application for order gas cylinders at home.'
            },
            {
                img:         mobileMockup2,
                header:      'Orders',
                description: 'Get all information about order. Cylinder price, delivery price, delivery date, etc.'
            },
            {
                img:         mobileMockup3,
                header:      'Delivery',
                description: 'Choose a delivery date when it is convenient for you.'
            },
            {
                img:         mobileMockup4,
                header:      'History',
                description: 'Track changes in your orders.'
            },
            {
                img:         mobileMockup5,
                header:      'Edit',
                description: 'Edit order, leave comment, pay for order.'
            }
        ]
    },
    {
        title:       'Android app for gk-gazoil.ru',
        description: 'Android application for subscribers Gazoil group of companies.',
        elements:    [
            {
                img:         akgsMockup1,
                header:      'For Android users',
                description: 'Mobile application for tracking refuel activity and get bonus.'
            },
            {
                img:         akgsMockup2,
                header:      'Gas stations',
                description: 'Get all Gazoil gas stations on interactive map. Check phone, track route.'
            },
            {
                img:         akgsMockup3,
                header:      'Office',
                description: 'Get all information about Gazoil regional offices.'
            },
            {
                img:         akgsMockup4,
                header:      'Dark theme',
                description: 'Too bright? Turn on dark mode.'
            },
            {
                img:         akgsMockup5,
                header:      'All in one',
                description: 'Refuel car free by bonus points, track your refuel activity.'
            }
        ]
    }
];

export default worksList;
