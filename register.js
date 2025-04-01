document.getElementById('occupation').addEventListener('change', function() {
  const additionalInput = document.getElementById('additionalInput');
  additionalInput.innerHTML = '';

  if (this.value === 'student') {
    additionalInput.innerHTML = `
      <label for="institution">Institution Name</label>
      <input type="text" id="institution" required />
    `;
  } else if (this.value === 'professional') {
    additionalInput.innerHTML = `
      <label for="profession">Profession</label>
      <input type="text" id="profession" required />
    `;
  }
});

document.getElementById('accountForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value;
    const occupation = document.getElementById('occupation').value;

    const data = { name, email, password, phone, gender, occupation };

    try {
      const response = await fetch('http://127.0.0.1:8000/users/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const name = document.getElementById('name').value;
        const queryParams = `name=${encodeURIComponent(name)}`;
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

