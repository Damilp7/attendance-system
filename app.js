window.addEventListener("load", (e) => {
  let form = document.querySelector("#form");
  let name = document.querySelector(".name");
  let number = document.querySelector(".number");
  let city = document.querySelector(".city");
  let rollNo = document.querySelector(".rollnum");
  let table = document.querySelector(".table")

  form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      let nameInput = name.value;
      let numberInput = number.value;
      let cityInput = city.value;
      let rollInput = rollNo.value;

      if (!nameInput || !numberInput || !cityInput || !rollInput) {
          alert("Please fill all boxes");
      }
      else {
          let tableRow = document.createElement("tr");
          tableRow.classList.add("tablerow");

          let snData = document.createElement("td");
          let rowArray = document.getElementsByClassName("tablerow");
          let serNum = rowArray.length + 1;
          snData.textContent = serNum;
          let nameData = document.createElement("td");
          nameData.textContent = nameInput;

          let numberData = document.createElement("td");
          numberData.textContent = numberInput;

          let cityData = document.createElement("td");
          cityData.textContent = cityInput;

          let rollNoData = document.createElement("td");
          rollNoData.textContent = rollInput;
          let attendanceData = document.createElement("td");
          let presentBtn = document.createElement("input");
          presentBtn.type = "button";
          presentBtn.value = "Present";
          let absentBtn = document.createElement("input");
          absentBtn.type = "button";
          absentBtn.value = "Absent";

          table.appendChild(tableRow);
          tableRow.append(snData, nameData, numberData, cityData, rollNoData, attendanceData)
          attendanceData.append(presentBtn, absentBtn)

          name.value = "";
          num.value = "";
          city.value = "";
          rollNum.value = "";

          presentBtn.addEventListener("click", (e) => {
              absentBtn.remove();
              presentBtn.value = "Present";
          })

          absentBtn.addEventListener("click", (e) => {
                  presentBtn.remove();
                  absentBtn.value = "Absent"
          })
      }
  })
})