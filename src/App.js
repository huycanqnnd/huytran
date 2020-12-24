import React from 'react';
import './App.css';
import imp1 from "./images/1.jpg";
import imp2 from "./images/2.jpg";
import imp3 from "./images/3.jpg";
import imp4 from "./images/4.jpg";
import imp5 from "./images/5.jpg";
import imp6 from "./images/6.jpg";
import imp7 from "./images/7.jpg";
import imp8 from "./images/8.jpg";
import imp9 from "./images/9.jpg";
function App() {
  let students = [
    { name: 'Binh', gender: 'Male', age: 28 },
    { name: 'anh', gender: 'Male', age: 31 },
    { name: 'thinh', gender: 'Male', age: 34 },
    { name: 'Huy', gender: 'Male', age: 24 }
  ]
  function Bai1(){
    var totalAge = 0;
    students.forEach(function(student){
        totalAge += student.age;
    });
    var averageAge = totalAge / students.length;
    return averageAge;
  }
  function Bai2(){
    students.sort(function(a,b){
      return b.age - a.age;
    })
    return students;
  }
  function Bai3(){
    students.sort(function(a,b){
      return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    })
    return students;
  }
  function Bai4(){
    students = students.filter(function(student){
      return student.name.toLowerCase().startsWith('h');
    })
    return students;
  }
  return (
    <div>
    <div>Bài 1: Trung bình số tuổi là: <br/>{Bai1()}</div><br />
    <div>Bài 2: Học viên số tuổi từ cao đến thấp: <br /> {JSON.stringify(Bai2())}</div><br />
    <div>Bài 3: Học viên sắp xếp theo tên: <br />{JSON.stringify(Bai3())}</div><br />
    <div>Bài 4: Học viên tên bắt đầu chữ H: <br />{JSON.stringify(Bai4())}</div><br />

    <table width = "100%">
      <tr width = "100%">
          <td padding = "15px" width = "30%">
            <div align = "center">
              <img class="image" src={imp1}/>
            </div>
          </td>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src={imp2}/>
            </div>
          </td>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src={imp3}/>
            </div>
          </td>
        </tr>
        <tr>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src={imp4}/>
            </div>
          </td>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src={imp5}/>
            </div>
          </td>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src={imp6}/>
            </div>
          </td>
        </tr>
        <tr>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src={imp7}/>
            </div>
          </td>
          <td padding = "15px">
            <div align = "center">      
              <img class="image" src={imp8}/>
            </div>
          </td>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src={imp9}/>
            </div>
          </td>
        </tr>
      </table>
      </div>
  );
}

export default App;
