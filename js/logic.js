document.getElementById("formt").style.display="none";
var count=0;
function validate()
{
  document.getElementById("varheader").innerHTML="Add Subscriber";
  var name=document.getElementById("newname").value;
  var num=document.getElementById("newnum").value;
  document.getElementById("newname").style.borderColor='green';
  document.getElementById("newnum").style.borderColor='green';
  var ar=0;
  if(name.length==0)
  {
    document.getElementById("newname").style.borderColor='red';
    ar=1;
  }
  if(num.length<10)
  {
    document.getElementById("newnum").style.borderColor='red';
    ar=1;
  }
  if(name.length>0 && num.length>=10)
  {
    var numbers = /^[0-9]+$/;
    if(num.match(numbers))
    {
      demo(); 
    }
    else
    {
      ar=1;
      document.getElementById("newnum").style.borderColor='red';
    }
  }
  if(ar==1)
  {
    alert("Name and Number can't be blank and number must be 10 digits long.");
  }
}
function demo()
{
  document.getElementById("varheader").innerHTML="Phone Directory";
  var name=document.getElementById("newname");
  var num=document.getElementById("newnum");
  var st1=document.getElementById("chan").innerHTML;
  var st='<tr id="tablerow'+count.toString()+'"><td>'+name.value+'</td><td>'+num.value+'</td>\
    <td><button type="submit" class="btn button-remove" onclick="del('+count+');">DELETE</button>\
    </td></tr>';
  name.value=null;
  num.value=null;
  if(st1.length == 0)
  {
    mainst=st;
    document.getElementById("chan").innerHTML=mainst;
  }
  else
  {
    mainst=st1+st;
    document.getElementById("chan").innerHTML=mainst;
  }      
  count++;
  document.getElementById("formt").style.display="none";
  document.getElementById("maindata").style.display="block";
  var tmp=document.getElementById("add")
  tmp.removeChild(document.getElementById("add2"));
  var back='<button id="add2" type="submit" class="btn button-add" onclick="add()">ADD</button>';
  tmp.innerHTML=back;
}
function add()
{
  document.getElementById("varheader").innerHTML="Add Subscriber";
  var tmp=document.getElementById("add")
  tmp.removeChild(document.getElementById("add2"));
  var back='<button id="add2" type="submit" class="btn button-add" onclick="back()">BACK</button>';
  tmp.innerHTML=back;
  document.getElementById("addname").innerHTML=null;
  document.getElementById("addnum").innerHTML=null;
  document.getElementById("formt").style.display="block";
  document.getElementById("maindata").style.display="none";
  document.getElementById("newname").style.borderColor='green';
  document.getElementById("newnum").style.borderColor='green';
}
function back()
{
  document.getElementById("varheader").innerHTML="Phone Directory";
  var tmp=document.getElementById("add")
  tmp.removeChild(document.getElementById("add2"));
  var back='<button id="add2" type="submit" class="btn button-add" onclick="add()">ADD</button>';
  tmp.innerHTML=back;
  document.getElementById("formt").style.display="none";
  document.getElementById("maindata").style.display="block";    
}
function del(x)
{
  var t=x
  var st="tablerow"+t.toString();
  var parent=document.getElementById("chan");
  var child = document.getElementById(st);
  parent.removeChild(child);      
}
function chname()
{
  var val2=document.getElementById("newname");
  if(val2!=null)
  {
    var val = val2.value;
    document.getElementById("addname").innerHTML=""+val.toString();
  }
}
function chnum()
{
  var val2=document.getElementById("newnum");
  if(val2!=null)
  {
    var val = val2.value;
    document.getElementById("addnum").innerHTML=""+val.toString();
  }
}

