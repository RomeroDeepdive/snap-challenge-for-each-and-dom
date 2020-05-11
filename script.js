var name, text
Names = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah']
	name[0] = 'Bob'
document.getElementById('Bob').innerHTML = name[0]

text = "<ul>"
Names.forEach(myFunction)
text += "</ul>"

function myFunction(value) {
	text += "<li>" + value + "</li>"
}
