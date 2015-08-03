// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
    var $body = document.body;
    var results = [];
    scanChildNodes($body);
    return results;
    
    function scanChildNodes(element) {
        var $classList = element.classList;
        if ($classList !== undefined && $classList.length > 0) {
            for (var key in $classList) {
                if ($classList.hasOwnProperty(key)) {
                    if ($classList[key] === className) {
                        results.push(element);
                    }
                }
            }
        }
        var $childNodes = element.childNodes;
        if ($childNodes.length > 0) {
            for (var node in $childNodes) {
                if($childNodes.hasOwnProperty(node) && $childNodes[node].nodeType === 1) {
                    scanChildNodes($childNodes[node]);
                }
            }
        }
    }
};
