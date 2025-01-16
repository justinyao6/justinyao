/* Dark-Mode*/ 

//stores user's preference locally
const element = document.body;
let mode = "light";
let selectedCompany = "WM";

function myFunction(){
    const name = document.getElementById("full-name");
    element.classList.toggle("dark-mode");
    const end = document.getElementById('end');
    const icon = document.getElementById('mode');
    if(element.classList.contains("dark-mode")){
        localStorage.setItem('theme','dark')
        mode = 'dark';
        name.style.color = 'tomato';
        end.style.backgroundColor = '#35383Ee6'
        icon.src = 'logos/sun.png'
    }
    else{
        localStorage.setItem('theme', 'light')
        mode = 'light';
        name.style.color = '#5360FD';
        end.style.backgroundColor = '#C3b79de6'
        icon.src = 'logos/moon.png'
    }
    
    changeDescription(selectedCompany);
}
//loads the preference
window.addEventListener('DOMContentLoaded', () =>{
    const user_saved = localStorage.getItem('theme');
    const name = document.getElementById("full-name");
    const end = document.getElementById('end');
    const icon = document.getElementById('mode');
    if(user_saved == 'dark'){
        element.classList.add("dark-mode");
        mode = 'dark';
        name.style.color = 'tomato';
        end.style.backgroundColor = '#35383Ee6'
        icon.src = 'logos/sun.png'
    }
    else{
        mode = 'light';
        name.style.color = '#5360FD';
        end.style.backgroundColor = '#C3b79de6'
        icon.src = 'logos/moon.png'
    }
    changeDescription(selectedCompany);
});

/* Dark-Mode*/ 


/* Company section */
function changeOpacity(id){
    document.getElementById(id).style.opacity = 1;
    
}

//change color to aquarime and make it bold
//also opacity to be 1
//also change the descriptions


function changeDescription(id){
    const description = document.getElementById("company-description");
    let color_query;
    
    if(mode == 'dark'){
        color_query = '<span style="color: aquamarine;">'
        
    }
    else if(mode == 'light'){
        color_query = '<span style="color: orangered;">'
      
    }
    const descriptions = {
        WM: {
            title: `<u> Software Engineer</u>`+ color_query + ` @ WM</span>`,
            languages: `
                <div class="languages"><img src="./logos/clogo.png" alt="C#" class="logo"> C#</div>
                <div class="languages"><img src="./logos/Microsoft_.NET_logo.svg.png" alt=".Net" class="logo"> .Net</div>
                <div class="languages"><img src="./logos/aws.png" alt="Aws" class="logo"> AWS</div>
                <div class="languages"><img src="./logos/oracle.png" alt="SQL" class="logo"> SQL</div>
            `,
            dates: "June-August 2024",
            points: `
                <li>Developed a <strong> C#/.NET </strong> and <strong>SQL</strong> application to enhance and provide modern features to Fastlane(WM's POS System)</li>
                <li>Updated<strong> SQL queries</strong> to enhance the Fastlane application in <strong>Oracle</strong> and <strong>SSMS </strong>databases for major project release
                <li><strong>Automated</strong> the email ticketing process using <strong>Twilio</strong> and stored ticket data on <strong>AWS S3</strong>, streamlining operations.</li>
                `,
    
        },
        TekCrafter: {
            title: `<u>Frontend Developer</u>`+ color_query+ ` @ TekCrafter</span>`,
            languages: `
                <div class="languages"><img src="./logos/jslogo.png" alt="JavaScript" class="logo">JavaScript</div>
                <div class="languages"><img src="./logos/html5.png" alt="HTML" class="logo">HTML</div>
                <div class="languages"><img src="./logos/css.svg" alt="CSS" class="logo">CSS</div>
            
            `,
            dates: "January-May 2024",
            points: `
                <li>Designed and implemented a responsive website for a startup tech consulting firm.</li>
                <li>Enhanced scheduling features and showcased the company’s portfolio.</li>
                <li>Collaborated with a team using <strong>Agile</strong>methodologies to deliver ahead of schedule.</li>
            `,
        },
        Steel: {
            title: `<u>Teaching Assistant</u>` + color_query+ ` @ Steel City Codes</span>`,
            languages: `
                <div class="languages"><img src="./logos/java.webp" alt="Java" class="logo">Java</div>
                <div class="languages"><img src="./logos/python.png" alt="Python" class="logo">Python</div>
            `,
            dates: "January-May 2022",
            points: `
              <li>Mentored students in Java and Python learning</li>
        <li>Helped design learning ciriculum</li>
        <li>Assisted in organizing and running coding workshops and events.</li>
            `,
        },
    }
    description.classList.remove("visible");
    setTimeout(() => {
        const companyData = descriptions[id];
        if(companyData) {
           
          
           description.innerHTML = `
            <strong id="title">${companyData.title}</strong>
            <div class="language-box">${companyData.languages}</div>
            <em id="date">${companyData.dates}</em>
            <ul id="points">
                ${companyData.points}
            </ul>
            `;
            
           
        }

        description.classList.add("visible"); // Fade in new content
  }, 500);


    const companies = document.querySelectorAll("#company p");
    companies.forEach((company) => {
        company.classList.remove("selected-1", "selected-2");
        if(company.id == id){
            if (mode === "dark") {
                company.classList.add("selected-1");
            } else {
                company.classList.add("selected-2");
            }
            
            company.style.opacity = 1;

        }
        else{
            
            company.style.opacity = 0.5;
        }

    });

    selectedCompany = id;
}



/* Company section */


