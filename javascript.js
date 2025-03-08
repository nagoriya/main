function generateResume() {
    let name = document.getElementById("name").value;
    let Address = document.getElementById("Address").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let skills = document.getElementById("skills").value;
    let experience = document.getElementById("experience").value;
    let CareerObjective = document.getElementById("Career Objective").value;
    let education = document.getElementById("education").value;

    let resumeContent = `
        <h2>${name}</h2>
        <p><strong>Address:</strong> ${Address}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Career Objective:</strong> ${CareerObjective}</p>
        <p><strong>Education:</strong> ${education}</p>
    `;

    document.getElementById("resumeOutput").innerHTML = resumeContent;
}
function generatePDF() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    let name = document.getElementById("name").value;
    let Address = document.getElementById("Address").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let skills = document.getElementById("skills").value;
    let experience = document.getElementById("experience").value;
    let CareerObjective = document.getElementById("Career Objective").value;
    let education = document.getElementById("education").value;

    let content = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Address: ${Address}
        Skills: ${skills}
        Experience: ${experience}
        Career Objective: ${CareerObjective}
        Education: ${education}
    `;

    doc.text(content, 10, 10);
    doc.save("Resume.pdf");
}