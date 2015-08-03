// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
  	return "null";
  } else if (obj === true) {
  	return "true";
  } else if (obj === false) {
  	return "false"
  } else if (typeof obj === "number") {
  	return "" + obj;
  } else if (typeof obj === "string") {
  	return "\"" + obj + "\"";
  } else if (Array.isArray(obj)) {
  	var result = "["
	for (var i = 0; i < obj.length; i++) {
	  if (i === obj.length - 1) {
	    result = result.concat(stringifyJSON(obj[i]));
	  } else {
	  	result = result.concat(stringifyJSON(obj[i])) + ",";
	  }
	 }
	 result = result.concat("]");
	 return result;
  } else if (typeof obj === "object") {
  	var result = "{";
	for(var keys = Object.keys(obj), i = 0, end = keys.length; i < end; i++) {
		if (typeof obj[keys[i]] !== "function" && obj[keys[i]] !== undefined) {
	  		result = result.concat(stringifyJSON(keys[i]) + ":" + stringifyJSON(obj[keys[i]]));
	  		if (i !== end - 1) {
	  			result = result.concat(",");
	  		}
	  	}
  	}
  	result = result.concat("}");
  	return result;
  }
};
