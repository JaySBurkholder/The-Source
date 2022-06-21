var formElements=$("#addEvent")
var savedEvents= JSON.parse(localStorage.getItem("events"))||[]
function submitHandler(event) {
    event.preventDefault()
    console.log($(this).serializeArray())
    var userForm= $(this).serializeArray()
    var eventObject={
        name: userForm[0].value,
        notes: userForm[2].value,
        tags: userForm[3].value,
        date: userForm[1].value,
    }
    savedEvents.push(eventObject)
    localStorage.setItem("events",JSON.stringify(savedEvents))

}
 -
formElements.on("submit",submitHandler)