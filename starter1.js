class Starship() {
    phaserEnergy = 1000;
    numberOfPhotonTorpedos = 20;
    energyPerPhotonTorpedo = 50;
    shieldStrength = 1000;
    FleetDesignation = "";

   
    firePhasers() {
        // acquire the Object Reference for the Enemy Ship
         
        phaserAttackStrength = Math.random() * (100);
       // enemyShip.shieldStrength -= this.phaserAttackStrength;
        return 'Firing Phasers'
    }
    reportShieldStrength(){
        console.log("Shield Strength is " + this.shieldStrength);
    }
}

// Create the Arrays to hold the Starships of each Fleet
var FederationOrderOfBattle = Array(); 
var RomulanOrderOfBattle = Array(); 

// make 20 Federation Ships
for (counter = 0; counter < 20; counter++){
    FederationOrderOfBattle[counter] = new Starship(1000);
}


// const Enterprise = new Starship();
// Enterprise.reportShieldStrength();
