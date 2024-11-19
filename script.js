// Question:no:01:
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayGender").textContent = gender;
    document.getElementById("formDataDisplay").classList.remove("hidden");
});
// Question:no:02:
const readMoreBtn = document.querySelector(".read-more-btn");
const fullDescription = document.querySelector(".full-description");

readMoreBtn.addEventListener("click", function () {
    fullDescription.classList.toggle("hidden");
    if (fullDescription.classList.contains("hidden")) {
        readMoreBtn.textContent = "Read More";
    } else {
        readMoreBtn.textContent = "Read Less";
    }
});
// Question:no:03:
const form = document.getElementById("studentForm");
const tableBody = document.querySelector("#studentTable tbody");
let students = [];
function renderTable() {
    tableBody.innerHTML = ""; 
    students.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td>
                <button class="action-btn edit" onclick="editRow(${index})">Edit</button>
                <button class="action-btn delete" onclick="deleteRow(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grade = document.getElementById("grade").value;
    const editIndex = document.getElementById("editIndex").value;

    if (editIndex === "-1") {
        students.push({ name, age, grade });
    } else {
        students[editIndex] = { name, age, grade };
        document.getElementById("editIndex").value = "-1"; 
        form.querySelector("button[type='submit']").textContent = "Submit";
    }

    form.reset(); 
    renderTable(); 
});
function deleteRow(index) {
    students.splice(index, 1); 
    renderTable(); 
}
function editRow(index) {
    const student = students[index];
    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("grade").value = student.grade;
    document.getElementById("editIndex").value = index;
    form.querySelector("button[type='submit']").textContent = "Update";
}
renderTable();

