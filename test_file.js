var days = new Array()
days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]

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
    
    console.log(akan_name)
    return akan_name;
}

// module.exports(getName)