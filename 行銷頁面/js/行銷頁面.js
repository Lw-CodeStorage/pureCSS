'use strict';
{
window.onload = function () {
 
    //清除網址列的錨點  
    window.location.hash = ' ';
    //回到初始視窗位置
    window.scrollTo({
        //top: 0,
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
let Container3 = document.querySelector(".Container3");
let Container4 = document.querySelector(".Container4");

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

let workStyleDOC = document.querySelector('.WorkStyle-Circle');
let magnifierDOC = document.querySelector('#magnifier');

let Problemcontainer = document.querySelector(".Problem");
let Drivecontainer = document.querySelector(".Drive");
let Interpersonalcontainer = document.querySelector(".Interpersonal");
let Adjustcontainer = document.querySelector(".Adjust");
let Responsibilitycontainer = document.querySelector(".Responsibility");

let problemLine = document.querySelector('#Problemline');
let problemChart = document.querySelector('.problemChart');
let problemButton = document.querySelector('.circleItem-Problem');
let probleImg = document.querySelector('.problemImg');
let problemResult = document.querySelector('.problemResult');
let pronblemContext1 = document.querySelector('.problemContext1');
let pronblemContext2 = document.querySelector('.problemContext2');


let driveLine = document.querySelector('#Driveline');
let driveChart = document.querySelector('.driveChart');
let driveButton = document.querySelector('.circleItem-Drive');
let driveImg = document.querySelector('.driveImg');
let driveResult = document.querySelector('.driveResult');
let driveContext1 = document.querySelector('.driveContext1');
let driveContext2 = document.querySelector('.driveContext2');


let interpersonalLine = document.querySelector('#Interpersonalline');
let interpersonalChart = document.querySelector('.interpersonalChart');
let interpersonalButton = document.querySelector('.circleItem-InterPersonal');
let interpersonalImg = document.querySelector('.interpersonalImg');
let interpersonalResult = document.querySelector('.interpersonalResult');
let interpersonalContext1 = document.querySelector('.interpersonalContext1');
let interpersonalContext2 = document.querySelector('.interpersonalContext2');

let adjustLine = document.querySelector('#Adjustline');
let adjustChart = document.querySelector('.adjustChart');
let adjustButton = document.querySelector('.circleItem-Adjust');
let adjustImg = document.querySelector('.adjustImg');
let adjustResult = document.querySelector('.adjustResult');
let adjustContext1 = document.querySelector('.adjustContext1');
let adjustContext2 = document.querySelector('.adjustContext2');

let responsibilityLine = document.querySelector('#Responsibilityline');
let responsibilityChart = document.querySelector('.responsibilityChart');
let responsibilityButton = document.querySelector('.circleItem-Responsibility');
let responsibilityImg = document.querySelector('.responsibilityImg');
let responsibilityResult = document.querySelector('.responsibilityResult');
let responsibilityContext1 = document.querySelector('.responsibilityContext1');
let responsibilityContext2 = document.querySelector('.responsibilityContext2');

let Independencecontainer = document.querySelector(".Independence");
let Relationshipscontainer = document.querySelector(".Relationships");
let Recognitioncontainer = document.querySelector(".Recognition");
let Supportcontainer = document.querySelector(".Support");
let Achievementcontainer = document.querySelector(".Achievement");
let WorkingConditionscontainer = document.querySelector(".WorkingConditions");

let independenceLine = document.querySelector('#Independenceline');
let independenceChart = document.querySelector('.IndependenceChart');
let independenceButton = document.querySelector('.circleItem-Independence');
let independenceImg = document.querySelector('.IndependenceImg');
let independenceResult = document.querySelector('.IndependenceResult');
let independenceContext1 = document.querySelector('.IndependenceContext1');
let independenceContext2 = document.querySelector('.IndependenceContext2');

let relationshipsLine = document.querySelector('#Relationshipsline');
let relationshipsChart = document.querySelector('.RelationshipsChart');
let relationshipsButton = document.querySelector('.circleItem-Relationships');
let relationshipsImg = document.querySelector('.RelationshipsImg');
let relationshipsResult = document.querySelector('.RelationshipsResult');
let relationshipsContext1 = document.querySelector('.RelationshipsContext1');
let relationshipsContext2 = document.querySelector('.RelationshipsContext2');

let recognitionLine = document.querySelector('#Recognitionline');
let recognitionChart = document.querySelector('.RecognitionChart');
let recognitionButton = document.querySelector('.circleItem-Recognition');
let recognitionImg = document.querySelector('.RecognitionImg');
let recognitionResult = document.querySelector('.RecognitionResult');
let recognitionContext1 = document.querySelector('.RecognitionContext1');
let recognitionContext2 = document.querySelector('.RecognitionContext2');

let supportLine = document.querySelector('#Supportline');
let supportChart = document.querySelector('.SupportChart');
let supportButton = document.querySelector('.circleItem-Support');
let supportImg = document.querySelector('.SupportImg');
let supportResult = document.querySelector('.SupportResult');
let supportContext1 = document.querySelector('.SupportContext1');
let supportContext2 = document.querySelector('.SupportContext2');

let achievementLine = document.querySelector('#Achievementline');
let achievementChart = document.querySelector('.AchievementChart');
let achievementButton = document.querySelector('.circleItem-Achievement');
let achievementImg = document.querySelector('.AchievementImg');
let achievementResult = document.querySelector('.AchievementResult');
let achievementContext1 = document.querySelector('.AchievementContext1');
let achievementContext2 = document.querySelector('.AchievementContext2');

let workingConditionsLine = document.querySelector('#WorkingConditionsline');
let workingConditionsChart = document.querySelector('.WorkingConditionsChart');
let workingConditionsButton = document.querySelector('.circleItem-WorkingConditions');
let workingConditionsImg = document.querySelector('.WorkingConditionsImg');
let workingConditionsResult = document.querySelector('.WorkingConditionsResult');
let workingConditionsContext1 = document.querySelector('.WorkingConditionsContext1');
let workingConditionsContext2 = document.querySelector('.WorkingConditionsContext2');



const RlineControler = new Vivus('Rline', {
    file: 'img/Rline.svg',
    onReady: function () {
        //onready 是初始化過程中會去執行的方法 若要一開始就暫停 須在此呼叫
        // RlineControler.stop();
    }
});
const RchartControlller = new Vivus('Rchart', {
    file: 'img/Rchart.svg',

    onReady: function () {
        RchartControlller.stop();
    }
})
const RresultController = new Vivus('Rresult', {
    file: 'img/Rresult.svg',

    onReady: function () {
        RresultController.stop();
    }
})

const IlineControler = new Vivus('Iline', {
    file: 'img/Iline.svg',
    onReady: function () {
        IlineControler.stop();
    }
})
const IchartControler = new Vivus('Ichart', {
    file: 'img/Ichart.svg',
    onReady: function () {
        IchartControler.stop();
    }
})
const IresultController = new Vivus('Iresult', {
    file: 'img/Iresult.svg',
    onReady: function () {
        IresultController.stop();
    }
})


const AlineControler = new Vivus('Aline', {
    file: 'img/Aline.svg',
    onReady: function () {
        AlineControler.stop();
    }
})
const AchartControler = new Vivus('Achart', {
    file: 'img/Achart.svg',
    onReady: function () {
        AchartControler.stop();
    }
})
const AresultController = new Vivus('Aresult', {
    file: 'img/Aresult.svg',
    onReady: function () {
        AresultController.stop();
    }
})

const SlineControler = new Vivus('Sline', {
    file: 'img/Sline.svg',
    onReady: function () {
        SlineControler.stop();
    }
})
const SchartControler = new Vivus('Schart', {
    file: 'img/Schart.svg',
    onReady: function () {
        SchartControler.stop();
    }
})
const SresultController = new Vivus('Sresult', {
    file: 'img/Sresult.svg',
    onReady: function () {
        SresultController.stop();
    }
})

const ElineControler = new Vivus('Eline', {
    file: 'img/Eline.svg',
    onReady: function () {
        ElineControler.stop();
    }
})
const EchartControler = new Vivus('Echart', {
    file: 'img/Echart.svg',
    onReady: function () {
        EchartControler.stop();
    }
})
const EresultController = new Vivus('Eresult', {
    file: 'img/Eresult.svg',
    onReady: function () {
        EresultController.stop();
    }
})

const ClineControler = new Vivus('Cline', {
    file: 'img/Cline.svg',
    onReady: function () {
        ClineControler.stop();
    }
})
const CchartControler = new Vivus('Cchart', {
    file: 'img/Cchart.svg',
    onReady: function () {
        CchartControler.stop();
    }
})
const CresultController = new Vivus('Cresult', {
    file: 'img/Cresult.svg',
    onReady: function () {
        CresultController.stop();
    }
})

const magnifierController = new Vivus('magnifier', {
    file: 'img/放大鏡.svg',
    onReady: function () {
        magnifierController.stop()
    }
})
const problemChartController = new Vivus('problemChart', {
    file: 'img/problemChart.svg',
    type: 'oneByOne',
    onReady: function () {
        problemChartController.stop()
    }
})
const ProblemLineController = new Vivus('Problemline', {
    file: 'img/Problemline.svg',
    onReady: function () {
        ProblemLineController.stop()
    }
})

const ProblemResultController = new Vivus('problemResult', {
    file: 'img/ProblemResult.svg',
    onReady: function () {
        ProblemResultController.stop();
    }
})

const DriveLineController = new Vivus('Driveline', {
    file: 'img/DriveLine.svg',
    onReady: function () {
        DriveLineController.stop()
    }
})

const DriveResultController = new Vivus('driveResult', {
    file: 'img/DriveResult.svg',
    onReady: function () {
        DriveResultController.stop();
    }
})
const driveChartController = new Vivus('driveChart', {
    file: 'img/driveChart.svg',
    onReady: function () {
        driveChartController.stop();
    }
})
const InterpersonalLineController = new Vivus('Interpersonalline', {
    file: 'img/interpersonalLine.svg',
    onReady: function () {
        InterpersonalLineController.stop()
    }
})

const InterpersonalResultController = new Vivus('interpersonalResult', {
    file: 'img/interpersonalResult.svg',
    onReady: function () {
        InterpersonalResultController.stop();
    }
})
const InterpersonalChartController = new Vivus('interpersonalChart', {
    file: 'img/interpersonalChart.svg',
    onReady: function () {
        InterpersonalChartController.stop();
    }
})

const AdjustLineController = new Vivus('Adjustline', {
    file: 'img/adjustLine.svg',
    onReady: function () {
        AdjustLineController.stop()
    }
})

const AdjustResultController = new Vivus('adjustResult', {
    file: 'img/adjustResult.svg',
    onReady: function () {
        AdjustResultController.stop();
    }
})
const AdjutChartController = new Vivus('adjustChart', {
    file: 'img/adjustChart.svg',
    onReady: function () {
        AdjutChartController.stop();
    }
})

const ResponsibilityLineController = new Vivus('Responsibilityline', {
    file: 'img/responsibilityLine.svg',
    onReady: function () {
        ResponsibilityLineController.stop()
    }
})

const ResponsibilityResultController = new Vivus('responsibilityResult', {
    file: 'img/responsibilityResult.svg',
    onReady: function () {
        ResponsibilityResultController.stop();
    }
})
const ResponsibilityChartController = new Vivus('responsibilityChart', {
    file: 'img/responsibilityChart.svg',
    onReady: function () {
        ResponsibilityChartController.stop();
    }
})

const IndependencelineController = new Vivus('Independenceline', {
    file: 'img/independenceLine.svg',
    onReady: function () {
        IndependencelineController.stop()
    }
})

const IndependenceResultController = new Vivus('IndependenceResult', {
    file: 'img/independenceResult.svg',
    onReady: function () {
        IndependenceResultController.stop();
    }
})
const IndependenceChartController = new Vivus('IndependenceChart', {
    file: 'img/independenceChart.svg',
    onReady: function () {
        IndependenceChartController.stop();
    }
})

const RelationshipslineController = new Vivus('Relationshipsline', {
    file: 'img/relationshipLine.svg',
    onReady: function () {
        RelationshipslineController.stop()
    }
})

const RelationshipsResultController = new Vivus('RelationshipsResult', {
    file: 'img/relationshipResult.svg',
    onReady: function () {
        RelationshipsResultController.stop();
    }
})
const RelationshipsChartController = new Vivus('RelationshipsChart', {
    file: 'img/relationshipChart.svg',
    onReady: function () {
        RelationshipsChartController.stop();
    }
})

const RecognitionlineController = new Vivus('Recognitionline', {
    file: 'img/recognitionLine.svg',
    onReady: function () {
        RecognitionlineController.stop()
    }
})

const RecognitionResultController = new Vivus('RecognitionResult', {
    file: 'img/recognitionResult.svg',
    onReady: function () {
        RecognitionResultController.stop();
    }
})
const RecognitionChartController = new Vivus('RecognitionChart', {
    file: 'img/recognitionChart.svg',
    onReady: function () {
        RecognitionChartController.stop();
    }
})
const SupportlineController = new Vivus('Supportline', {
    file: 'img/supportLine.svg',
    onReady: function () {
        SupportlineController.stop()
    }
})

const SupportResultController = new Vivus('SupportResult', {
    file: 'img/supportResult.svg',
    onReady: function () {
        SupportResultController.stop();
    }
})
const SupportChartController = new Vivus('SupportChart', {
    file: 'img/supportChart.svg',
    onReady: function () {
        SupportChartController.stop();
    }
})
const AchievementlineController = new Vivus('Achievementline', {
    file: 'img/achievementLine.svg',
    onReady: function () {
        AchievementlineController.stop()
    }
})
const AchievementResultController = new Vivus('AchievementResult', {
    file: 'img/achievementResult.svg',
    onReady: function () {
        AchievementResultController.stop();
    }
})
const AchievementChartController = new Vivus('AchievementChart', {
    file: 'img/achievementChart.svg',
    onReady: function () {
        AchievementChartController.stop();
    }
})

const WorkingConditionslineController = new Vivus('WorkingConditionsline', {
    file: 'img/workingconditionLine.svg',
    onReady: function () {
        WorkingConditionslineController.stop()
    }
})
const WorkingConditionsResultController = new Vivus('WorkingConditionsResult', {
    file: 'img/workingconditionResult.svg',
    onReady: function () {
        WorkingConditionsResultController.stop();
    }
})
const WorkingConditionsChartController = new Vivus('WorkingConditionsChart', {
    file: 'img/workingconditionChart.svg',
    onReady: function () {
        WorkingConditionsChartController.stop();
    }
})
const test = new Vivus('tt', {
    file: 'img/放大鏡線圖.svg',
    start: 'manual'
})

const pt1LineController = new Vivus('pt1Line', {
    file: 'img/pt1Line.svg', start: 'manual'
})


const pt2LineController = new Vivus('pt2Line', {
    file: 'img/pt2Line.svg',
    start: 'manual'
})
const pt3LineController = new Vivus('pt3Line', {
    file: 'img/pt3Line.svg',
    start: 'manual'
})
const pt4LineController = new Vivus('pt4Line', {
    file: 'img/pt4Line.svg',
    start: 'manual'
})
const pt5LineController = new Vivus('pt5Line', {
    file: 'img/pt5Line.svg',
    start: 'manual'
})

let Rstar = function () {
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

let ProblemStart = function () {
    Problemcontainer.style.display = 'block';
    Drivecontainer.style.display = 'none';
    Interpersonalcontainer.style.display = 'none';
    Adjustcontainer.style.display = 'none';
    Responsibilitycontainer.style.display = 'none'


    problemLine.style.display = 'block';
    Container3.style.background = '#DBDE91'
    ProblemLineController.play(5);
    probleImg.style.display = 'block';
    pronblemContext1.style.display = 'block';
    pronblemContext2.style.display = 'block';
    problemChart.style.display = 'block';

    problemChartController.play(5, function () {
        ProblemResultController.play(5, function () {
            problemResult.classList.add('problemResultFinsh')
        });

    });

}
let ProblemEnd = function () {

    Container3.style.background = '#ffffff'
    ProblemLineController.play(-10);
    probleImg.style.display = 'none';
    pronblemContext1.style.display = 'none';
    pronblemContext2.style.display = 'none';
    problemChart.style.display = 'none';
    problemChartController.reset();
    ProblemResultController.reset();
    problemResult.classList.remove('problemResultFinsh')
}

let DriveStart = function () {
    Problemcontainer.style.display = 'none';
    Drivecontainer.style.display = 'block';
    Interpersonalcontainer.style.display = 'none';
    Adjustcontainer.style.display = 'none';
    Responsibilitycontainer.style.display = 'none'

    driveLine.style.display = 'block'
    DriveLineController.play(5);
    driveImg.style.display = 'block';
    driveContext1.style.display = 'block';
    driveContext2.style.display = 'block';
    driveChart.style.display = 'block';
    Container3.style.background = '#A6D3D4'
    driveChartController.play(5, function () {
        DriveResultController.play(5, function () {
            driveResult.classList.add('driveResultFinsh')
        });

    });
}
let DriveEnd = function () {
    Container3.style.background = '#ffffff'
    DriveLineController.play(-10);
    driveImg.style.display = 'none';
    driveContext1.style.display = 'none';
    driveContext2.style.display = 'none';
    driveChart.style.display = 'none';
    driveChartController.reset();
    DriveResultController.reset();
    driveResult.classList.remove('driveResultFinsh')
}

let InterpersonalStart = function () {
    Problemcontainer.style.display = 'none';
    Drivecontainer.style.display = 'none';
    Interpersonalcontainer.style.display = 'block';
    Adjustcontainer.style.display = 'none';
    Responsibilitycontainer.style.display = 'none'

    interpersonalLine.style.display = 'block';
    Container3.style.background = '#DAA0C7'
    InterpersonalLineController.play(5);
    interpersonalImg.style.display = 'block';
    interpersonalContext1.style.display = 'block';
    interpersonalContext2.style.display = 'block';
    interpersonalChart.style.display = 'block';
    InterpersonalChartController.play(5, function () {
        InterpersonalResultController.play(5, function () {
            interpersonalResult.classList.add('interpersonalFinsh')
        });

    });
}
let InterPersonalEnd = function () {
    Container3.style.background = '#ffffff'
    InterpersonalLineController.play(-5);
    interpersonalImg.style.display = 'none';
    interpersonalContext1.style.display = 'none';
    interpersonalContext2.style.display = 'none';
    interpersonalChart.style.display = 'none';
    InterpersonalChartController.reset();
    InterpersonalResultController.reset();
    interpersonalResult.classList.remove('interpersonalFinsh')
}
let AdjustStart = function () {
    Problemcontainer.style.display = 'none';
    Drivecontainer.style.display = 'none';
    Interpersonalcontainer.style.display = 'none';
    Adjustcontainer.style.display = 'block';
    Responsibilitycontainer.style.display = 'none'

    adjustLine.style.display = 'block';
    Container3.style.background = '#ECAF85'
    AdjustLineController.play(5);
    adjustImg.style.display = 'block';
    adjustContext1.style.display = 'block';
    adjustContext2.style.display = 'block';
    adjustChart.style.display = 'block';
    AdjutChartController.play(5, function () {
        AdjustResultController.play(5, function () {
            adjustResult.classList.add('adjustFinsh')
        });

    });
}
let AdjustEnd = function () {
    Container3.style.background = '#ffffff'
    AdjustLineController.play(-5);
    adjustImg.style.display = 'none';
    adjustContext1.style.display = 'none';
    adjustContext2.style.display = 'none';
    adjustChart.style.display = 'none';
    AdjutChartController.reset();
    AdjustResultController.reset();
    adjustResult.classList.remove('adjustFinsh')
}
let ResponsibilityStart = function () {
    Problemcontainer.style.display = 'none';
    Drivecontainer.style.display = 'none';
    Interpersonalcontainer.style.display = 'none';
    Adjustcontainer.style.display = 'none';
    Responsibilitycontainer.style.display = 'block'

    responsibilityLine.style.display = 'block';
    Container3.style.background = '#F0988D'
    ResponsibilityLineController.play(5);
    responsibilityImg.style.display = 'block';
    responsibilityContext1.style.display = 'block';
    responsibilityContext2.style.display = 'block';
    responsibilityChart.style.display = 'block';
    ResponsibilityChartController.play(5, function () {
        ResponsibilityResultController.play(5, function () {
            responsibilityResult.classList.add('adjustFinsh')
        });

    });
}
let ResponsibilityEnd = function () {
    Container3.style.background = '#ffffff'
    ResponsibilityLineController.play(-5);
    responsibilityImg.style.display = 'none';
    responsibilityContext1.style.display = 'none';
    responsibilityContext2.style.display = 'none';
    responsibilityChart.style.display = 'none';
    ResponsibilityResultController.reset();
    ResponsibilityChartController.reset();
    responsibilityResult.classList.remove('adjustFinsh')
}

let IndependenceStart = function () {
    Independencecontainer.style.display = 'block';
    Relationshipscontainer.style.display = 'none';
    Recognitioncontainer.style.display = 'none';
    Supportcontainer.style.display = 'none';
    Achievementcontainer.style.display = 'none';
    WorkingConditionscontainer.style.display = 'none';

    independenceLine.style.display = 'block';
    IndependencelineController.play(5);
    independenceImg.style.display = 'block';
    independenceContext1.style.display = 'block';
    independenceContext2.style.display = 'block';
    independenceChart.style.display = 'block';
    IndependenceChartController.play(5, function () {
        IndependenceResultController.play(5, function () {
            independenceResult.classList.add('IndependenceResultFinsh');
        })
    })
    Container4.style.background = '#E1CAE8';
}
let IndependenceEnd = function () {
    independenceLine.style.display = 'none';
    IndependencelineController.play(-5);
    independenceImg.style.display = 'none';
    independenceContext1.style.display = 'none';
    independenceContext2.style.display = 'none';
    independenceChart.style.display = 'none';
    IndependenceResultController.reset();
    IndependenceChartController.reset();
    independenceResult.classList.remove('IndependenceResultFinsh')
    Container4.style.background = '#E1CAE8';
}
let RelationshipsStart = function () {
    Independencecontainer.style.display = 'none';
    Relationshipscontainer.style.display = 'block';
    Recognitioncontainer.style.display = 'none';
    Supportcontainer.style.display = 'none';
    Achievementcontainer.style.display = 'none';
    WorkingConditionscontainer.style.display = 'none';

    relationshipsLine.style.display = 'block';
    RelationshipslineController.play(5);
    relationshipsImg.style.display = 'block';
    relationshipsContext1.style.display = 'block';
    relationshipsContext2.style.display = 'block';
    relationshipsChart.style.display = 'block';
    RelationshipsChartController.play(5, function () {
        RelationshipsResultController.play(5, function () {
            relationshipsResult.classList.add('RelationshipsFinsh');
        })
    })
    Container4.style.background = '#D0D88E';
}
let RelationshipsEnd = function () {
    relationshipsLine.style.display = 'none';
    RelationshipslineController.play(-5);
    relationshipsImg.style.display = 'none';
    relationshipsContext1.style.display = 'none';
    relationshipsContext2.style.display = 'none';
    relationshipsChart.style.display = 'none';
    RelationshipsResultController.reset();
    RelationshipsChartController.reset();
    relationshipsResult.classList.remove('RelationshipsFinsh')
    Container4.style.background = '#E1CAE8';
}
let RecognitionStart = function () {
    Independencecontainer.style.display = 'none';
    Relationshipscontainer.style.display = 'none';
    Recognitioncontainer.style.display = 'block';
    Supportcontainer.style.display = 'none';
    Achievementcontainer.style.display = 'none';
    WorkingConditionscontainer.style.display = 'none';

    recognitionLine.style.display = 'block';
    RecognitionlineController.play(5);
    recognitionImg.style.display = 'block';
    recognitionContext1.style.display = 'block';
    recognitionContext2.style.display = 'block';
    recognitionChart.style.display = 'block';
    RecognitionChartController.play(8, function () {
        RecognitionResultController.play(5, function () {
            recognitionResult.classList.add('RecognitionFinsh');
        })
    })
    Container4.style.background = '#F7DBAC';
}
let RecognitionEnd = function () {
    recognitionLine.style.display = 'none';
    RecognitionlineController.play(-5);
    recognitionImg.style.display = 'none';
    recognitionContext1.style.display = 'none';
    recognitionContext2.style.display = 'none';
    recognitionChart.style.display = 'none';
    RecognitionResultController.reset();
    RecognitionChartController.reset();
    recognitionResult.classList.remove('RecognitionFinsh')
    Container4.style.background = '#E1CAE8';
}
let supportStart = function () {
    Independencecontainer.style.display = 'none';
    Relationshipscontainer.style.display = 'none';
    Recognitioncontainer.style.display = 'none';
    Supportcontainer.style.display = 'block';
    Achievementcontainer.style.display = 'none';
    WorkingConditionscontainer.style.display = 'none';

    supportLine.style.display = 'block';
    SupportlineController.play(5);
    supportImg.style.display = 'block';
    supportContext1.style.display = 'block';
    supportContext2.style.display = 'block';
    supportChart.style.display = 'block';
    SupportChartController.play(5, function () {
        SupportResultController.play(5, function () {
            supportResult.classList.add('RecognitionFinsh');
        })
    })
    Container4.style.background = '#F8D6D5';
}
let supportEnd = function () {
    supportLine.style.display = 'none';
    SupportlineController.play(-5);
    supportImg.style.display = 'none';
    supportContext1.style.display = 'none';
    supportContext2.style.display = 'none';
    supportChart.style.display = 'none';
    SupportResultController.reset();
    SupportChartController.reset();
    supportResult.classList.remove('RecognitionFinsh')
    Container4.style.background = '#E1CAE8';
}
let achievementStart = function () {
    Independencecontainer.style.display = 'none';
    Relationshipscontainer.style.display = 'none';
    Recognitioncontainer.style.display = 'none';
    Supportcontainer.style.display = 'none';
    Achievementcontainer.style.display = 'block';
    WorkingConditionscontainer.style.display = 'none';

    achievementLine.style.display = 'block';
    AchievementlineController.play(5);
    achievementImg.style.display = 'block';
    achievementContext1.style.display = 'block';
    achievementContext2.style.display = 'block';
    achievementChart.style.display = 'block';
    AchievementChartController.play(5, function () {
        AchievementResultController.play(5, function () {
            achievementResult.classList.add('AchievementFinsh');
        })
    })
    Container4.style.background = '#AFD0E3';
}
let achievementEnd = function () {
    achievementLine.style.display = 'none';
    AchievementlineController.play(-5);
    achievementImg.style.display = 'none';
    achievementContext1.style.display = 'none';
    achievementContext2.style.display = 'none';
    achievementChart.style.display = 'none';
    AchievementResultController.reset();
    AchievementChartController.reset();
    achievementResult.classList.remove('AchievementFinsh')
    Container4.style.background = '#E1CAE8';
}
let workingConditionsStart = function () {
    Independencecontainer.style.display = 'none';
    Relationshipscontainer.style.display = 'none';
    Recognitioncontainer.style.display = 'none';
    Supportcontainer.style.display = 'none';
    Achievementcontainer.style.display = 'none';
    WorkingConditionscontainer.style.display = 'block';

    workingConditionsLine.style.display = 'block';
    WorkingConditionslineController.play(5);
    workingConditionsImg.style.display = 'block';
    workingConditionsContext1.style.display = 'block';
    workingConditionsContext2.style.display = 'block';
    workingConditionsChart.style.display = 'block';
    WorkingConditionsChartController.play(5, function () {
        WorkingConditionsResultController.play(5, function () {
            workingConditionsResult.classList.add('WorkingConditionsFinsh');
        })
    })
    Container4.style.background = '#B9EAED';
}
let workingConditionsEnd = function () {
    workingConditionsLine.style.display = 'none';
    WorkingConditionslineController.play(-5);
    workingConditionsImg.style.display = 'none';
    workingConditionsContext1.style.display = 'none';
    workingConditionsContext2.style.display = 'none';
    workingConditionsChart.style.display = 'none';
    WorkingConditionsResultController.reset();
    WorkingConditionsChartController.reset();
    workingConditionsResult.classList.remove('WorkingConditionsFinsh')
    Container4.style.background = '#E1CAE8';
}
{
    RbuttonDOC.addEventListener('click', Rstar);
    // RbuttonDOC.addEventListener('mouseout', Rend);

    IbuttonDOC.addEventListener('click', Istar);
    // IbuttonDOC.addEventListener('mouseout', Iend)

    AbuttonDOC.addEventListener('click', Astar);
    // AbuttonDOC.addEventListener('mouseout', Aend);

    SbuttonDOC.addEventListener('click', Sstar);
    // SbuttonDOC.addEventListener('mouseout', Send);

    EbuttonDOC.addEventListener('click', Estar);
    // EbuttonDOC.addEventListener('mouseout', Eend)

    CbuttonDOC.addEventListener('click', Cstar);
    // CbuttonDOC.addEventListener('mouseout',Cend);
    problemButton.addEventListener('click', ProblemStart);
    driveButton.addEventListener('click', DriveStart);
    interpersonalButton.addEventListener('click', InterpersonalStart);
    adjustButton.addEventListener('click', AdjustStart);
    responsibilityButton.addEventListener('click', ResponsibilityStart);

    independenceButton.addEventListener('click',IndependenceStart);
    relationshipsButton.addEventListener('click',RelationshipsStart);
    recognitionButton.addEventListener('click',RecognitionStart);
    supportButton.addEventListener('click',supportStart);
    achievementButton.addEventListener('click',achievementStart);
    workingConditionsButton.addEventListener('click',workingConditionsStart);

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
}

//滑鼠滑動量

//一個100VH的高度
let webHeight = screen.height;
let WorkStyleCircle = document.querySelector('.WorkStyle-Circle');
let scale = 0;


window.onwheel = function (event) {

    //滾條的高度
    let windowY = window.scrollY;
    //console.log("screen:" + this.screen.height);
    //console.log("wy:" + window.scrollY);
    // console.log("my:" + event.deltaY);

    scale += event.deltaY * 0.01;

    //R
    if (scale > 0 && windowY > webHeight * 1 && windowY < webHeight * 2) {
        scale = this.Math.min(scale, 1);
        RbuttonDOC.style.transform = `scale(${scale})`;
        Rstar();
    }
    if (scale < 0 && windowY > webHeight * 0.8 && windowY < webHeight * 2) {
        scale = this.Math.max(scale, 0);
        RbuttonDOC.style.transform = `scale(${scale})`;
        Rend();
    }
    //I
    if (scale > 0 && windowY > webHeight * 3 && windowY < webHeight * 4) {
        scale = this.Math.min(scale, 1);
        IbuttonDOC.style.transform = `scale(${scale})`;
        Rend();
        Istar();

    }
    if (scale < 0 && windowY > webHeight * 3 && windowY < webHeight * 4) {
        scale = this.Math.max(scale, 0);
        IbuttonDOC.style.transform = `scale(${scale})`;
        Iend();
        Rstar();
    }

    if (scale > 0 && windowY > webHeight * 5 && windowY < webHeight * 6) {
        scale = this.Math.min(scale, 1);
        AbuttonDOC.style.transform = `scale(${scale})`;
        Iend();
        Astar();
    }
    if (scale < 0 && windowY > webHeight * 5 && windowY < webHeight * 6) {
        scale = this.Math.max(scale, 0);
        AbuttonDOC.style.transform = `scale(${scale})`;
        Aend();
        Istar();
    }

    if (scale > 0 && windowY > webHeight * 7 && windowY < webHeight * 8) {
        scale = this.Math.min(scale, 1);
        SbuttonDOC.style.transform = `scale(${scale})`;
        Aend();
        Sstar();

    }
    if (scale < 0 && windowY > webHeight * 7 && windowY < webHeight * 8) {
        scale = this.Math.max(scale, 0);
        SbuttonDOC.style.transform = `scale(${scale})`;
        Send();
        Astar();
    }

    if (scale > 0 && windowY > webHeight * 9 && windowY < webHeight * 10) {
        scale = this.Math.min(scale, 1);
        EbuttonDOC.style.transform = `scale(${scale})`;
        Send();
        Estar();
    }
    if (scale < 0 && windowY > webHeight * 9 && windowY < webHeight * 10) {
        scale = this.Math.max(scale, 0);
        EbuttonDOC.style.transform = `scale(${scale})`;
        Eend();
        Sstar()

    }

    if (scale > 0 && windowY > webHeight * 11 && windowY < webHeight * 12) {
        scale = this.Math.min(scale, 1);
        CbuttonDOC.style.transform = `scale(${scale})`;
        Eend();
        Cstar();
    }
    if (scale < 0 && windowY > webHeight * 11 && windowY < webHeight * 12) {
        scale = this.Math.max(scale, 0);
        CbuttonDOC.style.transform = `scale(${scale})`;
        Cend();
        Estar();
    }

    //container 3 

    if (scale > 0 && windowY > webHeight * 14 && windowY < webHeight * 15) {
        scale = this.Math.min(scale, 1);
        problemButton.style.transform = `scale(${scale})`;
        ProblemStart();

    } if (scale < 0 && windowY > webHeight * 14 && windowY < webHeight * 15) {

        scale = this.Math.max(scale, 0);
        problemButton.style.transform = `scale(${scale})`;
        ProblemEnd();
    }

    if (scale > 0 && windowY > webHeight * 16 && windowY < webHeight * 17) {
        ProblemEnd();
        scale = this.Math.min(scale, 1);
        driveButton.style.transform = `scale(${scale})`;

        DriveStart();

    } if (scale < 0 && windowY > webHeight * 16 && windowY < webHeight * 17) {
        scale = this.Math.max(scale, 0);
        driveButton.style.transform = `scale(${scale})`;
        DriveEnd();
        ProblemStart();
    }

    if (scale > 0 && windowY > webHeight * 18 && windowY < webHeight * 19) {
        DriveEnd();
        scale = this.Math.min(scale, 1);
        interpersonalButton.style.transform = `scale(${scale})`;
        InterpersonalStart();
    } if (scale < 0 && windowY > webHeight * 18 && windowY < webHeight * 19) {
        scale = this.Math.max(scale, 0);
        interpersonalButton.style.transform = `scale(${scale})`;
        InterPersonalEnd();
        DriveStart();
    }

    if (scale > 0 && windowY > webHeight * 20 && windowY < webHeight * 21) {
        InterPersonalEnd();
        scale = this.Math.min(scale, 1);
        adjustButton.style.transform = `scale(${scale})`;
        AdjustStart();
    } if (scale < 0 && windowY > webHeight * 20 && windowY < webHeight * 21) {
        scale = this.Math.max(scale, 0);
        adjustButton.style.transform = `scale(${scale})`;
        AdjustEnd();
        InterpersonalStart();
    }
    if (scale > 0 && windowY > webHeight * 22 && windowY < webHeight * 23) {
        AdjustEnd();
        scale = this.Math.min(scale, 1);
        responsibilityButton.style.transform = `scale(${scale})`;
        ResponsibilityStart();

    } if (scale < 0 && windowY > webHeight * 22 && windowY < webHeight * 23) {
        scale = this.Math.max(scale, 0);
        responsibilityButton.style.transform = `scale(${scale})`;
        ResponsibilityEnd();
        AdjustStart();
    }

    //container4
    if (scale > 0 && windowY > webHeight * 24 && windowY < webHeight * 25) {
        scale = this.Math.min(scale, 1);
        independenceButton.style.transform = `scale(${scale})`;
        IndependenceStart();

    } if (scale < 0 && windowY > webHeight * 24 && windowY < webHeight * 25) {
        scale = this.Math.max(scale, 0);
        independenceButton.style.transform = `scale(${scale})`;
        IndependenceEnd();
    }

    if (scale > 0 && windowY > webHeight * 26 && windowY < webHeight * 27) {
        scale = this.Math.min(scale, 1);
        relationshipsButton.style.transform = `scale(${scale})`;
        IndependenceEnd();
        RelationshipsStart();

    } if (scale < 0 && windowY > webHeight * 26 && windowY < webHeight * 27) {
        scale = this.Math.max(scale, 0);
        relationshipsButton.style.transform = `scale(${scale})`;
        RelationshipsEnd();
        IndependenceStart();
    }

    if (scale > 0 && windowY > webHeight * 28 && windowY < webHeight * 29) {
        scale = this.Math.min(scale, 1);
        recognitionButton.style.transform = `scale(${scale})`;
        RelationshipsEnd();
        RecognitionStart();
    } if (scale < 0 && windowY > webHeight * 28 && windowY < webHeight * 29) {
        scale = this.Math.max(scale, 0);
        recognitionButton.style.transform = `scale(${scale})`;
        RecognitionEnd();
        RelationshipsStart();
    }

    if (scale > 0 && windowY > webHeight * 30 && windowY < webHeight * 31) {
        scale = this.Math.min(scale, 1);
        supportButton.style.transform = `scale(${scale})`;
        RecognitionEnd();
        supportStart();

    } if (scale < 0 && windowY > webHeight * 30 && windowY < webHeight * 31) {
        scale = this.Math.max(scale, 0);
        supportButton.style.transform = `scale(${scale})`;
        supportEnd();
        RecognitionStart();
    }
    if (scale > 0 && windowY > webHeight * 32 && windowY < webHeight * 33) {
        scale = this.Math.min(scale, 1);
        achievementButton.style.transform = `scale(${scale})`;
        supportEnd();
        achievementStart();
    } if (scale < 0 && windowY > webHeight * 32 && windowY < webHeight * 33) {
        scale = this.Math.max(scale, 0);
        achievementButton.style.transform = `scale(${scale})`;
        achievementEnd();
        supportStart();
    }
    if (scale > 0 && windowY > webHeight * 34 && windowY < webHeight * 35) {
        scale = this.Math.min(scale, 1);
        workingConditionsButton.style.transform = `scale(${scale})`;
        achievementEnd();
        workingConditionsStart();
    } if (scale < 0 && windowY > webHeight * 34 && windowY < webHeight * 35) {
        scale = this.Math.max(scale, 0);
        workingConditionsButton.style.transform = `scale(${scale})`;
        workingConditionsEnd();
        achievementStart();
    }
    if (scale > 0 && windowY > webHeight * 36) {

        let c5AF = () => {
            let tt = document.querySelector('#tt');
            let c5A = document.querySelector('.c5A');
            let pt1 = document.querySelector('.pt1');
            let pt1Item = document.querySelector('.pt1Item');
            let pt2 = document.querySelector('.pt2');
            let pt2Item = document.querySelector('.pt2Item');
            let pt3 = document.querySelector('.pt3');
            let pt3Item = document.querySelector('.pt3Item');
            let pt4 = document.querySelector('.pt4');
            let pt4Item = document.querySelector('.pt4Item');
            let pt5 = document.querySelector('.pt5');
            let pt5Item = document.querySelector('.pt5Item');
            let pt6 = document.querySelector('.pt6');
            let pt6text = document.querySelector('.pt6text');
            tt.classList.add('ttf');
            tt.addEventListener('transitionend', () => c5A.classList.add('c5AF'));
            c5A.addEventListener('animationend', () => {
                pt1.style.display = 'block';
                pt1.classList.add('bounceIn');
            });
            pt1.addEventListener('animationend', () => {
                pt1Item.style.display = 'block';
                pt1Item.classList.add('bounceIn')
            });
            //2
            pt1Item.addEventListener('animationend', () => {
                pt2.style.display = 'block';
                pt2.classList.add('bounceIn');
            })
            pt2.addEventListener('animationend', () => {
                pt1LineController.play(10, () => {
                    pt2Item.style.display = 'block';
                    pt2Item.classList.add('bounceIn')
                });
            })
            //3
            pt2Item.addEventListener('animationend', () => {
                pt3.style.display = 'block';
                pt3.classList.add('bounceIn');
            })
            pt3.addEventListener('animationend', () => {
                pt2LineController.play(10, () => {
                    pt3Item.style.display = 'block';
                    pt3Item.classList.add('bounceIn')
                });
            })
            //4
            pt3Item.addEventListener('animationend', () => {
                pt4.style.display = 'block';
                pt4.classList.add('bounceIn');
            })
            pt4.addEventListener('animationend', () => {
                pt3LineController.play(10, () => {
                    pt4Item.style.display = 'block';
                    pt4Item.classList.add('bounceIn');
                })
            })
            //5
            pt4Item.addEventListener('animationend', () => {
                pt5.style.display = 'block';
                pt5.classList.add('bounceIn');
            })
            pt5.addEventListener('animationend', () => {
                pt4LineController.play(10, () => {
                    pt5Item.style.display = 'block';
                    pt5Item.classList.add('bounceIn');
                })
            })
            //6
            pt5Item.addEventListener('animationend', () => {
                pt6.style.display = 'block';
                pt6.classList.add('bounceIn');
            })
            pt6.addEventListener('animationend', () => {
                pt5LineController.play(10, () => {
                    pt6.classList.remove('bounceIn');
                    pt6.classList.add('tada', 'pt6Iteration');

                })
            })

        }
        test.play(5, c5AF);
    }

}
}
// let m = document.querySelectorAll('.foisPhone ,.content');
// let [fois,...m2] = aobj
// console.log(m2);
// m2[1].addEventListener('click',()=>{
//     console.log('123123123123123123123221331312321321');
    
// })

let selectMenu = document.querySelectorAll('.m1,.m2,.m3,.m4')
let [m1,m2,m3,m4] = selectMenu ;
var mySwiper = new Swiper('.swiper-container',{
    speed: 400,
    spaceBetween: 100,
    autoHeight:true
    });

mySwiper.on('slideChangeTransitionStart',()=>{
    console.log(mySwiper.activeIndex);
    if(mySwiper.activeIndex == 0){   
        m1.classList.add('ms');
        m2.classList.remove('ms');
        m3.classList.remove('ms');
        m4.classList.remove('ms');
    }else if(mySwiper.activeIndex == 1){
        m2.classList.add('ms');
        m1.classList.remove('ms');
        m3.classList.remove('ms')
        m4.classList.remove('ms');
    }else if(mySwiper.activeIndex == 2){
        m3.classList.add('ms');
        m1.classList.remove('ms');
        m2.classList.remove('ms');
        m4.classList.remove('ms')
    }
})

m1.addEventListener('click',()=>{
    mySwiper.slideTo('0')
})
m2.addEventListener('click',()=>{
    mySwiper.slideTo('1')
})
m3.addEventListener('click',()=>{
    mySwiper.slideTo('2')
})
