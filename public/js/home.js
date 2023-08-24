//example fpr ajax request
const fetchSup = async() => {
    const response = await $.ajax('/sup')
    for(let i = 0; i<response.length; i++) {
        $('#sup')[0].innerHTML = response[i].name
    }
    console.log(response)
}

fetchSup()
