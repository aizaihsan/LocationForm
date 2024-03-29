

const countries = ["Pakistan", "Germany", "Canada", "France", "Turkey"];

const states = {
    "Pakistan": ["Sindh", "Punjab", "Balochistan", "Khyber Pakhtunkhwa"],
    "Germany": ["Berlin", "Hamburg", "Munich", "Cologne"],
    "Canada": ["Ontario", "Quebec", "British Columbia", "Alberta"],
    "France": ["Île-de-France", "Provence-Alpes-Côte d'Azur", "Auvergne-Rhône-Alpes"],
    "Turkey": ["Istanbul", "Ankara", "Izmir", "Bursa"]
};


const cities =
{
    "Sindh": ["Karachi", "Hyderabad", "Sukkur"],
    "Punjab": ["Lahore", "Faisalabad", "Rawalpindi"],
    "Balochistan": ["Quetta", "Gwadar", "Khuzdar"],
    "Khyber Pakhtunkhwa": ["Peshawar", "Abbottabad", "Mardan"],
    "Berlin": ["Berlin City", "Potsdam", "Oranienburg"],
    "Hamburg": ["Hamburg City", "Bergedorf", "Harburg"],
    "Munich": ["Munich City", "Augsburg", "Ingolstadt"],
    "Cologne": ["Cologne City", "Bonn", "Düsseldorf"],
    "Ontario": ["Toronto", "Ottawa", "Mississauga"],
    "Quebec": ["Montreal", "Quebec City", "Laval"],
    "British Columbia": ["Vancouver", "Victoria", "Burnaby"],
    "Alberta": ["Calgary", "Edmonton", "Red Deer"],
    "Île-de-France": ["Paris", "Versailles", "Boulogne-Billancourt"],
    "Provence-Alpes-Côte d'Azur": ["Marseille", "Nice", "Toulon"],
    "Auvergne-Rhône-Alpes": ["Lyon", "Grenoble", "Saint-Étienne"],
    "Istanbul": ["Fatih", "Beyoğlu", "Kadıköy"],
    "Ankara": ["Çankaya", "Keçiören", "Yenimahalle"],
    "Izmir": ["Konak", "Karşıyaka", "Bornova"],
    "Bursa": ["Osmangazi", "Yıldırım", "Nilüfer"]
};



function populateCountries()
{
    const country= document.getElementById('country'); // parent element
    const defaultOption=document.createElement("option");
    defaultOption.text="Select a Country";
    defaultOption.value='';
    country.appendChild(defaultOption);

    for (let value  of countries)
    {
        const optionElement=document.createElement("option");
        optionElement.text= value;
        optionElement.value=value;
        country.appendChild(optionElement);
    }

}

function populateStates()
{

    let selectedCountry=document.getElementById('country').value;
    let state= document.getElementById('state');
    let city= document.getElementById('city');
    city.innerHTML="";

    state.innerHTML = "";
    const defaultOption=document.createElement("option");
    defaultOption.text="Select a State";
    defaultOption.value='';
    state.appendChild(defaultOption);

    const stateOfCountry= states [selectedCountry];


    for (let value  of stateOfCountry)
    {
        const optionElement=document.createElement("option");
        optionElement.text= value;
        optionElement.value=value;
        state.appendChild(optionElement);
    }


}

function populateCities()
{
    let selectedState=document.getElementById('state').value;
    let city= document.getElementById('city');
    city.innerHTML="";
    const defaultOption=document.createElement("option");
    defaultOption.text="Select a City";
    defaultOption.value='';
    city.appendChild(defaultOption);

    const cityOfState= cities [selectedState];


    for (let value  of cityOfState)
    {
        const optionElement=document.createElement("option");
        optionElement.text= value;
        optionElement.value=value;
        city.appendChild(optionElement);
    }

}


function reloadPage()
{
    location.reload();
}