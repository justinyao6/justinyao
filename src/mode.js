/* Dark-Mode*/ 

//stores user's preference locally
const element = document.body;
let mode = "light";
let selectedCompany = "WM";

function myFunction(){
    element.classList.toggle("dark-mode");
    
    if(element.classList.contains("dark-mode")){
        localStorage.setItem('theme','dark')
        mode = 'dark';
    }
    else{
        localStorage.setItem('theme', 'light')
        mode = 'light';
    }
    
    changeDescription(selectedCompany);
}
//loads the preference
window.addEventListener('DOMContentLoaded', () =>{
    const user_saved = localStorage.getItem('theme');
    if(user_saved == 'dark'){
        element.classList.add("dark-mode");
        mode = 'dark';
    }
    else{
        mode = 'light';
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
            title: `Software Engineer`+ color_query + ` @ WM</span>`,
            language: '<img src="clogo.png" alt="" class="logo">C#',
            dates: "June-August 2024",
            points: `
                  <li>Developed a C#/.NET and SQL application to enhance Fastlane’s capabilities.</li>
                <li>Integrated POS systems with modern databases for improved functionality.</li>
                <li>Automated ticket processing across landfill sites, streamlining operations.</li>
            `,
    
        },
        TekCrafter: {
            title: `Frontend Developer`+ color_query+ ` @ TekCrafter</span>`,
            //language: '<img src="jslogo.png" alt="" class="logo">JavaScript',
            dates: "January-May 2024",
            points: `
               <li>Designed and implemented a responsive website for a tech consulting firm.</li>
        <li>Enhanced scheduling features and showcased the company’s portfolio.</li>
        <li>Collaborated with a team using Agile methodologies to deliver ahead of schedule.</li>
            `,
        },
        Steel: {
            title: `Teaching Assistant` + color_query+ ` @ Steel City Codes</span>`,
            //language: '<img src="pythonlogo.png" alt="" class="logo">Python',
            dates: "January-May 2022",
            points: `
              <li>Mentored students in Java programming and coding practices.</li>
        <li>Created a supportive learning environment with personalized guidance.</li>
        <li>Assisted in organizing and running coding workshops and events.</li>
            `,
        },
    }
    description.classList.remove("visible");
    setTimeout(() => {
    const companyData = descriptions[id];
    if(companyData) {
        description.innerHTML = `
      <strong>${companyData.title}</strong>
      <div class="language">${companyData.language}</div>
      <small>${companyData.dates}</small>
      <br>
      <ul>
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


