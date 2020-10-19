import webMockup3 from "@img/mockups/webMockup3Blurred.jpg"
import webMockup4 from "@img/mockups/webMockup4Blurred.jpg"
import webMockup5 from "@img/mockups/webMockup5Blurred.jpg"
import mobileMockup1 from "@img/mockups/mobileMockups1.jpg"
import mobileMockup2 from "@img/mockups/mobileMockups2.jpg"
import mobileMockup3 from "@img/mockups/mobileMockups3.jpg"
import mobileMockup4 from "@img/mockups/mobileMockups4.jpg"
import mobileMockup5 from "@img/mockups/mobileMockups5.jpg"

const worksList = [
    {},
    {
        title: "Subscriber's account site",
        description: "Order gas cylinders at home, manage gas meter readings, pay without leaving your home.",
        elements: [
            { // Row 0
                img: webMockup3,
                header: "Subscriber's profile",
                description: "All information about subscribers is obtained directly from 1C Enterprise."
            },
            { // Row 1
                img: webMockup4,
                header: "Orders",
                description: "All subscriber can send gas meter readings directly from the website. Order a gas cylinder" +
                    " with home delivery and pay the debt for services."
            },
            { // Row 2
                img: webMockup5,
                header: "Delivery",
                description: "Choose a delivery date when it is convenient for you."
            },
        ]
    },
    {
        title: "Order gas cylinders mobile application",
        description: "Order gas cylinders at home, pay without leaving your home.",
        elements: [
            {
                img: mobileMockup1,
                header: "For Android users",
                description: "Mobile application or order gas cylinders at home."
            },
            {
                img: mobileMockup2,
                header: "Orders",
                description: "Get all information about order. Cylinder price, delivery price, delivery date, etc."
            },
            {
                img: mobileMockup3,
                header: "Delivery",
                description: "Choose a delivery date when it is convenient for you."
            },
            {
                img: mobileMockup4,
                header: "History",
                description: "Track changes in your orders."
            },
            {
                img: mobileMockup5,
                header: "Edit",
                description: "Edit order, leave comment, pay for order."
            }
        ]
    }
]

export default worksList