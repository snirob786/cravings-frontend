

import ApexCharts from 'apexcharts';

import colors from 'tailwindcss/colors'


var options = {
    series: [{
        name: "Orders",
        type: "area",
        data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67],
    },
    {
        name: "Earnings",
        type: "bar",
        data: [
            89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36,
            88.51, 36.57,
        ],
    },
    ],
    chart: {
        height: 370,
        type: "line",
        toolbar: {
            show: false,
        },
    },
    stroke: {
        curve: "smooth",
        dashArray: [0, 0, 8],
        width: [2, 0, 2.2],
    },
    fill: {
        opacity: [0.1, 0.9, 1],
    },
    markers: {
        size: 5,
        strokeWidth: 2,
        hover: {
            size: 9
        }
    },
    xaxis: {
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
    },
    grid: {
        show: true,
        borderColor: '#90A4AE25',
        strokeDashArray: 5,
        xaxis: {
            lines: {
                show: false,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
        padding: {
            top: 0,
            right: -2,
            bottom: 15,
            left: 10,
        },
    },
    xaxis: {
        labels: {
            style: {
                colors: '#90A4AE80',
            },
        },
        axisBorder: {
            show: true,
            color: '#90A4AE50',
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: '#90A4AE80',
            },
        },
        
    },
    legend: {
        show: true,
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: -5,
        markers: {
            width: 9,
            height: 9,
            radius: 6,
        },
        itemMargin: {
            horizontal: 10,
            vertical: 0,
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "30%",
            barHeight: "70%",
            borderRadius: 4,
        },
    },
    colors: [colors.sky[400], colors.emerald[400], colors.purple[400]],
    tooltip: {
        theme: 'dark',
        shared: true,
        y: [{
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0);
                }
                return y;
            },
        },
        {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return "$" + y.toFixed(2) + "k";
                }
                return y;
            },
        },
        {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " Sales";
                }
                return y;
            },
        },
        ],
    },
};
var chart = new ApexCharts(
    document.querySelector("#customer_impression_charts"),
    options
);
chart.render();