import React, { useState,useEffect  } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
//const { MongoClient } = require('mongodb');
import * as XLSX from 'xlsx';

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [excelData, setExcelData] = useState([]);
  const[info,setInfo]=useState([])
  const [upcomingBirthdays, setUpcomingBirthdays] = useState([]);
  useEffect(() => {
    if (excelData.length > 0) {
      const birthdaysWithin7Days = excelData.filter((data) => {
        console.log(data)
        const remainingDays = getRemainingDays(data[1]);
        return remainingDays <= 7;
      });
      console.log(birthdaysWithin7Days)
      setUpcomingBirthdays(birthdaysWithin7Days);
    }
  }, [excelData]);
  console.log(upcomingBirthdays)

  // async function loadData() {
  //   const result = await axios.get("mongodb://127.0.0.1:27017/employeeData");
  //   setInfo(result.data);
  //   console.log(result,"result")
  // }
  // async function loadData() {
  //   try {
  //     const response = await axios.get("http://localhost:9002/fileUploader");
  //     const userData = response.data;
  //     setInfo(userData);
  //     console.log(userData, "data load complete");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  
  // useEffect(() => {
  //   loadData();
  // }, []);
  // console.log(info);
  function getRemainingDays(date) {
    const today = new Date();
    const currentYear = today.getFullYear();
    const nextBirthday = new Date(date);
    nextBirthday.setFullYear(currentYear);
  
    if (today > nextBirthday) {
      nextBirthday.setFullYear(currentYear + 1);
    }
  
    const timeDiff = nextBirthday.getTime() - today.getTime();
    const remainingDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return remainingDays;
  }
 
  function calculateYears(date) {
    // Convert the date of birth to a Date object
    const dob = new Date(date);
  
    // Get the current date
    const now = new Date();
  
    // Calculate the difference in milliseconds between the two dates
    const diff = now - dob;
  
    // Convert the difference to years
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  
    return years;
  }
  
 


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      // const data = new Uint8Array(e.target.result);
      const data = e.target.result;
      
      const workbook = XLSX.read(data, { 
      type: 'binary',
      cellDates:true,
      dateNF: "yyyy-mm-dd"});
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1,raw:false });
      setExcelData(jsonData);
      jsonData.slice(1).map((row, index) =>{
        console.log("arr",row);
          let empname = row[0];
          let birthDate = row[1]; // Format: YYYY-MM-DD
          let joiningDate = row[2]; // Format: YYYY-MM-DD
          const remainingDaysToBirthday = getRemainingDays(birthDate);
          const remainingDaysToAnniversary = getRemainingDays(joiningDate);
          console.log('Remaining days until birthday:', remainingDaysToBirthday);
          console.log('Remaining days until anniversary:', remainingDaysToAnniversary);
          const birthdayYears = calculateYears(birthDate);
          const anniversaryYears = calculateYears(joiningDate);
          console.log('Years birthday', birthdayYears);
          console.log('Years anniversary:', anniversaryYears);
          const formData = {
            empname: empname,
            birthDate: birthDate,
            joiningDate: joiningDate
          }
          axios.post("http://localhost:9002/fileUploader", formData)
          .then(res => {
            console.log(res.data);
            console.log('yesss');
            // loadData();
          })
          .catch(error => {
            console.error(error);
          });
      });
          
    };
    reader.readAsBinaryString(file);
  };
  // const getBirthDays7 =()=>{
  //    return excelData.filter(function(data){
  //     return data.remainingDaysToBirthday<=7
  //    })
  // }
  return (
    <div className='fileContainer mx-auto'>
      <div className='d-flex justify-content-center'>
      <div className=''>
      <h2>File Uploader</h2>
      <input type="file" onChange={handleFileChange}/>
      <div className='d-flex justify-content-center'>
        <Link to="/birthdays">
        <button className='btn btn-primary'>UPLOAD</button>
      </Link>
      </div>
      </div>
      </div>
      <div>
      { excelData.length > 0 && (
        <div>
          <h3>Excel Data:</h3>
          <table>
            <thead>
              <tr>
                {excelData[0].map((cell, index) => (
                  <th key={index}>{cell}</th>
                ))}
              </tr>
            </thead> 
            <tbody>
              {excelData.slice(1).map((row, index) => (
                <tr key={index}>
                  {row.map((cell, index) => (
                    <td key={index}>{cell}</td>
                  ))}
                  
                </tr>
              ))}
            </tbody>
          </table>
          
           {/* <div>
            {excelData.filter((data)=>
          data.remainingDaysToBirthday<7).map((data)=>(
          <h4>{data}</h4>))}
          </div> */}
        </div>
      )} 
              {upcomingBirthdays.length > 0 && (
          <div>
            <h3>Upcoming Birthdays:</h3>
            {upcomingBirthdays.map((row, index) => (
              <div key={index}>
                <p>Employee: {row[0]}</p>
                <p>Birthday: {row[1]}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default FileUploader;
