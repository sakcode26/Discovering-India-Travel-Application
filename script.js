const cityInfo = {
  "delhi": {
    "placesToSee": ["<br> Red Fort", "<br> India Gate", " <br> Qutub Minar"],
    "Hotels Nearby": ["<br> The Leela Palace", "<br> The Oberoi", "<br> Taj Palace"],
    "famous Food": ["<br> Butter Chicken", " <br> Chole Bhature", "<br> Paranthas in Chandni Chowk"],
    "averageBudget": "5000",
  gif: "https://www.mistay.in/travel-blog/content/images/2020/07/travel-4813658_1920.jpg"
  },
  "mumbai": {
     "placesToSee": ["<br> Gateway of India", "<br> Marine Drive", "<br>Elephanta Caves"],
    "hotelsNearby": ["<br> The Taj Mahal Palace", "<br> The Oberoi", "<br> JW Marriott Mumbai Juhu"],
    "Famous Food": ["<br> Vada Pav", "<br> Pav Bhaji", "<br> Bombay Duck <br>"],
    "averageBudget": "6000",
    gif: "https://i.pinimg.com/originals/63/28/0f/63280fdb3762b63b59c97a1fcb5783fe.jpg"
   
  },
  "kolkata": {
    "placesToSee": ["Victoria Memorial <br>", "Howrah Bridge <br>", "Dakshineswar Kali Temple"],
    "hotelsNearby": ["Hotel P", "Hotel Q", "Hotel R"],
    "gif":
      "https://www.mistay.in/travel-blog/content/images/2020/07/howrah-bridge-1.jpg",
    "averageBudget": "5500"
  },
  "chennai": {
    "placesToSee <br>": ["Marina Beach <br>", "Kapaleeshwarar Temple <br>", "San Thomas Basilica"],
    "hotelsNearby": ["Hotel M", "Hotel N", "Hotel O"],
    "famousFood": ["Chettinad Cuisine", "Idli", "Dosa", "Filter Coffee"],
    "averageBudget": "5200"
  },
  "bangalore": {
    "placesToSee": ["Lalbagh Botanical Garden", "Bangalore Palace", "Cubbon Park"],
    "hotelsNearby": ["Hotel D", "Hotel E", "Hotel F"],
    "averageBudget": "5300"
  },
  "ahmedabad": {
    "placesToSee": ["Sabarmati Ashram", "Kankaria Lake", "Adalaj Stepwell"],
    "hotelsNearby": ["Hotel G", "Hotel H", "Hotel I"],
    "averageBudget": "4800"
  },
  "jaipur": {
    "placesToSee": ["Hawa Mahal", "City Palace", "Amber Fort"],
    "hotelsNearby": ["Hotel J", "Hotel K", "Hotel L"],
    "averageBudget": "5400"
  },
  "hyderabad": {
    "placesToSee": ["<br> Golconda", " <br> Charminar", "<br> Makkah Masjid"],
    "Hotels Nearby": ["<br> Taj Falaknuma Palace", "<br> Novotel Hyderabad Convention Centre", "<br> Park Hyatt Hyderabad"],
     "famousFood": ["<br> Hyderabadi Biryani", "<br> Haleem", "<br> Hyderabadi Marag"],
    "averageBudget": "4000",
    "gif":
      "http://1.bp.blogspot.com/-eqBQo9TI2MI/UkHJJZilvfI/AAAAAAAAAIA/1Qg0z3CWAb0/s1600/Charminar,_Hyderabad,_Andhra_Pradesh.JPG"
   
  }
  // Add more cities and information as needed
  
};

// Add more cities and information as needed

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const city = document.getElementById('city').value.toLowerCase();

  if (city in cityInfo) {
    const info = cityInfo[city];
    const resultsDiv = document.getElementById('results');

    // Clear previous results
    resultsDiv.innerHTML = '';
    
     const gif = document.createElement("img");
      gif.src = info.gif;
      gif.alt = `${city} GIF`;
      gif.style.width = "100%";
      resultsDiv.appendChild(gif);

    // Create title
    const title = document.createElement('h2');
    title.textContent = city.toUpperCase();
    title.style.textAlign = 'center';
    resultsDiv.appendChild(title);

    // Create expandable buttons and content
    Object.keys(info).forEach(key => {
      const button = document.createElement('button');
      button.textContent = key.replace(/([A-Z])/g, ' $1').trim(); // Add spaces to button label
      button.classList.add('expandable-button');
      const contentDiv = document.createElement('div');
      contentDiv.classList.add('content');
      contentDiv.style.display = 'none'; // Initially hide content

      button.addEventListener('click', function() {
        if (contentDiv.style.display === 'none') {
          contentDiv.style.display = 'block'; // Show content when button is clicked
        } else {
          contentDiv.style.display = 'none'; // Hide content if already visible
        }
      });

      if (key === 'averageBudget') {
        contentDiv.innerHTML = `<p>${key}: ₹${info[key]}</p>`; // Display budget with currency symbol
      } else {
        contentDiv.innerHTML = `<p>${key}: ${info[key].join(', ')}</p>`; // Populate content for other keys
      }
      resultsDiv.appendChild(button);
      resultsDiv.appendChild(contentDiv);
    });
  } else {
    // City not found in the mapping
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p>City not found or information not available.</p>`;
  }
});
document.getElementById('calculateCost').addEventListener('click', function() {
  const days = document.getElementById('days').value;
  const people = document.getElementById('people').value;
  const costPerDay = 2000; // Example cost per day

  const totalCost = days * costPerDay * people;

  const costOutput = document.getElementById('costOutput');
  costOutput.textContent = `Total Cost for ${people} people for ${days} days: ₹${totalCost}`;
});
setTimeout(() => {
  document.getElementById('openingPage').style.display = 'none';
  showCityInfo(); // Replace with the function to display city information
}, 5000);
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const city = document.getElementById('city').value.toLowerCase();

  if (city in cityInfo) {
    const info = cityInfo[city];
    const resultsDiv = document.getElementById('results');

    // Clear previous results
    resultsDiv.innerHTML = '';
    
    // Create and append image
    const gif = document.createElement("img");
    gif.src = info.gif;
    gif.alt = `${city} GIF`;
    gif.classList.add('city-image'); // Add a class for styling
    resultsDiv.appendChild(gif);

    // Create title
    const title = document.createElement('h2');
    title.textContent = city.toUpperCase();
    title.style.textAlign = 'center';
    resultsDiv.appendChild(title);

    // Create expandable buttons and content
    Object.keys(info).forEach(key => {
      const button = document.createElement('button');
      button.textContent = key.replace(/([A-Z])/g, ' $1').trim(); // Add spaces to button label
      button.classList.add('expandable-button');
      const contentDiv = document.createElement('div');
      contentDiv.classList.add('content');
      contentDiv.style.display = 'none'; // Initially hide content

      button.addEventListener('click', function() {
        if (contentDiv.style.display === 'none') {
          contentDiv.style.display = 'block'; // Show content when button is clicked
        } else {
          contentDiv.style.display = 'none'; // Hide content if already visible
        }
      });

      if (key === 'averageBudget') {
        contentDiv.innerHTML = `<p>${key}: ₹${info[key]}</p>`; // Display budget with currency symbol
      } else {
        contentDiv.innerHTML = `<p>${key}: ${info[key].join(', ')}</p>`; // Populate content for other keys
      }
      resultsDiv.appendChild(button);
      resultsDiv.appendChild(contentDiv);
    });
  } else {
    // City not found in the mapping
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p>City not found or information not available.</p>`;
  }
});

// Rest of the code remains unchanged
// Rest of the code remains unchanged

// Event listener for form submission
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const city = document.getElementById('city').value.toLowerCase();

  if (city in cityInfo) {
    const info = cityInfo[city];
    const resultsDiv = document.getElementById('results');

    // Clear previous results
    resultsDiv.innerHTML = '';
    
    // Create and append image
    const gif = document.createElement("img");
    gif.src = info.gif;
    gif.alt = `${city} GIF`;
    gif.classList.add('city-image'); // Add a class for styling
    resultsDiv.appendChild(gif);

    // Create title
    const title = document.createElement('h2');
    title.textContent = city.toUpperCase();
    title.style.textAlign = 'center';
    resultsDiv.appendChild(title);

    // Create expandable buttons and content
    Object.keys(info).forEach(key => {
      const button = document.createElement('button');
      button.textContent = key.replace(/([A-Z])/g, ' $1').trim(); // Add spaces to button label
      button.classList.add('expandable-button');
      const contentDiv = document.createElement('div');
      contentDiv.classList.add('content');
      contentDiv.style.display = 'none'; // Initially hide content

      button.addEventListener('click', function() {
        if (contentDiv.style.display === 'none') {
          contentDiv.style.display = 'block'; // Show content when button is clicked
        } else {
          contentDiv.style.display = 'none'; // Hide content if already visible
        }
      });

      if (key === 'averageBudget') {
        contentDiv.innerHTML = `<p>${key}: ₹${info[key]}</p>`; // Display budget with currency symbol
      } else {
        // Modify the content output for other keys
        switch (key) {
          case 'placesToSee':
            contentDiv.innerHTML = `<h3>${key}:</h3><ul>${info[key].map(item => `<li>${item}</li>`).join('')}</ul>`;
            break;
          case 'hotelsNearby':
            contentDiv.innerHTML = `<h3>${key}:</h3><ul>${info[key].map(item => `<li>${item}</li>`).join('')}</ul>`;
            break;
          case 'famousFood':
            contentDiv.innerHTML = `<h3>${key}:</h3><ul>${info[key].map(item => `<li>${item}</li>`).join('')}</ul>`;
            break;
          default:
            contentDiv.innerHTML = `<p>${key}: ${info[key]}</p>`;
            break;
        }
      }
      resultsDiv.appendChild(button);
      resultsDiv.appendChild(contentDiv);
    });
  } else {
    // City not found in the mapping
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p>City not found or information not available.</p>`;
  }
});
