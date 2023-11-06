window.addEventListener("load", (e) => {
  let form = document.querySelector("#form");
  let name = document.querySelector(".name");
  let number = document.querySelector(".number");
  let course = document.querySelector(".course");
  let seatNumber = document.querySelector(".seat-number")
  let table = document.querySelector(".table");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nameInput = name.value;
    let numberInput = number.value;
    let courseInput = course.value;
    let seatNumberInput = seatNumber.value;

    localStorage.setItem('attendance', JSON.stringify(nameInput, numberInput, courseInput, seatNumberInput));

    if (!nameInput || !numberInput || !courseInput || !seatNumberInput) {
      alert('Kindly fill all boxes before proceeding!')
    }

    let tableRow = document.createElement('tr');
    tableRow.classList.add('tablerow');

    let serialData = document.createElement('td');
    let rowArray = document.getElementsByClassName('tablerow');
    let serialNumber = rowArray.length + 1;
    serialData.textContent = serialNumber;

    let nameData = document.createElement('td');
    nameData.textContent = nameInput;

    let numberData = document.createElement('td');
    numberData.textContent = numberInput;

    let courseData = document.createElement('td');
    courseData.textContent = courseInput;

    let seatNumberData = document.createElement('td');
    seatNumberData.textContent = seatNumberInput;

    let attendanceData = document.createElement('td');
    let presentBtn = document.createElement('button');
    presentBtn.textContent = 'Present';
    let absentBtn = document.createElement('button');
    absentBtn.textContent = 'Absent';

    table.appendChild(tableRow);
    tableRow.append(serialData, nameData, numberData, courseData, seatNumberData, attendanceData);
    attendanceData.append(presentBtn, absentBtn);

    name.value = '';
    number.value = '';
    course.value = '';
    seatNumber.value = '';

    presentBtn.addEventListener("click", (e) => {
      presentBtn.style.backgroundColor = "limegreen";
      absentBtn.remove();
    })

    absentBtn.addEventListener("click", (e) => {
      absentBtn.style.backgroundColor = "crimson";
      presentBtn.remove();
    })

  })

})