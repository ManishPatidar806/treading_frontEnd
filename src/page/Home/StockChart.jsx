import React ,{useState} from "react";
import ReactApexChart from "react-apexcharts";
import { Button } from "@/components/ui/button";

const timeSeries = [
  {
    keyword: "DIGOTAL_CURRENCY_DAILY",
    key: "Time Series (Daily)",
    lable: "1 Day",
    value: 1,
  },
  {
    keyword: "DIGOTAL_CURRENCY_WEEKLY",
    key: "Weekly Time Series ",
    lable: "1 Week",
    value: 7,
  },
  {
    keyword: "DIGITAL_CURRENCY_MONTHLY",
    key: "Monthly Time Series ",
    lable: "1 Month",
    value: 30,
  },
];

const StockChart = () => {
  const [activeLable, setActiveLable] = useState("1 Day")
  const searies = [
    {
      data: [
        [165466781331, 42287661.0406687],
        [187686070620, 42493.2764087546],
        [1704074443652, 42654.0731066594],

        [1704067241331, 827596236151.196],
        [1704070847420, 831531023621.411],
        [1704074443652, 835499399014.932],
        [1704067241331, 14305769170.9498],
        [374554470847420, 54130205376.1709],
        [887704074443652, 13697382902.2424],
        [6857466781331, 42287661.0406687],
        [187686070620, 42493.2764087546],
        [1704074443652, 42654.0731066594],
      ],
    },
  ];

  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: "350",
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    colors: ["#758AA2"],
    markers: {
      colors: ["#fff"],
      strokeColor: "#fff",
      size: 0,
      strokeWidth: 1,

      style: "hollow",
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#475353",
      strokeDashArray: 4,
      show: true,
    },
  };

  const handleActiveLable = (value) => {
    setActiveLable(value);
  };

  return (
    <div>
      <div className="space-x-3">
        {timeSeries.map((item) => 
          <Button
          variant ={activeLable==item.lable?"":"outline"}
            onClick={() => handleActiveLable(item.lable)}
            key={item.lable}
          >
            {item.lable}
          </Button>
        )}
      </div>

      <div id="chart-timelines">
        <ReactApexChart
          options={options}
          series={searies}
          height={450}
          type="area"
        />
      </div>
    </div>
  );
};

export default StockChart;
