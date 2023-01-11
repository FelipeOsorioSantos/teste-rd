export const hideEmail = (email: string |undefined) => {
    if(email){

        let emailArr = email.split("")
        const atPosition = emailArr.indexOf("@")
    
        emailArr[atPosition - 1] = "*"
        emailArr[atPosition - 2] = "*"
        emailArr[atPosition - 3] = "*"
        emailArr[atPosition - 4] = "*"
    
    const hiddenEmail = emailArr.join('')
    return hiddenEmail
    }

}

export const hideCellphone = (cellphone: string |undefined) => {
    if(cellphone) {

        let cellphoneArr = cellphone.split("")
        const atPosition = cellphoneArr.indexOf("-")
    
        cellphoneArr[atPosition - 1] = "*"
        cellphoneArr[atPosition - 2] = "*"
        cellphoneArr[atPosition - 3] = "*"
        cellphoneArr[atPosition - 4] = "*"
    
    const hiddenCellphone = cellphoneArr.join('')
    return hiddenCellphone
    }

}