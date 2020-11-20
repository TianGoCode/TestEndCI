function getUnique(array) {
    var uniqueArray = [];
    for (i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

function checkDuplicate() {
    let firstArray = [];
    let secondArray = [];
    let count1 = Number(prompt('nhập số phần tử của mảng đầu tiên: '));
    let count2 = Number(prompt('nhập số phần tử của mảng thứ hai: '));
    if (Number.isNaN(count1) || Number.isNaN(count2)) {
        alert('bạn đã nhập sai định dạng, vui lòng nhập một số tự nhiên')
        window.location.reload();
    } else {
        for (let i = 0; i < count1; i++) {
            firstArray.push(prompt('nhập các phần tử cho mảng thứ nhất:'));
        }
        for (let i = 0; i < count2; i++) {
            secondArray.push(prompt('nhập các phần tử cho mảng thứ hai:'));
        }
    }
    let output = []


    for(let item1 of firstArray){
        for(let item2 of secondArray){
            if(firstArray.indexOf(item2) ===-1){
                output.push(item2)
            }
            if(secondArray.indexOf(item1)===-1){
                output.push(item1)
            }
        }
    }

    output = getUnique(output);
    console.log(output)

}


//2.
var league = [];

function addTeam() {
    let add = true;
    let team = {
        name: prompt('nhập tên của đội bóng: '),
        point: Number(prompt('nhập điểm của đội bóng:')),
        GD: Number(prompt('nhập hiệu số đội bóng'))
    }
    for (let item of league) {
        if (item.name == team.name) {
            console.log('đội bóng đã tồn tại');
            add = false
        }
    }
    if (Number.isNaN(team.point) || Number.isNaN(team.GD)) {
        console.log('bạn đã nhập sai định dạng, vui lòng nhập một số tự nhiên');
        add = false;
    }
    if (add == true) {
        league.push(team);
        console.log('đã thêm đội bóng vào giải đấu');
    }
    ranking();
}

function ranking() {
    for (var i = 0; i < league.length; i++) {
        for (var j = (i + 1); j < league.length; j++) {
            if (league[i].point < league[j].point) {
                var tmp = league[i]
                league[i] = league[j]
                league[j] = tmp
            }
        }
    }

    for (var i = 0; i < league.length; i++) {
        for (var j = (i + 1); j < league.length; j++) {
            if (league[i].point == league[j].point) {
                if (league[i].GD < league[j].GD) {
                    var tmp = league[i]
                    league[i] = league[j]
                    league[j] = tmp
                }
            }
        }
    }



}