function tryLaunch() {
    switch (true) {
        case (parkingBrake === 0 && traction === 0 && gasLevel === 1 && battery === 1 && intStatus === 3):
            document.getElementById(launch).src = './assets/images/lca1.png';
            document.getElementById('launchSound').src = './assets/media/launch.mp3';
            launchSound.play();
            console.log("Launch successful! Enjoy your ride!");
            break;
        case (parkingBrake !== 1):
            console.log("Cannot launch: Parking brake is engaged.");
            break;
        case (traction !== 0):
            console.log("Cannot launch: Traction control is not disabled.");
            break;
        case (gasLevel !== 1):
            console.log("Cannot launch: Gas level is not full.");
            break;
        case (battery !== 1):
            console.log("Cannot launch: Battery is not fully charged.");
            break;
        case (intStatus !== 3):
            console.log("Cannot launch: Mode is not set to SPORT.");
            break;
        default:
            document.getElementById('sputterSound').src = '.assets/media/sputter.mp3';
            sputterSound.play();
            console.log("Cannot launch due to unspecified reasons.");
            break;
    }
}
