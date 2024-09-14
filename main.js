document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;
    // Create resume HTML
    const resumeHTML = `
    <h2>${name}'s Resume</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
    <h3>Work Experience</h3>
    <p>${experience} </p>
`;
    // Display resume
    document.getElementById('resume-display').innerHTML = resumeHTML;
});