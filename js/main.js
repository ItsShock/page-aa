document.addEventListener("DOMContentLoaded", (e) => {

    let substractBtn = document.getElementsByClassName("substract");
    let counter = document.getElementsByClassName("count");
    let addBtn = document.getElementsByClassName("add");
    let totalPurchases = document.getElementsByClassName("totalPurchases");
    let cartQuantity = document.getElementsByClassName("cartQuantity");
    let addToBasket = document.getElementsByClassName("addToBasket");
    let newPrice = document.getElementsByClassName("newPrice");
    let oldPrice = document.getElementsByClassName("oldPrice");
    let addMaskBtn = document.getElementsByClassName("chooseAdditionallyProductsMask");
    let firstPhotoFrame = document.getElementsByClassName("firstPhotoFrame");
    let photoFrame = document.getElementsByClassName("photoFrame");
    let imgRedLine = document.getElementsByClassName("imgRedLine");
    let photoFrameMini = document.getElementsByClassName("photoFrameMini");
    let photoFrameMiniWithBorder = document.getElementsByClassName("photoFrameMiniWithBorder");
    let photoFrameMiniWithBorderLast = document.getElementsByClassName("photoFrameMiniWithBorderLast");
    let imgRedLineMini = document.getElementsByClassName("imgRedLineMini");
    let arrowDownFlag = document.getElementById("arrowDownFlag");

    let count = 1;
    let countquantity = 0;
    let newprice = 1278;
    let oldprice = 1499;
    let additionalcosts = 0;

    substractBtn[0].addEventListener("click", (e) => {
        if( count > 0)
        {
            count--;
            counter[0].innerText = count;
            newprice -= 1278;
            oldprice -= 1499;
        }
        else
        {
            counter[0].innerText = "0";
        }
        newPrice[0].innerText = parseFloat(newprice) + ",00 zł";
        oldPrice[0].innerText = parseFloat(oldprice) + ",00 zł";
    });

    addBtn[0].addEventListener("click", (e) => {

        if (count === 1)
        {
            count++;
            counter[0].innerText = count;
            newprice += 1278;
            oldprice += 1499;
        }
        else if (count >= 14)
        {
            counter[0].innerText = count;
        }
        else
        {
            count++;
            counter[0].innerText = count;
            newprice += 1278;
            oldprice += 1499;

        }
        newPrice[0].innerText = parseFloat(newprice) + ",00 zł";
        oldPrice[0].innerText = parseFloat(oldprice) + ",00 zł";
    });

    addToBasket[0].addEventListener("click", (e) => {
        totalPurchases[0].innerText = parseFloat(newprice) +",00 zł";
        cartQuantity[0].innerText = count;
    });

    for (var i = 0 ; i < addMaskBtn.length; i++) {
        addMaskBtn[i].addEventListener("click", (e) => {
            countquantity++;
            additionalcosts += 139;
            counter[0].innerText = count;
            totalPurchases[0].innerText = ((newprice) + additionalcosts ) + ",00 zł";
            cartQuantity[0].innerText = ((count) + countquantity);
            counter[0].innerText = "1";
        });
    }

    firstPhotoFrame[0].addEventListener("click", (e) =>{
        firstPhotoFrame[0].style.border = "none";
        firstPhotoFrame[0].appendChild(imgRedLine[0]);
        firstPhotoFrame[0].style.display = "flex";
        firstPhotoFrame[0].style.flexDirection = "column";
        
        for (let i = 0 ; i < photoFrame.length; i++)
        {
            photoFrame[i].style.border = "2px solid #EBEBEB";
            photoFrame[i].style.width = "82px";
            photoFrame[i].style.height = "82px";
            photoFrame[i].style.display = "flex";
            photoFrame[i].style.alignItems = "center";
            photoFrame[i].style.justifyContent = "center";
            photoFrame[i].style.margin = "5px 0px"
        }
    });
    
    photoFrame[0].addEventListener("click", (e) => {
        photoFrame[0].style.border = "none";
        photoFrame[0].appendChild(imgRedLine[0]);
        photoFrame[0].style.display = "flex";
        photoFrame[0].style.flexDirection = "column";
        imgRedLine[0].style.marginBottom = "-25px"

        firstPhotoFrame[0].style.border = "2px solid #EBEBEB";
        firstPhotoFrame[0].style.width = "82px";
        firstPhotoFrame[0].style.height = "82px";
        firstPhotoFrame[0].style.display = "flex";
        firstPhotoFrame[0].style.alignItems = "center";
        firstPhotoFrame[0].style.justifyContent = "center";
        firstPhotoFrame[0].style.margin = "5px 0px"

        for (let i = 1 ; i < photoFrame.length; i++)
        {
            photoFrame[i].style.border = "2px solid #EBEBEB";
            photoFrame[i].style.width = "82px";
            photoFrame[i].style.height = "82px";
            photoFrame[i].style.display = "flex";
            photoFrame[i].style.alignItems = "center";
            photoFrame[i].style.justifyContent = "center";
            photoFrame[i].style.margin = "5px 10px";
        }
    });

    photoFrame[1].addEventListener("click", (e) => {
        firstPhotoFrame[0].style.border = "2px solid #EBEBEB";
        firstPhotoFrame[0].style.width = "82px";
        firstPhotoFrame[0].style.height = "82px";
        firstPhotoFrame[0].style.display = "flex";
        firstPhotoFrame[0].style.alignItems = "center";
        firstPhotoFrame[0].style.justifyContent = "center";
        firstPhotoFrame[0].style.margin = "5px 0px"
        
        photoFrame[1].style.border = "none";
        photoFrame[1].appendChild(imgRedLine[0]);
        photoFrame[1].style.display = "flex";
        photoFrame[1].style.flexDirection = "column";
        imgRedLine[0].style.marginBottom = "-25px";

        for (let i = 0; i < photoFrame.length; i++)
        {
            if(i == 1) continue;
            photoFrame[i].style.border = "2px solid #EBEBEB";
            photoFrame[i].style.width = "82px";
            photoFrame[i].style.height = "82px";
            photoFrame[i].style.display = "flex";
            photoFrame[i].style.alignItems = "center";
            photoFrame[i].style.justifyContent = "center";
            photoFrame[i].style.margin = "5px 0px"
        }
    });

    photoFrame[2].addEventListener("click", (e) => {
        firstPhotoFrame[0].style.border = "2px solid #EBEBEB";
        firstPhotoFrame[0].style.width = "82px";
        firstPhotoFrame[0].style.height = "82px";
        firstPhotoFrame[0].style.display = "flex";
        firstPhotoFrame[0].style.alignItems = "center";
        firstPhotoFrame[0].style.justifyContent = "center";
        firstPhotoFrame[0].style.margin = "5px 0px"
        
        photoFrame[2].style.border = "none";
        photoFrame[2].appendChild(imgRedLine[0]);
        photoFrame[2].style.display = "flex";
        photoFrame[2].style.flexDirection = "column";
        imgRedLine[0].style.marginBottom = "-25px"

        for (let i = 0; i < photoFrame.length; i++)
        {
            if(i == 2) continue;
            photoFrame[i].style.border = "2px solid #EBEBEB";
            photoFrame[i].style.width = "82px";
            photoFrame[i].style.height = "82px";
            photoFrame[i].style.display = "flex";
            photoFrame[i].style.alignItems = "center";
            photoFrame[i].style.justifyContent = "center";
            photoFrame[i].style.margin = "5px 0px"
        }
    });

    photoFrame[3].addEventListener("click", (e) => {
        firstPhotoFrame[0].style.border = "2px solid #EBEBEB";
        firstPhotoFrame[0].style.width = "82px";
        firstPhotoFrame[0].style.height = "82px";
        firstPhotoFrame[0].style.display = "flex";
        firstPhotoFrame[0].style.alignItems = "center";
        firstPhotoFrame[0].style.justifyContent = "center";
        firstPhotoFrame[0].style.margin = "5px 0px"
        
        photoFrame[3].style.border = "none";
        photoFrame[3].appendChild(imgRedLine[0]);
        photoFrame[3].style.display = "flex";
        photoFrame[3].style.flexDirection = "column";
        imgRedLine[0].style.marginBottom = "-25px";

        for (let i = 0; i < photoFrame.length; i++)
        {
            if(i == 3) continue;
            photoFrame[i].style.border = "2px solid #EBEBEB";
            photoFrame[i].style.width = "82px";
            photoFrame[i].style.height = "82px";
            photoFrame[i].style.display = "flex";
            photoFrame[i].style.alignItems = "center";
            photoFrame[i].style.justifyContent = "center";
            photoFrame[i].style.margin = "5px 0px"
        }
    });

    photoFrame[4].addEventListener("click", (e) => {
        firstPhotoFrame[0].style.border = "2px solid #EBEBEB";
        firstPhotoFrame[0].style.width = "82px";
        firstPhotoFrame[0].style.height = "82px";
        firstPhotoFrame[0].style.display = "flex";
        firstPhotoFrame[0].style.alignItems = "center";
        firstPhotoFrame[0].style.justifyContent = "center";
        firstPhotoFrame[0].style.margin = "5px 0px"
        
        photoFrame[4].style.border = "none";
        photoFrame[4].appendChild(imgRedLine[0]);
        photoFrame[4].style.display = "flex";
        photoFrame[4].style.flexDirection = "column";
        imgRedLine[0].style.marginBottom = "-25px"

        for (let i = 0; i < photoFrame.length; i++)
        {
            if(i == 4) continue;
            photoFrame[i].style.border = "2px solid #EBEBEB";
            photoFrame[i].style.width = "82px";
            photoFrame[i].style.height = "82px";
            photoFrame[i].style.display = "flex";
            photoFrame[i].style.alignItems = "center";
            photoFrame[i].style.justifyContent = "center";
            photoFrame[i].style.margin = "5px 0px"
        }
    });

    photoFrameMini[0].addEventListener("click", (e) =>{
        photoFrameMini[0].style.border = "none";
        photoFrameMini[0].appendChild(imgRedLineMini[0]);
        photoFrameMini[0].style.display = "flex";
        photoFrameMini[0].style.flexDirection = "column";

        for (let i = 0 ; i < photoFrameMiniWithBorder.length; i++) 
        {
            photoFrameMiniWithBorder[i].style.border = "2px solid #EBEBEB";
            photoFrameMiniWithBorder[i].style.width = "68px";
            photoFrameMiniWithBorder[i].style.height = "68px";
            photoFrameMiniWithBorder[i].style.display = "flex";
            photoFrameMiniWithBorder[i].style.alignItems = "center";
            photoFrameMiniWithBorder[i].style.justifyContent = "center";
            photoFrameMiniWithBorder[i].style.margin = "0px 6px";
        }
    });

    photoFrameMiniWithBorder[0].addEventListener("click", (e) =>{
        photoFrameMini[0].style.border = "2px solid #EBEBEB";
        photoFrameMini[0].style.width = "68px";
        photoFrameMini[0].style.height = "68px";
        photoFrameMini[0].style.display = "flex";
        photoFrameMini[0].style.alignItems = "center";
        photoFrameMini[0].style.justifyContent = "center";
        photoFrameMini[0].style.margin = "0px 6px"

        for (let i = 1 ; i < photoFrameMiniWithBorder.length; i++) 
        {
            photoFrameMiniWithBorder[i].style.border = "2px solid #EBEBEB";
            photoFrameMiniWithBorder[i].style.width = "68px";
            photoFrameMiniWithBorder[i].style.height = "68px";
            photoFrameMiniWithBorder[i].style.display = "flex";
            photoFrameMiniWithBorder[i].style.alignItems = "center";
            photoFrameMiniWithBorder[i].style.justifyContent = "center";
            photoFrameMiniWithBorder[i].style.margin = "0px 6px";
        }


        photoFrameMiniWithBorder[0].style.border = "none";
        photoFrameMiniWithBorder[0].appendChild(imgRedLineMini[0]);
        photoFrameMiniWithBorder[0].style.display = "flex";
        photoFrameMiniWithBorder[0].style.flexDirection = "column";
        imgRedLineMini[0].style.marginBottom = "-20px";
        imgRedLineMini[0].style.marginTop = "10px";

        photoFrameMiniWithBorderLast[0].style.border = "2px solid #EBEBEB";
        photoFrameMiniWithBorderLast[0].style.width = "68px";
        photoFrameMiniWithBorderLast[0].style.height = "68px";
        photoFrameMiniWithBorderLast[0].style.display = "flex";
        photoFrameMiniWithBorderLast[0].style.alignItems = "center";
        photoFrameMiniWithBorderLast[0].style.justifyContent = "center";
        photoFrameMiniWithBorderLast[0].style.margin = "0px 6px";
    });

    photoFrameMiniWithBorder[1].addEventListener("click", (e) =>{
        photoFrameMini[0].style.border = "2px solid #EBEBEB";
        photoFrameMini[0].style.width = "68px";
        photoFrameMini[0].style.height = "68px";
        photoFrameMini[0].style.display = "flex";
        photoFrameMini[0].style.alignItems = "center";
        photoFrameMini[0].style.justifyContent = "center";
        photoFrameMini[0].style.margin = "0px 6px";

        for (let i = 0 ; i < photoFrameMiniWithBorder.length; i++) 
        {
            if( i==1) continue;
            photoFrameMiniWithBorder[i].style.border = "2px solid #EBEBEB";
            photoFrameMiniWithBorder[i].style.width = "68px";
            photoFrameMiniWithBorder[i].style.height = "68px";
            photoFrameMiniWithBorder[i].style.display = "flex";
            photoFrameMiniWithBorder[i].style.alignItems = "center";
            photoFrameMiniWithBorder[i].style.justifyContent = "center";
            photoFrameMiniWithBorder[i].style.margin = "0px 6px";
        }


        photoFrameMiniWithBorder[1].style.border = "none";
        photoFrameMiniWithBorder[1].appendChild(imgRedLineMini[0]);
        photoFrameMiniWithBorder[1].style.display = "flex";
        photoFrameMiniWithBorder[1].style.flexDirection = "column";
        imgRedLineMini[0].style.marginBottom = "-20px";
        imgRedLineMini[0].style.marginTop = "10px";

        photoFrameMiniWithBorderLast[0].style.border = "2px solid #EBEBEB";
        photoFrameMiniWithBorderLast[0].style.width = "68px";
        photoFrameMiniWithBorderLast[0].style.height = "68px";
        photoFrameMiniWithBorderLast[0].style.display = "flex";
        photoFrameMiniWithBorderLast[0].style.alignItems = "center";
        photoFrameMiniWithBorderLast[0].style.justifyContent = "center";
        photoFrameMiniWithBorderLast[0].style.margin = "0px 6px";
    });

    photoFrameMiniWithBorder[2].addEventListener("click", (e) =>{
        photoFrameMini[0].style.border = "2px solid #EBEBEB";
        photoFrameMini[0].style.width = "68px";
        photoFrameMini[0].style.height = "68px";
        photoFrameMini[0].style.display = "flex";
        photoFrameMini[0].style.alignItems = "center";
        photoFrameMini[0].style.justifyContent = "center";
        photoFrameMini[0].style.margin = "0px 6px";

        for (let i = 0 ; i < photoFrameMiniWithBorder.length; i++) 
        {
            if( i==2) continue;
            photoFrameMiniWithBorder[i].style.border = "2px solid #EBEBEB";
            photoFrameMiniWithBorder[i].style.width = "68px";
            photoFrameMiniWithBorder[i].style.height = "68px";
            photoFrameMiniWithBorder[i].style.display = "flex";
            photoFrameMiniWithBorder[i].style.alignItems = "center";
            photoFrameMiniWithBorder[i].style.justifyContent = "center";
            photoFrameMiniWithBorder[i].style.margin = "0px 6px";
        }


        photoFrameMiniWithBorder[2].style.border = "none";
        photoFrameMiniWithBorder[2].appendChild(imgRedLineMini[0]);
        photoFrameMiniWithBorder[2].style.display = "flex";
        photoFrameMiniWithBorder[2].style.flexDirection = "column";
        imgRedLineMini[0].style.marginBottom = "-20px";
        imgRedLineMini[0].style.marginTop = "10px";

        photoFrameMiniWithBorderLast[0].style.border = "2px solid #EBEBEB";
        photoFrameMiniWithBorderLast[0].style.width = "68px";
        photoFrameMiniWithBorderLast[0].style.height = "68px";
        photoFrameMiniWithBorderLast[0].style.display = "flex";
        photoFrameMiniWithBorderLast[0].style.alignItems = "center";
        photoFrameMiniWithBorderLast[0].style.justifyContent = "center";
        photoFrameMiniWithBorderLast[0].style.margin = "0px 6px";
    });

    photoFrameMiniWithBorder[3].addEventListener("click", (e) =>{
        photoFrameMini[0].style.border = "2px solid #EBEBEB";
        photoFrameMini[0].style.width = "68px";
        photoFrameMini[0].style.height = "68px";
        photoFrameMini[0].style.display = "flex";
        photoFrameMini[0].style.alignItems = "center";
        photoFrameMini[0].style.justifyContent = "center";
        photoFrameMini[0].style.margin = "0px 6px";

        for (let i = 0 ; i < photoFrameMiniWithBorder.length; i++) 
        {
            if( i==3) continue;
            photoFrameMiniWithBorder[i].style.border = "2px solid #EBEBEB";
            photoFrameMiniWithBorder[i].style.width = "68px";
            photoFrameMiniWithBorder[i].style.height = "68px";
            photoFrameMiniWithBorder[i].style.display = "flex";
            photoFrameMiniWithBorder[i].style.alignItems = "center";
            photoFrameMiniWithBorder[i].style.justifyContent = "center";
            photoFrameMiniWithBorder[i].style.margin = "0px 6px";
        }

        photoFrameMiniWithBorder[3].style.border = "none";
        photoFrameMiniWithBorder[3].appendChild(imgRedLineMini[0]);
        photoFrameMiniWithBorder[3].style.display = "flex";
        photoFrameMiniWithBorder[3].style.flexDirection = "column";
        imgRedLineMini[0].style.marginBottom = "-20px";
        imgRedLineMini[0].style.marginTop = "10px";

        photoFrameMiniWithBorderLast[0].style.border = "2px solid #EBEBEB";
        photoFrameMiniWithBorderLast[0].style.width = "68px";
        photoFrameMiniWithBorderLast[0].style.height = "68px";
        photoFrameMiniWithBorderLast[0].style.display = "flex";
        photoFrameMiniWithBorderLast[0].style.alignItems = "center";
        photoFrameMiniWithBorderLast[0].style.justifyContent = "center";
        photoFrameMiniWithBorderLast[0].style.margin = "0px 6px";
    });

    photoFrameMiniWithBorderLast[0].addEventListener("click", (e) =>{
        photoFrameMini[0].style.border = "2px solid #EBEBEB";
        photoFrameMini[0].style.width = "68px";
        photoFrameMini[0].style.height = "68px";
        photoFrameMini[0].style.display = "flex";
        photoFrameMini[0].style.alignItems = "center";
        photoFrameMini[0].style.justifyContent = "center";
        photoFrameMini[0].style.margin = "0px 6px";

        for (let i = 0 ; i < photoFrameMiniWithBorder.length; i++) 
        {
            photoFrameMiniWithBorder[i].style.border = "2px solid #EBEBEB";
            photoFrameMiniWithBorder[i].style.width = "68px";
            photoFrameMiniWithBorder[i].style.height = "68px";
            photoFrameMiniWithBorder[i].style.display = "flex";
            photoFrameMiniWithBorder[i].style.alignItems = "center";
            photoFrameMiniWithBorder[i].style.justifyContent = "center";
            photoFrameMiniWithBorder[i].style.margin = "0px 6px";
        }

        photoFrameMiniWithBorderLast[0].style.border = "none";
        photoFrameMiniWithBorderLast[0].appendChild(imgRedLineMini[0]);
        photoFrameMiniWithBorderLast[0].style.display = "flex";
        photoFrameMiniWithBorderLast[0].style.flexDirection = "column";
        imgRedLineMini[0].style.marginBottom = "-20px";
        imgRedLineMini[0].style.marginTop = "10px";
    });


});