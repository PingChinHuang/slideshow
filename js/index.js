function load_profile()
{
  var presentation_d = document.getElementById("presentation");
  presentation_d.innerHTML = "Profile";
  var pagelist_d = document.getElementById("pagelist");
  pagelist_d.innerHTML = "<ul><li>Page1</li><li>Page2</li></ul>";
}

var xhr = new XMLHttpRequest();

function ProcessRequest(e)
{
  if (xhr.readyState == 4 && xhr.status == 200)
  {
    //alert("has response? xhr.status = " + xhr.status + " xhr.readyState = " + xhr.readyState);
    //var response = JSON.parse(xhr.responseText);
    //alert(response.ip);
    alert(xhr.responseText);

  }
}

function btn_onclick(id)
{
  var presentation_doc = document.getElementById("presentation");

  xhr.open('GET', "/doc/" + id + '.html', true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200)
    {
      //alert("has response? xhr.status = " + xhr.status + " xhr.readyState = " + xhr.readyState);
      //var response = JSON.parse(xhr.responseText);
      //alert(response.ip);
      alert('doc id = ' + id);
      presentation.innerHTML = xhr.responseText;
    }
  }
}
