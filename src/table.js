import React, { useState, useEffect } from "react";
import MaterialDatatable from "material-datatable";
import axios from "axios";
import Flag from "react-world-flags";
import { Button } from "react-bootstrap";
const Table=(props)=>{
    const [rows, setRows] = useState([]);
    console.log(props)
    useEffect(() => {
      const getData = async () => {
        let res = await axios.get("https://corona.lmao.ninja/v2/countries");
        let temp = [];
        res.data.map((element) => {
          element.cases = (
            <div
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => {
                  console.log("HERE")
                props.history.push({pathname:"/chart",state:{country:element.country, type:'cases'}})
              }}
            >
              {element.cases}
            </div>
          );
          element.deaths = (
            <div
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => {
                  console.log("HERE")
                props.history.push({pathname:"/chart",state:{country:element.country, type:'deaths'}})
              }}
            >
              {element.deaths}
            </div>
          );
          element.flag = <Flag code={element.countryInfo.iso2} />;
          element.More = <button onClick={()=>{
            props.history.push({pathname:"/more",state:{country:element.country,data:JSON.stringify({...element})}})
          }}>MORE</button>;
              
          temp.push(element);
        });
        setRows([...temp]);
        // setRows([...res.data,countryLink:<Link></Link>])
      };
      getData();
    }, []);
    const columns = [
      {
        name: "ISO",
        field: "flag",
      },
      {
        name: "Country",
        field: "country",
      },
      {
        name: "Total Cases",
        field: "cases",
      },
      {
        name: "Total Death",
        field: "deaths",
      },
      {
        name: "Total Recovered",
        field: "recovered",
      },
      {
        name: "Critical",
        field: "critical",
      },
      {
        name: "Today Cases",
        field: "todayCases",
      },
      {
        name: "Today Deaths",
        field: "todayDeaths",
      },
      {
        name: "Today Recovered",
        field: "todayRecovered",
      },
      {
        name: "View More",
        field: "More",
      },
    ];
  
    const options = {
      selectableRows: false,
    };
return(
    <MaterialDatatable
              
                title={"COVID-19 DATA"}
                data={rows}
                columns={columns}
                options={options}
              />
)
}

export default Table