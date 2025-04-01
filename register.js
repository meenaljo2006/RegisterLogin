function toggleAlumniFields() {
  const role = document.getElementById("role").value;
  const alumniFields = document.getElementById("alumniFields");
  if (role === "alumni") {
    alumniFields.style.display = "block";
  } else {
    alumniFields.style.display = "none";
  }
}

document.getElementById('accountForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    let graduationYear = null;
    let currentCompany = null;
    let jobTitle = null;
    let bio = null;
    let linkedin = null;

    if (role === 'alumni') {
        graduationYear = document.getElementById('graduationYear').value;
        currentCompany = document.getElementById('currentCompany').value;
        jobTitle = document.getElementById('jobTitle').value;
        bio = document.getElementById('bio').value;
        linkedin = document.getElementById('linkedin').value;
    }

    const data = { username, email, password, confirmPassword, role, graduationYear, currentCompany, jobTitle, bio, linkedin };

    try {
      const response = await fetch('http://127.0.0.1:8000/users/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const username = document.getElementById('username').value;
        const queryParams = `username=${encodeURIComponent(username)}`;
        alert('Account created successfully!');
        window.location.href = `dashboard.html?${queryParams}`;
        
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
        document.getElementById('accountForm').reset();
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.error('Error:', error);
      document.getElementById('accountForm').reset();
    }
  });

