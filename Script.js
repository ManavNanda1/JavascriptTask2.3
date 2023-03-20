////////////////////////////////////////////////////////////////////////welcome alert/////////////////////////////////////////////////////////////////////////////////////////////////////

Swal.fire({
  title: "Hello And Welcome to Second Task Of Javascript",
  showClass: {
    popup: "animate__animated animate__fadeInDown",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp",
  },
});

var table = document.getElementById("Table");

///////////////////////////////////////////////////////////////////Add function Code Below////////////////////////////////////////////////////////////////////////////////////////////////

let abc = document.querySelectorAll(".index-no");
for (let i = 0; i < abc.length; i++) {
  abc[i].innerHTML = i + 1;
}
const AddBox = () => {
  let T = document.getElementById("Table");
  let row = T.insertRow(-1);

  let Cell1 = row.insertCell(0);
  let Cell2 = row.insertCell(1);
  let Cell3 = row.insertCell(2);
  let Cell4 = row.insertCell(3);
  let Cell5 = row.insertCell(4);
  let Cell6 = row.insertCell(5);

  Cell1.setAttribute('data-label','id');
  Cell1.classList.add("index-no");
  Cell2.setAttribute('data-label','Name');
  Cell2.innerHTML = `<td data-label="Name" ><input type="text" placeholder="Enter Your Name" oninput="validateInput(event)"class="name-val"></td>`;
  Cell3.setAttribute('data-label','Subject');
  Cell3.innerHTML = `<td data-label="Subject"><input type="text"  placeholder="Subject" oninput="validateInput(event)" class="subject-val"></td>`;
  Cell4.setAttribute('data-label','Marks');
  Cell4.innerHTML = `<td data-label="Marks"><input type="number"  placeholder="Marks" onchange="numvalid(this)"  onkeypress="numValidERemove(event)" class="mark-val"></td>`;
  Cell5.setAttribute('data-label','Result');
  Cell5.innerHTML = `<td data-label="Result"><button class="btn btn-primary pass-btn"  type="button">Pass</button> <button class="btn btn-danger fail-btn"  type="button">Fail</button></td>`;
  Cell6.setAttribute('data-label','Add/Remove');
  Cell6.innerHTML = `<td data-label="Add/Remove"><button onclick = "removeBox(this)"  class="rem first">Remove</button></td>`;
  let abc = document.querySelectorAll(".index-no");
  for (let i = 0; i < abc.length; i++) {
    abc[i].innerHTML = i + 1;
  }

  //////////////////////////////////////////////////////////////////color changing code onclick //////////////////////////////////////////////////////////////////////////////////////////

  const failBtn = document.querySelectorAll(".fail-btn");
  const passBtn = document.querySelectorAll(".pass-btn");
  failBtn.forEach((button, index) => {
    button.addEventListener("click", function () {
      this.style.backgroundColor = "red";
      passBtn[index].style.backgroundColor = " cyan";
      this.parentElement.parentElement.classList.remove("showcontent");
    });
  });

  passBtn.forEach((button, index) => {
    button.addEventListener("click", function () {
      this.style.backgroundColor = "#16FF00";
      failBtn[index].style.backgroundColor = "#f387ab";
      this.parentElement.parentElement.classList.add("showcontent");
    });
  });
};

var new_val = 1;

// ////////////////////////////////////////////////////////////////////////Remove function code below/////////////////////////////////////////////////////////////////////////////////////

const removeBox = (Discard) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "You Really Want To Delete This Row?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        let i = Discard.parentNode.parentNode.rowIndex;
        document.getElementById("Table").deleteRow(i);
        let abc = document.querySelectorAll(".index-no");
        for (let i = 0; i < abc.length; i++) {
          abc[i].innerHTML = i + 1;
        }
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Cancelled",
          "Your Row is Not Deleted :)",
          "error"
        );
      }
    });
};

// ////////////////////////////////////////////////////////////////////////////saving of data code below////////////////////////////////////////////////////////////////////////////////

const createNewTable = () => {
  let name_val = document.querySelectorAll(".name-val");
  let subject_val = document.querySelectorAll(".subject-val");
  let mark_val = document.querySelectorAll(".mark-val");
  let table = document.getElementById("SavedTable");
  table.innerHTML = "";

  let row1 = table.insertRow(0);
  let Newcell = row1.insertCell(0);
  let Newcell1 = row1.insertCell(1);
  let Newcell2 = row1.insertCell(2);
  let Newcell3 = row1.insertCell(3);
  let Newcell4 = row1.insertCell(4);
  Newcell.innerHTML = `<th>Id</th>`;
  Newcell1.innerHTML = `<th>Name</th>`;
  Newcell2.innerHTML = `<th>Subject</th>`;
  Newcell3.innerHTML = `<th>Marks</th>`;
  Newcell4.innerHTML = `<th>Result</th>`;

  for (let i = 0; i <name_val.length; i++) {

    if (name_val[i].parentElement.parentElement.classList.value == "showcontent") {
      let row = table.insertRow(-1);
      let Cell1 = row.insertCell(0);
      let Cell2 = row.insertCell(1);
      let Cell3 = row.insertCell(2);
      let Cell4 = row.insertCell(3);
      let Cell5 = row.insertCell(4);
      if (mark_val[i].value >= 33) {
        Cell1.parentElement.classList.add("pass-col");
      }
      Cell1.innerHTML = `<tr><td>${new_val}</td>`;
      Cell2.innerHTML = `<td>${name_val[i].value}</td>`;
      Cell3.innerHTML = `<td>${subject_val[i].value}</td>`;
      Cell4.innerHTML = `<td> ${mark_val[i].value}</td> </tr>`;
      Cell5.innerHTML = `<td>Pass</td>`;
      if (mark_val[i].value <= 33) {
        Cell1.parentElement.classList.add("tab-col");
        Cell5.innerHTML = `<td>Fail</td>`;
      }
    }
    new_val++;
  }
  new_val = 1;

  let sort = document.getElementById("sort");
  sort.style.display = "block";
};

// ///////////////////////////////////////////////////////////////////  form validation code below////////////////////////////////////////////////////////////////////////////////////

function validateInput(event) {
  let inputValue = event.target.value;
  if (/\d/.test(inputValue)) {
    event.target.value = inputValue.substring(0, inputValue.length - 1);
  }

}

function numvalid(num) {
  let nam = parseInt(num.value);
  if (nam < 0 || nam > 100) {
    Swal.fire("You Cannot add value less than 0 or greater than 100.");
    num.value = "";
  }
}


function numValidERemove(event) {
  let char = event.key;
  if (char === 'e' || char === 'E') {
    event.preventDefault();
  }
}

function validateAllInputs(){
  let form =document.getElementById('Table')
  let allInputs = form.getElementsByTagName("input")
  for(let i =0; i<allInputs.length; i++){
     if(allInputs[i].value ==""){
      Swal.fire('Please Fill All Values First')
      return
     }
  }
  createNewTable() 
  percentageTable()
}

///////////////////////////////////////////////////////////////////////searching of values code below///////////////////////////////////////////////////////////////////////////////////

const SearchFunc = () => {
  let MyInp = document.getElementById("myInput").value.toUpperCase();
  let NewTab = document.getElementById("SavedTable");
  let Tr = NewTab.getElementsByTagName("tr");

  for (let i = 1; i < Tr.length; i++) {
    let td = Tr[i].getElementsByTagName("td")[1];
    if (td) {
      let textvalue = td.textContent || td.innerHTML;
      if (textvalue.toUpperCase().indexOf(MyInp) > -1) {
        Tr[i].style.display = "";
      } else {
        Tr[i].style.display = "none";
      }
    }
  }
};

///////////////////////////////////////////////////////////////////// sort button code below/////////////////////////////////////////////////////////////////////////////////////////////
function sortTable(SortNum) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("SavedTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[SortNum];
      y = rows[i + 1].getElementsByTagName("td")[SortNum];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}


////////////////////////////////////////////////////////////////// new percentage table code below///////////////////////////////////////////////////////////////////////////////////////

const percentageTable = () => {
  let name_val = document.querySelectorAll(".name-val");
  let mark_val = document.querySelectorAll(".mark-val");
  let table = document.getElementById("PercentageTable");
  table.innerHTML = "";

  // firstly got array of name and mark then converted that array into an object
  let markArr = [];
  let nameArr = [];
  let nameCount = [];
  for (let i = 0; i < name_val.length; i++) {
    markArr.push(mark_val[i].value);
    nameArr.push(name_val[i].value.toLowerCase());
  }

  //counting of index as per the name comes
  const uniqueNames = new Set(nameArr);
  Array.from(uniqueNames).forEach((uniquename, uindex) => {
    count = 0;
    nameArr.forEach((name) => {
      if (uniquename == name) {
        count++;
        nameCount[uindex] = count;
      }
    });
  });

  //conversion of our array as object below with key value pairs
  const keyValueObject = {};
  for (let i = 0; i < mark_val.length; i++) {
    keyValueObject[name_val[i].value] = parseInt(mark_val[i].value);
  }

  // removing of duplicate elements from an object and summed their values.
  acc = {};
  nameArr.map((name, index) => {
    acc[name] = (acc[name] || 0) + keyValueObject[name];
  });


  // conversion of object into an array
  let keyVal = Object.keys(acc);
  let valValue = Object.values(acc);

  let row1 = table.insertRow(0);
  let Newcell = row1.insertCell(0);
  let Newcell1 = row1.insertCell(1);
  let Newcell2 = row1.insertCell(2);
  let Newcell3 = row1.insertCell(3);
  Newcell.innerHTML = `<th>Id</th>`;
  Newcell1.innerHTML = `<th>Name</th>`;
  Newcell2.innerHTML = `<th>Marks</th>`;
  Newcell3.innerHTML = `<th>Percentage</th>`;
  for (let i = 0; i < keyVal.length; i++) {
    if (name_val[i].parentElement.parentElement.classList.value == "showcontent") {
    let row = table.insertRow(-1);
    let Cell1 = row.insertCell(0);
    let Cell2 = row.insertCell(1);
    let Cell3 = row.insertCell(2);
    let Cell4 = row.insertCell(3);

    if (mark_val[i].value >= 33) {
      Cell1.parentElement.classList.add("pass-col");
    }
    Cell1.innerHTML = `<tr><td>${new_val}</td>`;
    Cell2.innerHTML = `<td>${keyVal[i]}</td>`;
    Cell3.innerHTML = `<td>${valValue[i]}</td>`;
    Cell4.innerHTML = `<td> ${valValue[i] / nameCount[i]}%</td> </tr>`;
    if (mark_val[i].value <= 33) {
      Cell1.parentElement.classList.add("tab-col");
    }
    new_val++;
  }
  }
  new_val = 1;
  let PercentTableHead = document.getElementById("percentTable");
  PercentTableHead.style.display = "block";
};

///////////////////////////////////////////////////////////// color changing onclick of button /////////////////////////////////////////////////////////////////////////////////////////
//logic - firstly i taken buttons by querryselectorall then just added an event listener which changes colour of button onclicking of event

const failBtn = document.querySelectorAll(".fail-btn");
const passBtn = document.querySelectorAll(".pass-btn");
failBtn.forEach((button, index1) => {
  button.addEventListener("click", function () {
    this.style.backgroundColor = "red";
    passBtn[index1].style.backgroundColor = " cyan";
    this.parentElement.parentElement.classList.remove("showcontent");  // for  removing of failed button values
  });
});

passBtn.forEach((button, index2) => {
  button.addEventListener("click", function () {
    this.style.backgroundColor = "#16FF00";
    failBtn[index2].style.backgroundColor = "#f387ab";
    this.parentElement.parentElement.classList.toggle("showcontent");  // for adding passed button values
  });
});

