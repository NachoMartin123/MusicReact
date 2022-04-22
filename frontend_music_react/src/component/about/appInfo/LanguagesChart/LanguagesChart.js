import React, { Component } from "react";
import { connect } from "react-redux";

import { Row, Col, Container } from "react-bootstrap";
import ReactEcharts from "echarts-for-react";

const LanguagesChart = ({}) => {
    //Import json file. Used in {options}.
    const data = require("./dataLanguagesChart");

    //Array of names for legend in {options}
    const dataNames = data.map((i) => i.name);

    //Chart style
    const style = {
        height: "52vh",
        width: "100%",
        margin: "0"
    };

    //Chart options
    let option = {
        //backgroundColor: "rgb(43, 51, 59)",
        /* toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                magicType: {
                    show: true,
                    type: ["pie", "funnel"],
                },
                restore: {
                    show: true,
                    title: "Restore",
                },
                saveAsImage: {
                    show: true,
                    title: "Save Image",
                },
            },
        }, */
        /* title: {
            text: "Languages",
            left: "center",
            top: 20,
            textStyle: {
                color: "black",
                paddingTop: "2em"
            },
        },  */
        graphic: [
            {
                type: "group",
                rotation: Math.PI / 4,
                bounding: "raw",
                right: 200,
                bottom: 100,
                z: 100,
            },
        ],
        // Hover Tooltip
        // {a} = series:[{name:}]
        // {b} = series:[{data: [{name:}]}]
        // {c} = series:[{data: [{value:}]
        tooltip: {
            trigger: "item",
            formatter: "{a}<br/><strong>{b}</strong>: {c} %",
        },
        calculable: true,
        legend: {
            orient: 'vertical',
            left: 'left',
            y: "center", 
            //icon: "circle",
            //x: "center",
            //y: "50px",
            data: dataNames,
            textStyle: {
                color: "black",
            },
        },
        series: [
            {
                name: "Language",
                type: "pie",
                animationDuration: 2000,
                animationEasing: "quarticInOut",
                radius: "50%",
                avoidLabelOverlap: false,
                startAngle: 90,
                hoverOffset: 5,
                center: ["50%", "50%"],
                //roseType: "area",
                selectedMode: "multiple",
                label: {
                    /* normal: {
                        show: true,
                        formatter: "{c} Suffix", // {c} data: [{value:},]
                    }, */
                   /*  emphasis: {
                        show: true,
                    }, */
                },
                /* labelLine: {
                    normal: {
                        show: true,
                        smooth: false,
                        length: 20,
                        length2: 10,
                    },
                    emphasis: {
                        show: true,
                    },
                }, */
                data: data,
                emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
        ],
    };

    return <ReactEcharts option={option} style={style} className="pie-chart" />;
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, {})(LanguagesChart);
