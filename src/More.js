import axios from "axios";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

//

const More = (props) => {
  const [data, setData] = useState({});
  const [moreData, setMoreData] = useState({});
  useEffect(() => {
    const get = async () => {
      let res = await axios.get(
        `https://corona.lmao.ninja/v2/historical/${props.location.state.country}`
      );
      if (res.status === 200) {
        const dataT = {
          labels: Object.keys(res.data.timeline.cases),
          datasets: [
            {
              label: "My First dataset",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: Object.values(res.data.timeline.cases),
            },
          ],
        };

        setData({ ...dataT });
        setMoreData(JSON.parse(props.location.state.data));
      }
    };
    get();
  }, [props]);
  return (
    <div>
      <h2>Cases in {props.location.state.country}</h2>
      <p>{moreData.country}</p>
      <p>{moreData.todayCases}</p>
      <Line data={data} />
      {/* <Line data={data} /> */}
    </div>
  );
};

export default More;
