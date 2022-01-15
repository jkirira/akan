        
const button = document.getElementById("submit-button");
const date = document.getElementById("DOB")
const male_radio = document.getElementById("male_radio")
const female_radio = document.getElementById('female_radio')
const output = document.getElementById("outputname")


const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]

const names = {
    'Sunday':   {   'Male': 'Kwasi',
                    'Female': ['Akosua', 'Esi']
                },
    'Monday':   {   'Male': 'Kwadwo',
                    'Female': 'Adwoa'
                }, 
    'Tuesday':  {   'Male': ['Kwabena', 'Ebo'],
                    'Female': 'Abena'
                },
    'Wednesday':{   'Male': ['Kwaku', 'Yooku'],
                    'Female': 'Akua'
                }, 
    'Thursday': {   'Male': 'Yaw',
                    'Female': 'Yaa'
                },
    'Friday':   {   'Male': 'Kofi',
                    'Female': 'Afia'
                },
    'Saturday': {   'Male': 'Kwame', 
                    'Female': ['Amba', 'Ama']
                },
}

const genders = ['Male', "Female"]

gender_input = null


male_radio.addEventListener('click', () => {
    gender_input = 1
})

female_radio.addEventListener('click', () => {
    gender_input = 2
})


if(button){
button.addEventListener('click', (e) => {
    if(!date.value){
        alert("Please enter your birth date")
        return
    }
    if(!gender_input){
        alert("Please enter gender field")
        return
    }

    if(gender_input && date.value){
        getName(date.value, gender_input)
    }

})
}

function getName(d, g){

    date_object = new Date(d);
    date_index = date_object.getDay();
    day_of_the_week = days[date_index]

    gender = genders[g-1]

    name_value = names[day_of_the_week][gender]
    if ( typeof(name_value) == "string" ) {
        akan_name = name_value
    } else if ( typeof(name_value) == "object" ) {
        akan_name = name_value.join('.')
    } else {
        akan_name = name_value
    }

    output.textContent = akan_name
    return akan_name;
}

// module.exports = getName

