import React, { useState } from "react";
import { connect } from "react-redux";

import { Row, Col, Container } from "react-bootstrap";
import ReactEcharts from "echarts-for-react";

const MethologiesChart = ({}) => {
    //Import json file. Used in {options}.
    //const data = require("./dataTechChart");
    var data = {
        name: "MusicReact",
        children: [
            {
                name: "Front End",
                children: [
                    {
                        name: "Design",
                        children: [
                            { name: "Adobe XD" },
                            { name: "Adobe Illustrator" },
                            { name: "Adobe Photoshop" },
                        ],
                    },
                    {
                        name: "Libraries",
                        children: [
                            { name: "Apache-echarts" },
                            { name: "React" },
                            { name: "ReactBootstrap" },
                            { name: "Bit" },
                            { name: "ReactRedux" },
                            { name: "Gulp" },
                        ],
                    },
                    {
                        name: "Test",
                        children: [
                            { name: "Jest" },
                            { name: "User interface test" }
                        ],
                    },
                ],
            },
            {
                name: "Back End",
                children: [
                    { name: "NodeJS" },
                    { name: "Mongoose" },
                    { 
                        name: "Docker", children: [
                            { name: "MongoDB" },
                            { name: "Mongo-express" }, 
                            { name: "Docker-compose" }
                        ],
                    },
                    { name: "Axios" }
                ],
            },
        ],
    };

    //Chart style
    const style = {
        height: "55vh",
        width: "90%",
        marginRight: "0",
        marginLeft: "10%",
    };

    const options = {
        title: {
            text: "Methologies",
            left: "center",
            top: 20,
            textStyle: {
                color: "white",
            },
        }, 
        series: [
            {
                type: "tree",
                name: "tree1",
                data: [data],
                top: "10%",
                left: "10%",
                bottom: "2%",
                right: "60%",
                symbolSize: 7,
                label: {
                    position: "top",
                    //verticalAlign: "center",
                    //align: "right",
                },

                leaves: {
                    label: {
                        position: "right",
                        verticalAlign: "middle",
                        align: "left",
                    },
                },
                initialTreeDepth: 5,
                emphasis: {
                    focus: "descendant",
                },
                roam: "zoom",
                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750,
            },
        ],
    };

    const [name, setName] = useState("");

    return (
        <>
            <ReactEcharts
                style={style}
                option={options}
                onEvents={{
                    click: (e) => {
                        setName(e.name);
                    },
                }}
            />
        </>
    );
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, {})(MethologiesChart);
