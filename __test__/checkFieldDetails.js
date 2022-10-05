//Jest.js used for testing
function checkFieldDetails(id, size, soil_type){
    if(isNaN(id) || id == ""){
        return "Field ID should be a number with 1-255 characters";
    }
    else if(isNaN(size) || size == ""){
        return "Size should be a number with 1-255 characters";
    }
    else if(soil_type == ""){ 
        return "No Soil type selected";
    }
    else{
        return "Field details successfully submitted";
    }
}

module.exports = checkFieldDetails;