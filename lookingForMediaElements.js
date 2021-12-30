var i = 0;
function findMediaElement(elementList){
    if(elementList.length === 0) {
        return;
    }
    if(elementList.length > 0) {
        elementList = [...elementList, ...elementList[0]?.childNodes]
    }
    if(elementList[0] instanceof HTMLMediaElement){
        console.log(element)
    } else {
        console.log(i++, elementList.length);
        elementList.shift();
        findMediaElement(elementList)
    }
}