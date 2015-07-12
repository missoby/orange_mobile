var pictureSource;   // picture source
var destinationType; // sets the format of returned value

// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
    alert(destinationType);
    alert("fff");
}
function onPhotoDataSuccess(imageData) {
    alert("onPhotoDataSuccess avant");
    var smallImage = document.getElementById('smallImage');
    smallImage.style.display = 'block';
    smallImage.src = "data:image/jpeg;base64," + imageData;
    alert("onPhotoDataSuccess après");


}

// Called when a photo is successfully retrieved
function onPhotoURISuccess(imageURI) {
    alert("onPhotoURISuccess");
    var smallImage = document.getElementById('smallImage');
    smallImage.style.display = 'block';
    smallImage.src = imageURI;
    alert("onPhotoURISuccess après");
}
// A button will call this function
//
function capturePhoto() {
    alert("capture photos 1");
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {quality: 50,
        destinationType: destinationType.DATA_URL});
    alert("capture photos");
}

// A button will call this function
//
function capturePhotoEdit() {
    // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL});
}

// A button will call this function
//
function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source});
}

// Called if something bad happens.
//
function onFail(message) {
    alert('Failed because: ' + message);
}

alert("fin script");