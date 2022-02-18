// code your solution here
function superbowlWin(record) {
    const found = record.find(function(element){
        return element.result === "W"
    })
return (found === undefined? undefined : found.year)
};