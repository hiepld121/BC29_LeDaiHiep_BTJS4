// Bài 1

document.getElementById("btnXuat").onclick = function (){
    var so1 = document.getElementById("so1").value*1;
    var so2 = document.getElementById("so2").value*1;
    var so3 = document.getElementById("so3").value*1;

    var max = so1;
    var min = "";
    var soConLai = "";

    max = so1;

    if(so2 > max && so2 > so3){
        max = so2;

        if(so1 > so3){
            soConLai = so1
            min = so3;
        }else{
            min = so1;
            soConLai = so3;
        }

    }else if(so2 > max && so2 <so3){
        max = so3;

        if(so1 > so2){
            soConLai = so1;
            min = so2;
        }else{
            soConLai = so2;
            min = so1;
        }

    }else if(so3 > max && so3 >so2){
        max = so3;
        
        if(so1 > so2){
            soConLai = so1;
            min = so2;
        }else{
            soConLai = so2;
            min = so1;
        }

    }else if (so2>so3){
        soConLai = so2;
        min = so3;
    }else{
        min = so2;
        soConLai = so3;
    }

    document.getElementById("soCuoi").innerHTML = min +" "+  soConLai+" "+ max;
}


//Bài 2

document.getElementById("btnChao").onclick = function (){
    
    var id = document.getElementById("nguoiSuDung").value;

    var number ="";

    if(id == "Bố"){
        number = 1;
    }else if(id == "Mẹ"){
        number = 2;
    }else if(id == "Anh"){
        number = 3;
    }else if(id == "Em"){
        number = 4;
    }else {
        alert("Máy chỉ cho Bố, Mẹ, Anh, Em dùng");
    }


    switch(number){
        case 1:
            document.getElementById("xinChao").innerHTML = "Xin chào Bố";
        break;

        case 2:
            document.getElementById("xinChao").innerHTML = "Xin chào Mẹ";
        break;

        case 3:
            document.getElementById("xinChao").innerHTML = "Xin chào Anh";
        break;

        case 4:
            document.getElementById("xinChao").innerHTML = "Xin chào Em";
        break;
    }
}


//Bài 3

document.getElementById("btnDem").onclick = function(){
    var soa = document.getElementById("soa").value*1;
    var sob = document.getElementById("sob").value*1;
    var soc = document.getElementById("soc").value*1;
    
    var soChan = 0;
    var soLe = 0;
    
    if(soa % 2 == 0)
    {
        soChan++;
    }
    else
    {
        soLe++;
    }
    
    if(sob % 2 == 0)
    {
        soChan++;
    }
    else
    {
        soLe++;
    }
    
    if(soc % 2 == 0)
    {
        soChan++;
    }
    else
    {
        soLe++;
    }
    
    
    document.getElementById("soD").innerHTML = "Có " + soChan + " số chẵn và " + soLe + " số lẻ" ;
}

//Bài 4


document.getElementById("btnTamGiac").onclick = function(){
    var canh1 = document.getElementById("canh1").value*1;
    var canh2 = document.getElementById("canh2").value*1;
    var canh3 = document.getElementById("canh3").value*1;

    var loaiTamGiac = "";

    if(canh1 == canh2 || canh1 == canh3 || canh2 == canh3){
        loaiTamGiac = "tam giác cân";
    }else if(canh1 == canh2 && canh1 == canh3 && canh2 == canh3){
        loaiTamGiac = "tam giác đều";
    }else if(canh1 == Math.sqrt( Math.pow(canh2,2) + Math.pow(canh3,2))
        || canh2 == Math.sqrt(Math.pow(canh1,2) + Math.pow(canh3,2))
        || canh3 == Math.sqrt( Math.pow(canh2,2) + Math.pow(canh1,2)) ){
        
        

       loaiTamGiac = "tam giác vuông";

    }else{
        loaiTamGiac = "tam giác thường";
    }
    

    document.getElementById("tamGiac").innerHTML = "Đây là tam giác  " + loaiTamGiac;

}

