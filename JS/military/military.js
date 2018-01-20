class Military {

    constructor () {

        this.army = 0;
        this.navy = 0;
        this.marines = 0;
        this.airForce = 0;
        this.coastGuard = 0;

        this.render();
        this.addMilitary();
    }

    addMilitary () {
        this.addArmy();
        this.addNavy();
        this.addMarines();
        this.addAirForce();
        this.addCoastGuard();
    }


    addArmy () {

        var armyButton = document.getElementById("army-button");
        var armyInput = document.getElementById("army-input");

        armyButton.addEventListener("click", (event) => {
            event.preventDefault();
            if (armyInput.value !== "") {
                this.army += parseInt(armyInput.value);
                let armyHeader = document.getElementById("army-header");
                armyHeader.innerText = "your army has " + this.army; 
                armyInput.value = "";
            }
        })

    }

    addNavy () {

        var navyButton = document.getElementById("navy-button");
        var navyInput = document.getElementById("navy-input");

        navyButton.addEventListener("click", (event) => {
            event.preventDefault();
            if (navyInput.value !== "") {
                this.navy += parseInt(navyInput.value);
                let navyHeader = document.getElementById("navy-header");
                navyHeader.innerText = "your navy has " + this.navy; 
                navyInput.value = "";
            }
        })

    }


    addMarines () {

        var marinesButton = document.getElementById("marines-button");
        var marinesInput = document.getElementById("marines-input");

        marinesButton.addEventListener("click", (event) => {
            event.preventDefault();
            if (marinesInput.value !== "") {
                this.marines += parseInt(marinesInput.value);
                let marinesHeader = document.getElementById("marines-header");
                marinesHeader.innerText = "your marines has " + this.marines; 
                marinesInput.value = "";
            }
        })

    }

    addAirForce () {

        var airForceButton = document.getElementById("airforce-button");
        var airForceInput = document.getElementById("airforce-input");

        airForceButton.addEventListener("click", (event) => {
            event.preventDefault();
            if (airForceInput.value !== "") {
                this.airForce += parseInt(airForceInput.value);
                let airForceHeader = document.getElementById("airforce-header");
                airForceHeader.innerText = "your air force has " + this.airForce; 
                airForceInput.value = "";
            }
        })

    }

    addCoastGuard () {

        var coastGuardButton = document.getElementById("coastguard-button");
        var coastGuardInput = document.getElementById("coastguard-input");

        coastGuardButton.addEventListener("click", (event) => {
            event.preventDefault();
            if (coastGuardInput.value !== "") {
                this.coastGuard += parseInt(coastGuardInput.value);
                let coastGuardHeader = document.getElementById("coastguard-header");
                coastGuardHeader.innerText = "your coast guard has " + this.coastGuard; 
                coastGuardInput.value = "";
            }
        })

    }






    // run (reader) {

        
    //     reader.question("How many army do you wanna add?", (answer) => {
    //         this.army += parseInt(answer);
    //         console.log(`You have ${this.army} army people.`);
    //         reader.question("How many navy people do you wanna add?", (answer) => {
    //             this.navy += parseInt(answer);
    //             console.log(`You have ${this.navy} navy people.`);
    //             reader.close();
    //         })
    //     })

    // }

    render () {
        var militaryRoot = document.getElementById("root");

        var army = document.createElement("h1");
        army.setAttribute("id", "army-header");
        army.innerText = "your army has " + this.army;

        var navy = document.createElement("h1");
        navy.setAttribute("id", "navy-header");
        navy.innerText = "your navy has " + this.navy;

        var marines = document.createElement("h1");
        marines.setAttribute("id", "marines-header");
        marines.innerText = "your marines has " + this.marines;


        var airForce = document.createElement("h1");
        airForce.setAttribute("id", "airforce-header");
        airForce.innerText = "your air force has " + this.airForce;


        var coastGuard = document.createElement("h1");
        coastGuard.setAttribute("id", "coastguard-header");
        coastGuard.innerText = "your coast guard has " + this.coastGuard;


        militaryRoot.appendChild(army);
        militaryRoot.appendChild(navy);
        militaryRoot.appendChild(marines);
        militaryRoot.appendChild(airForce);
        militaryRoot.appendChild(coastGuard);

        
    }


    
}


module.exports = Military;