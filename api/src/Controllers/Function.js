

const kilometers = (distance) => { //PASA LA DISTANCIA A KMS
    return Math.round(distance / 1000) + ' km'
}

const hours = (num) => {    // TRANSFORMA EL TIEMPO EN HRS/HRS-MIN
    const timeArray = (num/3600).toString().split('.')
    const decimals = timeArray[1].slice(0,2)
    const minutes = Math.floor(decimals / 60)

    if (timeArray > 0 && minutes > 0) {
        return parseInt(timeArray[0]) + ' hrs ' + parseInt(minutes) + ' mins.'
    }
    if (timeArray <= 0 && minutes > 0) {
        return parseInt(minutes) + ' mins.'
    }
    
    
    return parseInt(timeArray[0]) + ' hrs.'
};

module.exports ={hours, kilometers}