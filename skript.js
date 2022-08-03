import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

var currentPopup = undefined;
var isCoWebSiteOpened =  false;
var urlFeedback = "https://forms.office.com/r/zmL3nDVKC0";

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

var zoneFeedback = "feedbackAkademie";
var zoneStaffelei6 = "staffelei6";

WA.room.onEnterZone(zoneFeedback, () => {
   currentPopup =  WA.ui.openPopup("popUpAkademie","Gib hier dein Feedback zu \"Praktisches Netzwerken\" ab.",[
        {
            label: "OK",
            callback: (popup => {
                WA.nav.openCoWebSite(urlFeedback);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone(zoneFeedback, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

WA.room.onEnterZone(zoneStaffelei6, () => {
   currentPopup =  WA.ui.openPopup("popUpStaffelei6","Was ist dein nützlichstes Talent?\nWelches ist deine Superkraft?",[]);
})

WA.room.onLeaveZone(zoneStaffelei6, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})
