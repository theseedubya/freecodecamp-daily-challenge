function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
//validate video unit
const validVideoUnits = ["B","KB","MB","GB"]
if(!validVideoUnits.includes(videoUnit){
return "Invalid video unit"
}
//validate  drive unit
const validDriveUnits = ["MB","GB"];
if(!validDriveUnits.includes(driveUnit){
return "Invalid drive unit"
}
//convert values to same unit magnitude  to make comparison easier
const videoBytes = videoUnit === "B" ? videoSize : videoSize * 1000//^validVideoUnits.indexOf(videoUnit)

const driveBytes =  driveSize * 1000//^validVideoUnits.indexOf(driveUnit)

//do essentially long division to find out how many videos can fit on the drive

return false // (driveBytes/videoBytes);
}
console.log(numberOfVideos(500, "KB",1000,"KB"))
