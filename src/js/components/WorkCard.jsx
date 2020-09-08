import React from "react"

class WorkCard extends React.Component {
    constructor(props) {
        super(props)
    }

    handleMouseOverCard(e) {
        $(document).ready(function () {

            $(".parallax-back")
                .css("transition", "")
            $(".parallax-middle")
                .css("transition", "")
            $(".parallax-top")
                .css("transition", "")

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
                $(".parallax-top").css("transform", "translateX(" + mouseX * 20 + "px) translateY(" + mouseY * 20 + "px)");
            });

        });
    }

    handleMouseLeave() {
        $(document).off("mousemove")
        $(".parallax-back")
            .css("transition", "all .2s linear")
            .css("transform", "rotateX(0deg) rotateY(0deg)")
        $(".parallax-middle")
            .css("transition", "all .2s linear")
            .css("transform", "translateX(0px) translateY(0px)")
        $(".parallax-top")
            .css("transition", "all .2s linear")
            .css("transform", "translateX(0px) translateY(0px)")
    }

    render() {
        return (
            <div className="parallax-container m-5"
                 onMouseEnter={this.handleMouseOverCard}
                 onMouseLeave={this.handleMouseLeave}>
                <div className="parallax-back">
                    <div className="parallax-middle p-2">
                        <h5>{this.props.header}</h5>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="parallax-top text-center py-2">{this.props.tag}</div>
                    <div className="parallax-bottom" style={{backgroundImage: `url(${this.props.img})`}}></div>
                </div>
            </div>
        )
    }
}

export default WorkCard