import React from "react"

class WorkCard extends React.Component {
    constructor(props) {
        super(props)
    }

    handleMouseOverCard() {
        $(document).ready(function () {

            let elementX = 0,
                elementY = 0,
                elementW = 0,
                elementH = 0,
                mouseX = 0,
                mouseY = 0;

            $(document).mousemove(function (e) {

                let position = $(".parallax-back").offset(),
                    obj = $(".parallax-back");
                elementX = position.left;
                elementY = position.top;

                elementW = obj.width();
                elementH = obj.height();

                let halfW = elementW / 2;
                let halfH = elementH / 2;

                mouseX = (e.pageX - elementX - halfW) / halfW;
                mouseY = (e.pageY - elementY - halfH) / halfH;
                mouseX = Math.round(mouseX * 100) / 100;
                mouseY = Math.round(mouseY * 100) / 100;

                // noinspection JSJQueryEfficiency
                $(".parallax-back").css("transform", "rotateX(" + mouseY * -10 + "deg) rotateY(" + mouseX * 10 + "deg)");
                $(".parallax-middle").css("transform", "translateX(" + mouseX * 10 + "px) translateY(" + mouseY * 10 + "px)");
                $(".parallax-top").css("transform", "translateX(" + mouseX * 30 + "px) translateY(" + mouseY * 30 + "px)");
            });

        });
    }

    render() {
        return (
            <div className="parallax-container">
                <div className="parallax-back">
                    <div className="parallax-middle">Middle layer</div>
                    <div className="parallax-top">Top layer</div>
                    <div>Back layer</div>
                </div>
            </div>
        )
    }
}

export default WorkCard