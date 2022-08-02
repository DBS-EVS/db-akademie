import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

var currentPopup = undefined;
var isCoWebSiteOpened =  false;
var urlTutorial = "https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure-erste-schritte";
var urlFeedback = "https://forms.office.com/Pages/ResponsePage.aspx?id=nC2noeZJbU-a9lqvoRg7_f26WHDvlOFNi_8Y43fECOdUMDVDTUpUUDRONkxHMzdLQ09WRlQxUUZSMS4u";
var urlMusik = "https://www.youtube-nocookie.com/embed/36YnV9STBqc?autoplay=1";

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

var zoneTutorial = "tutorial";
var zoneFeedback = "feedback";
var zoneMusik = "musik";
var zoneStaffelei1 = "staffelei1";
var zoneStaffelei2 = "staffelei2";
var zoneStaffelei3 = "staffelei3";
var zoneStaffelei4 = "staffelei4";
var zoneStaffelei5 = "staffelei5";


WA.room.onEnterZone(zoneTutorial, () => {
   currentPopup =  WA.ui.openPopup("popUpTutorial","Tutorial ansehen?",[
        {
            label: "OK",
            callback: (popup => {
                WA.nav.openTab(urlTutorial);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone(zoneTutorial, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

WA.room.onEnterZone(zoneFeedback, () => {
   currentPopup =  WA.ui.openPopup("popUpFeedback","Möchtest du WorkAdventure einen Feedback abgeben?",[
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

WA.room.onEnterZone(zoneMusik, () => {
   currentPopup =  WA.ui.openPopup("popUpMusik","Ein wenig Musik?!",[
        {
            label: "Her damit!",
			callback: (popup => {
                WA.nav.openCoWebSite(urlMusik, false, "autoplay; encrypted-media");
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone(zoneMusik, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

WA.room.onEnterZone(zoneStaffelei1, () => {
   currentPopup =  WA.ui.openPopup("popUpStaffelei1","Was hättest du gerne eher gewusst?",[]);
})

WA.room.onLeaveZone(zoneStaffelei1, () =>{
    closePopUp();
})

WA.room.onEnterZone(zoneStaffelei2, () => {
   currentPopup =  WA.ui.openPopup("popUpStaffelei2","Auf welche Themen kann man Dich immer ansprechen?",[]);
})

WA.room.onLeaveZone(zoneStaffelei2, () =>{
    closePopUp();
})

WA.room.onEnterZone(zoneStaffelei3, () => {
   currentPopup =  WA.ui.openPopup("popUpStaffelei3","Was würdest du tun, wenn alles, was du anfängst, ein Erfolg werden würde?",[]);
})

WA.room.onLeaveZone(zoneStaffelei3, () =>{
    closePopUp();
})

WA.room.onEnterZone(zoneStaffelei4, () => {
   currentPopup =  WA.ui.openPopup("popUpStaffelei4","Worauf freust du dich jeden Tag am meisten?",[]);
})

WA.room.onLeaveZone(zoneStaffelei4, () =>{
    closePopUp();
})

WA.room.onEnterZone(zoneStaffelei5, () => {
   currentPopup =  WA.ui.openPopup("popUpStaffelei5","Was würdest du einem Neuling über die DB erzählen?",[]);
})

WA.room.onLeaveZone(zoneStaffelei5, () =>{
    closePopUp();
})

