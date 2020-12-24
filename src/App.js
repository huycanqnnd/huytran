import './App.css';

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
              <img class="image" src="images//1.jpg"/>
            </div>
          </td>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src="images//2.jpg"/>
            </div>
          </td>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src="images//3.jpg"/>
            </div>
          </td>
        </tr>
        <tr>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src="images//4.jpg"/>
            </div>
          </td>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src="images//5.jpg"/>
            </div>
          </td>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src="images//6.jpg"/>
            </div>
          </td>
        </tr>
        <tr>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src="images//7.jpg"/>
            </div>
          </td>
          <td padding = "15px">
            <div align = "center">      
              <img class="image" src="images//8.jpg"/>
            </div>
          </td>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src="images//9.jpg"/>
            </div>
          </td>
        </tr>
      </table>
      </div>
  );
}

export default App;
