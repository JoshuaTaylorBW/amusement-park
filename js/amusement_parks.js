module.exports = {
  indexById: function (data) {
    var Holder = {};
    for(var i = 0; i < data.length; i++){
      var obj = {}
      for(var key in data[i]) {
        var value = data[i][key];
        obj[key] = data[i][key];
      }
      Holder[data[i]["id"]] = obj;
    }
    return Holder;
  },

  indexByCountry: function (data) {
    var usedCountryNames = getCountryNames(data);
    var Holder = {};
    for(var i = 0; i < usedCountryNames.length; i++){
      Holder[usedCountryNames[i]] = [];
      for(var j = 0; j < data.length; j++){
        if(data[j]["country"] === usedCountryNames[i]){
          Holder[usedCountryNames[i]].push(data[j]);
        }
      }
    }
    return Holder;
  }

}

function getCountryNames(data) {
  var usedCountryNames = [];
  for(var i = 0; i < data.length; i++){
    if(i === 0){
      usedCountryNames.push(data[i]["country"]);
    }
    for(var j = 0; j < usedCountryNames.length; j++){
      if(data[i]["country"] !== usedCountryNames[j]){
        usedCountryNames.push(data[i]["country"]);
      }
    }
  }
  return usedCountryNames;
}
