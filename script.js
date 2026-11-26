// ===================================
// 1. INTERNSHIP INFORMATION
// ===================================

const internships = [
    {
        company: "Amazon",
        role: "Web Development Intern",
        domain: "Web Development",
        location: "Hyderabad"
    },
    {
        company: "Google",
        role: "Cybersecurity Intern",
        domain: "Cybersecurity",
        location: "Bangalore"
    },
    {
        company: "Microsoft",
        role: "Data Science Intern",
        domain: "Data Science",
        location: "Hyderabad"
    },
    {
        company: "Infosys",
        role: "Frontend Developer Intern",
        domain: "Web Development",
        location: "Pune"
    },
    {
        company: "IBM",
        role: "Security Analyst Intern",
        domain: "Cybersecurity",
        location: "Mumbai"
    },
    {
        company: "TCS",
        role: "Data Analyst Intern",
        domain: "Data Science",
        location: "Chennai"
    }
];


// ===================================
// 2. SELECT HTML ELEMENTS
// ===================================

const internshipList =
    document.getElementById("internshipList");

const searchInput =
    document.getElementById("searchInput");

const domainFilter =
    document.getElementById("domainFilter");


// ===================================
// 3. DISPLAY INTERNSHIP CARDS
// ===================================

function displayInternships(data) {

    try {

        internshipList.innerHTML = "";

        if (!Array.isArray(data)) {
            throw new Error("Invalid internship data");
        }

        // Empty state

        if (data.length === 0) {

            internshipList.innerHTML = `
                <div class="message">
                    <h3>No internships found!</h3>
                    <p>Try changing your search or domain.</p>
                </div>
            `;

            return;
        }

        // Create internship cards

        data.forEach(function(internship) {

            const card = document.createElement("div");

            card.className = "internship-card";

            const heading = document.createElement("h3");
            heading.textContent = internship.company;

            const role = document.createElement("p");
            role.textContent = "Role: " + internship.role;

            const domain = document.createElement("p");
            domain.textContent = "Domain: " + internship.domain;

            const location = document.createElement("p");
            location.textContent = "Location: " + internship.location;

            card.appendChild(heading);
            card.appendChild(role);
            card.appendChild(domain);
            card.appendChild(location);

            internshipList.appendChild(card);

        });

    } catch (error) {

        internshipList.innerHTML = `
            <div class="message error">
                <h3>Something went wrong!</h3>
                <p>Unable to display internships. Please try again.</p>
            </div>
        `;

        console.error(error);

    }

}


// ===================================
// 4. SEARCH AND FILTER FUNCTIONALITY
// ===================================

function filterInternships() {

    const searchText =
        searchInput.value.toLowerCase();

    const selectedDomain =
        domainFilter.value;

    const filteredInternships =
        internships.filter(function(item) {

            const matchesSearch =
                item.company.toLowerCase().includes(searchText) ||
                item.role.toLowerCase().includes(searchText) ||
                item.location.toLowerCase().includes(searchText);

            const matchesDomain =
                selectedDomain === "all" ||
                item.domain === selectedDomain;

            return matchesSearch && matchesDomain;

        });

    displayInternships(filteredInternships);

}


// ===================================
// 5. EVENT LISTENERS
// ===================================

searchInput.addEventListener("input", filterInternships);

domainFilter.addEventListener("change", filterInternships);


// ===================================
// 6. DISPLAY ALL INTERNSHIPS
// ===================================

displayInternships(internships);