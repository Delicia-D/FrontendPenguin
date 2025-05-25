document.getElementById("uploadForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const form = e.target;
    const formData = new FormData(form);
  
    fetch("https://penguin-monitoring-backend.onrender.com/upload", {
      method: "POST",
      body: formData
    })
    .then(res => {
      if (!res.ok) throw new Error("Upload failed");
      return res.json();
    })
    .then(data => {
      document.getElementById("uploadMessage").innerText = "Upload successful!";
      form.reset();
    })
    .catch(err => {
      console.error(err);
      document.getElementById("uploadMessage").innerText = "Upload failed.";
    });
  });
  
  function applySavedTheme() {
    const savedTheme = localStorage.getItem('themePreference');
    const lightMode = document.getElementById('upload-light-stylesheet');
    const darkMode = document.getElementById('upload-dark-stylesheet');

    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      lightMode.disabled = false;
      darkMode.disabled = true;
    } else {
      document.body.classList.remove('light-mode');
      lightMode.disabled = true;
      darkMode.disabled = false;
    }
  }

  document.addEventListener('DOMContentLoaded', applySavedTheme);
document.getElementById("uploadForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    const uploadMessage = document.getElementById("uploadMessage");
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<div class="loading-spinner"></div> Uploading...';
    uploadMessage.innerText = "";
    uploadMessage.className = ""; // Reset any previous classes

    fetch("https://penguin-monitoring-backend.onrender.com/upload", {
      method: "POST",
      body: formData
    })
    .then(res => {
      if (!res.ok) throw new Error("Upload failed");
      return res.json();
    })
    .then(data => {
      uploadMessage.innerText = "Upload successful!";
      uploadMessage.className = "success";
      form.reset();
    })
    .catch(err => {
      console.error(err);
      uploadMessage.innerText = "Upload failed. Please try again.";
      uploadMessage.className = "error";
    })
    .finally(() => {
      // Reset button state
      submitButton.disabled = false;
      submitButton.textContent = "Submit Data";
    });
});

function applySavedTheme() {
    const savedTheme = localStorage.getItem('themePreference');
    const lightMode = document.getElementById('upload-light-stylesheet');
    const darkMode = document.getElementById('upload-dark-stylesheet');

    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      lightMode.disabled = false;
      darkMode.disabled = true;
    } else {
      document.body.classList.remove('light-mode');
      lightMode.disabled = true;
      darkMode.disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', applySavedTheme);

  