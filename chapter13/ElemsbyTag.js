<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  function byTagName(node, tagName) {

    var matching = []

    function checkInner(node){

      for (var i = 0; i < node.childNodes.length; i++) {
        var childElem = node.childNodes[i];
        if (childElem.nodeType == document.ELEMENT_NODE) {
          if(childElem.nodeName.toLowerCase() == tagName.toLowerCase()){
            matching.push(childElem);
		  }
          checkInner(childElem);
		}

      }

  }
    checkInner(node);
   	return matching;
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>
