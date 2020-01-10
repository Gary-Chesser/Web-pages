var creditForm=`<form onSubmit="return validateForm();">
<table>
<tr>
    <td>
        First Name
    </td>
    <td>
        <input type ="text" name="firstname" required>
    </td>
</tr>
<tr>
    <td>
        Last Name
    </td>
    <td>
        <input type ="text" name="lastname" required>
    </td>
</tr>
<tr>
    <td>
        State
    </td>
    <td>
        <select id="state">
            <option value="start" selected disabled hidden>Select State</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="colorado">Colorado</option>
            <option value="connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
        </select>
    </td>
</tr>
<tr>
    <td>
        City
    </td>
    <td>
        <input type ="text" name="city" required>
    </td>
</tr>
<tr>
    <td>
        Address
    </td>
    <td>
        <input type ="text" name="address" required>
    </td>
</tr>
<tr>
    <td>
        Zip
    </td>
    <td>
        <input type ="text" name="zip" required>
    </td>
</tr>
<tr>
    <td>
        Email Address
    </td>
    <td>
        <input type ="text" name="email" required>
    </td>
</tr>
<tr>
    <td>
        Name on Card
    </td>
    <td>
        <input type ="text" name="nameoncard" required>
    </td>
</tr>
<tr>
    <td>
        Card Number
    </td>
    <td>
        <input type ="text" name="cardnumber" required>
    </td>
</tr>
<tr>
    <td>
        <a href="https://en.wikipedia.org/wiki/Card_security_code" target="_blank">CVV2/CVC</a>
    </td>
    <td>
        <input type ="text" name="cvv" required>
    </td>
</tr>
<tr>
    <td>
        Expiration Date
    </td>
    <td>
        <input type ="month" name="expire" value="2019-04" min="2017-01" max="2020-12" required>
    </td>
</tr>
</table>
<table>
    <input type="image" name="submit" src="images/PayNow.png"  border="0" width="65" height="35"/>
        </form>`;
var paypalForm=`<form onSubmit="return validateForm();"> 
<table>
<tr>
<td>
    Email Address
</td>
<td>
    <input type ="text" name="pemail" required>
</td>
</tr>
<tr>
<td>
    Password
</td>
<td>
    <input type ="password" name="psw" required>
</td>
</tr>
</table>
<input type="image" name="submit" src="images/PayNow.png"  border="0" width="65" height="35"/>
</form>`;
document.getElementById("paymentinfo").innerHTML=creditForm; 
function testlength(value,length,exactLength){
    if(exactLength){
        if(value.length==length){
            return true;
        }else{
            return false;
        }
    }else if(value.length >= length){
        return true;
    }else{
        return false;
    }
    
}
function testNumber(value){
    if(!isNaN(value)){
        return true;
    }else{
        return false;
    }
}
function updateForm(control){
   if(control=="creditcard"){
    document.getElementById("paymentinfo").innerHTML=creditForm; 
   }else if(control=="paypal"){
    document.getElementById("paymentinfo").innerHTML=paypalForm; 
   }
}
function validateControl(control,name,length){
    if(testlength(control,length,true)){
        if(testNumber(control)){
            return true;
        }else{
            alert(name+" must contain only numbers");
            return false;
        }

    }else{
        alert(name+" is an must be "+length+" digits long");
        return false;
    }
}
function validateCreditCard(value){
    value=value.split(' ').join('');
    var type= value.charAt(0);
    var length = 0;
    if(type==3){
        length=15;
        if(testlength(value,length,true)){
            if(testNumber(value)){
                return true;
            }else{
                alert("Credit Card Number Must Contain Only Numbers");
                return false;               
            }
        }else{
            alert("Credit Card Number must be 15 digits");
            return false;
        }
    }else if([6,5,4].includes(type)){
        length=16;
        if(testlength(value,length,true)){
            if(testNumber(value)){
                return true;
            }else{
                alert("Credit Card Number Must Contain Only Numbers");
                return false;               
            }
        }else{
            alert("Credit Card Number must be 16 digits");
            return false;
        }
    }else{
        alert("Invalid Credit Card Type");
        return false;
    }

}
function validateDate(value){
    var current= new Date();
    var vyear=value.substring(0,4);
    var vmonth=value.substring(6,7);
    if(current.getFullYear()<vyear){
        return true;
    }else if(current.getFullYear()==vyear){
        if(current.getMonth()<vmonth){
            return true;
        }else{
            alert("Invalid Expiration Date");
            return false;
        }
    }else{
        alert("Invalid Expiration Date");
        return false;       
    }
}
function validateEmail(value){
    var patt= new RegExp("[a-z0-9]+@[a-z0-9]+\.(com|net|org|edu)$")
    if(patt.test(value)){
        return true;
    }else{
        alert("Invalid Email");
        return false;
    }
}
function validateForm(){  

    if(document.getElementById("credit").checked){
        var cn=document.getElementsByName("cardnumber")[0].value;
        var cvc=document.getElementsByName("cvv")[0].value;
        var mail=document.getElementsByName("email")[0].value;
        var exDate=document.getElementsByName("expire")[0].value;
        var zipp=document.getElementsByName("zip")[0].value;
        if(validateControl(cvc,"CVV2/CVC",3)){
            if(validateCreditCard(cn)){
                if(validateDate(exDate)){
                    if(validateEmail(mail)){
                        if(validateState()){
                            if(validateControl(zipp,"Zip",5)){
                                alert("Payment Successful!");
                            }
                        }
                    }
                }
            }
        }
    }else{
        var mails=document.getElementsByName("pemail")[0].value;
        var psw=document.getElementsByName("psw")[0].value;
        if(validateEmail(mails)){
            if(validatePassword(psw,8)){
                alert("Payment Successful!");
            }
        }    
    }
}
function validatePassword(value,minLength){
    if(testlength(value,minLength,false)){
        return true;
    }else{
        alert("Password Must Be Atleast "+minLength+" Characters");
        return false;
    }
}
function validateState(){
    var ops=document.getElementById("state");
    var selectedOp=ops.options[ops.selectedIndex].value;
    if(selectedOp != "start"){
        return true;
    }else{
        alert("Please Select a State");
        return false;
    }
}