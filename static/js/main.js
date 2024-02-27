// main form
var form = new FormData();


// vars
var app_name = document.getElementById('app_name');
var app_model = document.getElementById('app_model');
var model_name_view = document.getElementById('model_name_view');

let has_uuid = false;
form.append('has_uuid',has_uuid)

var has_uuid_checkbox = document.getElementById('has_uid');



app_name.addEventListener('change',()=>{
    form.append('app_name',app_name.value)
})

// change the model name vlaue
app_model.addEventListener('change',()=>{
    form.append('app_model',app_model.value)
    model_name_view.textContent = app_model.value;
})


has_uuid_checkbox.addEventListener('change',()=>{
    has_uuid = has_uuid_checkbox.checked;
    form.set('has_uuid',has_uuid)
})


// fields section
var fields = [];

var field = document.getElementById('field');
var type = document.getElementById('type');
var fields_counter = document.getElementById('fields_counter');

var AddFieldBtn = document.getElementById('add_field');

var f_string = '';
AddFieldBtn.addEventListener('click',()=>{
    if (field.value && type.value != 'Type'){
        fields.push(
            {'name':field.value,'type':type.value}
        )
        
        f_string += `${field.value},${type.value}@`;
        // if (form.get('fields')){
        //     f += form.get('fields')
        // }
        // form.append('fields', f)

        field.value = '';
        type.value = 'Type';
    }else{
        alert('please insert the field name and the type.')
    }

    fields_counter.textContent = fields.length;

})



