/*let bp4pointer = document.querySelector(".bp4-pointer");
let bp4 = document.querySelector(".bp4");
let bp4Scale = function () {
    if (bp4.className === "bp41") {
        bp4.className = "bp4 bp4-scale ";
    }else{
        bp4.className = "bp4";
    }
}
bp4pointer.addEventListener("mousemove", bp4Scale, false);
bp4pointer.addEventListener("mouseleave", bp4Scale, false);
*/

window.onload = function () {
    //清除網址列的錨點  
    window.location.hash = ' ';
    //回到初始視窗位置
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

//滾動到定點才呈現動畫
let RAISEC_Circle = document.querySelector(".RAISEC-Circle");
function winScroll(e) {

    if (window.scrollY > 1020) {

        RAISEC_Circle.classList.add("RAISEC-Circle", "RAISEC-Circle-Aninimation");
    }
}
window.addEventListener('scroll', winScroll);


let Rcontainer = document.querySelector(".R");
let Icontainer = document.querySelector(".I");
let Acontainer = document.querySelector(".A");
let Scontainer = document.querySelector(".S");
let Econtainer = document.querySelector(".E");
let Ccontainer = document.querySelector(".C");

let Container2 = document.querySelector(".Container2");

let RlineDOC = document.querySelector("#Rline");
let RimageDOC = document.querySelector("#Rimage");
let RchartDOC = document.querySelector("#Rchart");
let RresultDOC = document.querySelector("#Rresult");
let RbuttonDOC = document.querySelector(".circleItem-R");
let Rcontext = document.querySelector(".RContext");

let IbuttonDOC = document.querySelector('.circleItem-I');
let IlineDOC = document.querySelector("#Iline");
let IimageDOC = document.querySelector("#Iimage");
let IsubTitleDOC = document.querySelector('.ISubTitle');
let IsubTitle2DOC = document.querySelector('.ISubTitle2');
let IchartDOC = document.querySelector('#Ichart');
let IresultDOC = document.querySelector("#Iresult");
let IcontextDOC = document.querySelector('.IContext');

let AbuttonDOC = document.querySelector('.circleItem-A');
let AlineDOC = document.querySelector("#Aline");
let AimageDOC = document.querySelector("#Aimage");
let AsubTitleDOC = document.querySelector('.ASubTitle');
let AsubTitle2DOC = document.querySelector('.ASubTitle2');
let AchartDOC = document.querySelector('#Achart');
let AresultDOC = document.querySelector("#Aresult");
let AcontextDOC = document.querySelector('.AContext');

let SbuttonDOC = document.querySelector('.circleItem-S');
let SlineDOC = document.querySelector("#Sline");
let SimageDOC = document.querySelector("#Simage");
let SsubTitleDOC = document.querySelector('.SSubTitle');
let SsubTitle2DOC = document.querySelector('.SSubTitle2');
let SchartDOC = document.querySelector('#Schart');
let SresultDOC = document.querySelector("#Sresult");
let ScontextDOC = document.querySelector('.SContext');

let EbuttonDOC = document.querySelector('.circleItem-E');
let ElineDOC = document.querySelector("#Eline");
let EimageDOC = document.querySelector("#Eimage");
let EsubTitleDOC = document.querySelector('.ESubTitle');
let EsubTitle2DOC = document.querySelector('.ESubTitle2');
let EchartDOC = document.querySelector('#Echart');
let EresultDOC = document.querySelector("#Eresult");
let EcontextDOC = document.querySelector('.EContext');

let CbuttonDOC = document.querySelector('.circleItem-C');
let ClineDOC = document.querySelector("#Cline");
let CimageDOC = document.querySelector("#Cimage");
let CsubTitleDOC = document.querySelector('.CSubTitle');
let CsubTitle2DOC = document.querySelector('.CSubTitle2');
let CchartDOC = document.querySelector('#Cchart');
let CresultDOC = document.querySelector("#Cresult");
let CcontextDOC = document.querySelector('.CContext');
//R動畫加載

const RlineControler = new Vivus('Rline', {
    file: ' 行銷頁面/img/Rline.svg',
    onReady: function () {
        //onready 是初始化過程中會去執行的方法 若要一開始就暫停 須在此呼叫
        // RlineControler.stop();
    }
});
const RchartControlller = new Vivus('Rchart', {
    file: ' 行銷頁面/img/Rchart.svg',

    onReady: function () {
        RchartControlller.stop();
    }
})
const RresultController = new Vivus('Rresult', {
    file: ' 行銷頁面/img/Rresult.svg',

    onReady: function () {
        RresultController.stop();
    }
})

const IlineControler = new Vivus('Iline', {
    file: ' 行銷頁面/img/Iline.svg',
    onReady: function () {
        IlineControler.stop();
    }
})
const IchartControler = new Vivus('Ichart', {
    file: ' 行銷頁面/img/Ichart.svg',
    onReady: function () {
        IchartControler.stop();
    }
})
const IresultController = new Vivus('Iresult', {
    file: ' 行銷頁面/img/Iresult.svg',
    onReady: function () {
        IresultController.stop();
    }
})


const AlineControler = new Vivus('Aline', {
    file: ' 行銷頁面/img/Aline.svg',
    onReady: function () {
        AlineControler.stop();
    }
})
const AchartControler = new Vivus('Achart', {
    file: ' 行銷頁面/img/Achart.svg',
    onReady: function () {
        AchartControler.stop();
    }
})
const AresultController = new Vivus('Aresult', {
    file: ' 行銷頁面/img/Aresult.svg',
    onReady: function () {
        AresultController.stop();
    }
})

const SlineControler = new Vivus('Sline', {
    file: ' 行銷頁面/img/Sline.svg',
    onReady: function () {
        SlineControler.stop();
    }
})
const SchartControler = new Vivus('Schart', {
    file: ' 行銷頁面/img/Schart.svg',
    onReady: function () {
        SchartControler.stop();
    }
})
const SresultController = new Vivus('Sresult', {
    file: ' 行銷頁面/img/Sresult.svg',
    onReady: function () {
        SresultController.stop();
    }
})

const ElineControler = new Vivus('Eline', {
    file: ' 行銷頁面/img/Eline.svg',
    onReady: function () {
        ElineControler.stop();
    }
})
const EchartControler = new Vivus('Echart', {
    file: ' 行銷頁面/img/Echart.svg',
    onReady: function () {
        EchartControler.stop();
    }
})
const EresultController = new Vivus('Eresult', {
    file: ' 行銷頁面/img/Eresult.svg',
    onReady: function () {
        EresultController.stop();
    }
})

const ClineControler = new Vivus('Cline', {
    file: ' 行銷頁面/img/Cline.svg',
    onReady: function () {
        ClineControler.stop();
    }
})
const CchartControler = new Vivus('Cchart', {
    file: ' 行銷頁面/img/Cchart.svg',
    onReady: function () {
        CchartControler.stop();
    }
})
const CresultController = new Vivus('Cresult', {
    file: ' 行銷頁面/img/Cresult.svg',
    onReady: function () {
        CresultController.stop();
    }
})
let Rstar = function () {
    Iend();
    Rcontainer.style.display = 'block';
    Icontainer.style.display = 'none'
    Acontainer.style.display = 'none';
    Scontainer.style.display = 'none';
    Econtainer.style.display = 'none';
    Ccontainer.style.display = 'none';

    RlineDOC.style.display = 'block';
    RimageDOC.style.display = 'block';
    RchartDOC.style.display = 'block';
    Rcontext.style.display = 'block';
    Container2.style.background = '#C1E8D9';
    RlineControler.play(5);
    RchartControlller.play(5,
        function () {
            RresultController.play(5, function () {
                RresultDOC.classList.remove("RresultLeave");
                RresultDOC.classList.add('RresultFinished')
            })
        }
    );
}

let Rend = function () {
    Container2.style.background = '#ffffff';

    RlineControler.play(-10);
    RresultController.play(-10);
    RchartControlller.play(-5);

    RresultDOC.classList.add('RresultLeave');//雷達圖呈現css
    RresultDOC.classList.remove("RresultFinished");//雷達圖消失css

    RchartDOC.style.display = 'none';
    RimageDOC.style.display = 'none';
    Rcontext.style.display = 'none';
}

let Istar = function () {
    Rcontainer.style.display = 'none';
    Icontainer.style.display = 'block'
    Acontainer.style.display = 'none';
    Scontainer.style.display = 'none';
    Econtainer.style.display = 'none';
    Ccontainer.style.display = 'none';

    Container2.style.background = '#E1CAE8';
    IlineDOC.style.display = "block";
    IimageDOC.style.display = "block";
    IcontextDOC.style.display = "block";
    IchartDOC.style.display = 'block';
    IlineControler.play(5);
    IchartControler.play(5, function () {
        IresultController.play(5, function () {
            //result 線圈完，才做填色動作
            IresultDOC.classList.remove("IresultLeave");
            IresultDOC.classList.add('IresultFinished');
        })
    });

}


let Iend = function () {
    Container2.style.background = '#ffffff';
    //復原打字效果
    IsubTitle2DOC.classList.remove('typing2');
    IsubTitleDOC.classList.add('typing')

    IlineControler.play(-10);
    IresultController.play(-5)
    IchartControler.play(-5);
    IimageDOC.style.display = 'none';
    IcontextDOC.style.display = 'none';
    IchartDOC.style.display = 'none';
    IresultDOC.classList.add('IresultLeave');//雷達圖呈現css
    IresultDOC.classList.remove("IresultFinished");//雷達圖消失css
}

let Astar = function () {
    Rcontainer.style.display = 'none';
    Icontainer.style.display = 'none'
    Acontainer.style.display = 'block';
    Scontainer.style.display = 'none';
    Econtainer.style.display = 'none';
    Ccontainer.style.display = 'none';

    Container2.style.background = '#AFD0E3';
    AlineDOC.style.display = "block";
    AimageDOC.style.display = "block";
    AcontextDOC.style.display = "block";
    AchartDOC.style.display = 'block';
    AlineControler.play(5);
    AchartControler.play(5, function () {
        AresultController.play(5, function () {
            //result 線圈完，才做填色動作
            AresultDOC.classList.remove("AresultLeave");
            AresultDOC.classList.add('AresultFinished');
        })
    });

}

let Aend = function () {
    Container2.style.background = '#ffffff';
    //復原打字效果
    AsubTitle2DOC.classList.remove('typing2');
    AsubTitleDOC.classList.add('typing')

    AlineControler.play(-10);
    AresultController.play(-5)
    AchartControler.play(-5);
    AimageDOC.style.display = 'none';
    AcontextDOC.style.display = 'none';
    AchartDOC.style.display = 'none';
    AresultDOC.classList.add('AresultLeave');//雷達圖呈現css
    AresultDOC.classList.remove("AresultFinished");//雷達圖消失css
}

let Sstar = function () {
    Rcontainer.style.display = 'none';
    Icontainer.style.display = 'none'
    Acontainer.style.display = 'none';
    Scontainer.style.display = 'block';
    Econtainer.style.display = 'none';
    Ccontainer.style.display = 'none';

    Container2.style.background = '#F8D6D5';
    SlineDOC.style.display = "block";
    SimageDOC.style.display = "block";
    ScontextDOC.style.display = "block";
    SchartDOC.style.display = 'block';
    SlineControler.play(5);
    SchartControler.play(5, function () {
        SresultController.play(5, function () {
            //result 線圈完，才做填色動作
            SresultDOC.classList.remove("SresultLeave");
            SresultDOC.classList.add('SresultFinished');
        })
    });
}


let Send = function () {
    Container2.style.background = '#ffffff';
    //復原打字效果
    SsubTitle2DOC.classList.remove('typing2');
    SsubTitleDOC.classList.add('typing')

    SlineControler.play(-10);
    SresultController.play(-5)
    SchartControler.play(-5);
    SimageDOC.style.display = 'none';
    ScontextDOC.style.display = 'none';
    SchartDOC.style.display = 'none';
    SresultDOC.classList.add('SresultLeave');//雷達圖呈現css
    SresultDOC.classList.remove("SresultFinished");//雷達圖消失css
}


let Estar = function () {
    Rcontainer.style.display = 'none';
    Icontainer.style.display = 'none'
    Acontainer.style.display = 'none';
    Scontainer.style.display = 'none';
    Econtainer.style.display = 'block';
    Ccontainer.style.display = 'none';

    Container2.style.background = '#F7DBAC';
    ElineDOC.style.display = "block";
    EimageDOC.style.display = "block";
    EcontextDOC.style.display = "block";
    EchartDOC.style.display = 'block';
    ElineControler.play(5);
    EchartControler.play(5, function () {
        EresultController.play(5, function () {
            //result 線圈完，才做填色動作
            EresultDOC.classList.remove("EresultLeave");
            EresultDOC.classList.add('EresultFinished');
        })
    });

}

let Eend = function () {
    Container2.style.background = '#ffffff';
    //復原打字效果
    EsubTitle2DOC.classList.remove('typing2');
    EsubTitleDOC.classList.add('typing')

    ElineControler.play(-10);
    EresultController.play(-5)
    EchartControler.play(-5);
    EimageDOC.style.display = 'none';
    EcontextDOC.style.display = 'none';
    EchartDOC.style.display = 'none';
    EresultDOC.classList.add('EresultLeave');//雷達圖呈現css
    EresultDOC.classList.remove("EresultFinished");//雷達圖消失css
}


let Cstar = function () {
    Rcontainer.style.display = 'none';
    Icontainer.style.display = 'none'
    Acontainer.style.display = 'none';
    Scontainer.style.display = 'none';
    Econtainer.style.display = 'none';
    Ccontainer.style.display = 'block';

    Container2.style.background = '#B9EAED';
    ClineDOC.style.display = "block";
    CimageDOC.style.display = "block";
    CcontextDOC.style.display = "block";
    CchartDOC.style.display = 'block';
    ClineControler.play(5);
    CchartControler.play(5, function () {
        CresultController.play(5, function () {
            //result 線圈完，才做填色動作
            CresultDOC.classList.remove("CresultLeave");
            CresultDOC.classList.add('CresultFinished');
        })
    });

}

let Cend = function () {
    Container2.style.background = '#ffffff';
    //復原打字效果
    CsubTitle2DOC.classList.remove('typing2');
    CsubTitleDOC.classList.add('typing')

    ClineControler.play(-10);
    CresultController.play(-5)
    CchartControler.play(-5);
    CimageDOC.style.display = 'none';
    CcontextDOC.style.display = 'none';
    CchartDOC.style.display = 'none';
    CresultDOC.classList.add('CresultLeave');//雷達圖呈現css
    CresultDOC.classList.remove("CresultFinished");//雷達圖消失css
}

RbuttonDOC.addEventListener('click', Rstar);
// RbuttonDOC.addEventListener('mouseout', Rend);

IbuttonDOC.addEventListener('click', Istar)
// IbuttonDOC.addEventListener('mouseout', Iend)

AbuttonDOC.addEventListener('click', Astar);
// AbuttonDOC.addEventListener('mouseout', Aend);

SbuttonDOC.addEventListener('click', Sstar)
// SbuttonDOC.addEventListener('mouseout', Send);

EbuttonDOC.addEventListener('click', Estar)
// EbuttonDOC.addEventListener('mouseout', Eend)

CbuttonDOC.addEventListener('click', Cstar);
// CbuttonDOC.addEventListener('mouseout',Cend);



//打字換行效果
IsubTitleDOC.addEventListener('animationend', function () {
    IsubTitleDOC.classList.remove('typing');
    IsubTitle2DOC.classList.add('typing2');
})

//打字換行效果
AsubTitleDOC.addEventListener('animationend', function () {
    AsubTitleDOC.classList.remove('typing');
    AsubTitle2DOC.classList.add('typing2');
})

//打字換行效果
SsubTitleDOC.addEventListener('animationend', function () {
    SsubTitleDOC.classList.remove('typing');
    SsubTitle2DOC.classList.add('typing2');
})

//打字換行效果
EsubTitleDOC.addEventListener('animationend', function () {
    EsubTitleDOC.classList.remove('typing');
    EsubTitle2DOC.classList.add('typing2');
})

//打字換行效果
CsubTitleDOC.addEventListener('animationend', function () {
    CsubTitleDOC.classList.remove('typing');
    CsubTitle2DOC.classList.add('typing2');
})
//滑鼠滑動量
let scale = 0;
//一個100VH的高度
let webHeight = screen.height;

window.onwheel = function (event) {
    //滾條的高度
    let windowY = window.scrollY;
    //console.log("screen:" + this.screen.height);
    //console.log("wy:" + window.scrollY);
    // console.log("my:" + event.deltaY);

    scale += event.deltaY * 0.01;

    //R
    if (scale > 1 && windowY > webHeight * 1 && windowY < webHeight * 2) {
        scale = this.Math.min(scale, 1);
        RbuttonDOC.style.transform = `scale(${scale})`;
        Rstar();
    }
    if (scale < 1 && windowY > webHeight * 0.8 && windowY < webHeight * 2) {
        scale = this.Math.max(scale, 0);
        console.log(scale);
        RbuttonDOC.style.transform = `scale(${scale})`;
        Rend();
    }
    //I
    if (scale > 1 && windowY > webHeight * 3 && windowY < webHeight * 4) {
        scale = this.Math.min(scale, 1);
        IbuttonDOC.style.transform = `scale(${scale})`;
        Rend();
        Istar();

    }
    if (scale < 1 && windowY > webHeight * 3 && windowY < webHeight * 4) {
        scale = this.Math.max(scale, 0);
        IbuttonDOC.style.transform = `scale(${scale})`;
        Iend();
        Rstar();
    }

    if (scale > 1 && windowY > webHeight * 5 && windowY < webHeight * 6) {
        scale = this.Math.min(scale, 1);
        AbuttonDOC.style.transform = `scale(${scale})`;
        Iend();
        Astar();
    }
    if (scale < 1 && windowY > webHeight * 5 && windowY < webHeight * 6) {
        scale = this.Math.max(scale, 0);
        AbuttonDOC.style.transform = `scale(${scale})`;
        Aend();
        Istar();
    }

    if (scale > 1 && windowY > webHeight * 7 && windowY < webHeight * 8) {
        scale = this.Math.min(scale, 1);
        SbuttonDOC.style.transform = `scale(${scale})`;
        Aend();
        Sstar();

    }
    if (scale < 1 && windowY > webHeight * 7 && windowY < webHeight * 8) {
        scale = this.Math.max(scale, 0);
        SbuttonDOC.style.transform = `scale(${scale})`;
        Send();
        Astar();
    }

    if (scale > 1 && windowY > webHeight * 9 && windowY < webHeight * 10) {
        scale = this.Math.min(scale, 1);
        EbuttonDOC.style.transform = `scale(${scale})`;
        Send();
        Estar();
    }
    if (scale < 1 && windowY > webHeight * 9 && windowY < webHeight * 10) {
        scale = this.Math.max(scale, 0);
        EbuttonDOC.style.transform = `scale(${scale})`;
        Eend();
        Sstar()

    }

    if (scale > 1 && windowY > webHeight * 11 && windowY < webHeight * 12) {
        scale = this.Math.min(scale, 1);
        CbuttonDOC.style.transform = `scale(${scale})`;
        Eend();
        Cstar();
    }
    if (scale < 1 && windowY > webHeight * 11 && windowY < webHeight * 12) {
        scale = this.Math.max(scale, 0);
        CbuttonDOC.style.transform = `scale(${scale})`;
        Cend();
        Estar();
    }
}









