gdjs.Main_32sceneCode = {};
gdjs.Main_32sceneCode.localVariables = [];
gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects1_1final = [];

gdjs.Main_32sceneCode.GDBGObjects1= [];
gdjs.Main_32sceneCode.GDBGObjects2= [];
gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects1= [];
gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects2= [];
gdjs.Main_32sceneCode.GDGame_9595TitleObjects1= [];
gdjs.Main_32sceneCode.GDGame_9595TitleObjects2= [];
gdjs.Main_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Main_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Main_32sceneCode.GDXButtonObjects1= [];
gdjs.Main_32sceneCode.GDXButtonObjects2= [];
gdjs.Main_32sceneCode.GDInfoObjects1= [];
gdjs.Main_32sceneCode.GDInfoObjects2= [];
gdjs.Main_32sceneCode.GDrankObjects1= [];
gdjs.Main_32sceneCode.GDrankObjects2= [];


gdjs.Main_32sceneCode.eventsList0 = function(runtimeScene) {

{



}


{



}


{

gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("WhiteSleekButton"), gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects2);
for (var i = 0, k = 0, l = gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects2.length;i<l;++i) {
    if ( gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects2[k] = gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects1_1final.indexOf(gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects2[j]) === -1 )
            gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects1_1final.push(gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Start", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects1_1final, gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Play Scene", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("XButton"), gdjs.Main_32sceneCode.GDXButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32sceneCode.GDXButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32sceneCode.GDXButtonObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32sceneCode.GDXButtonObjects1[k] = gdjs.Main_32sceneCode.GDXButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32sceneCode.GDXButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Main_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32sceneCode.GDBGObjects1.length = 0;
gdjs.Main_32sceneCode.GDBGObjects2.length = 0;
gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.Main_32sceneCode.GDGame_9595TitleObjects1.length = 0;
gdjs.Main_32sceneCode.GDGame_9595TitleObjects2.length = 0;
gdjs.Main_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32sceneCode.GDXButtonObjects1.length = 0;
gdjs.Main_32sceneCode.GDXButtonObjects2.length = 0;
gdjs.Main_32sceneCode.GDInfoObjects1.length = 0;
gdjs.Main_32sceneCode.GDInfoObjects2.length = 0;
gdjs.Main_32sceneCode.GDrankObjects1.length = 0;
gdjs.Main_32sceneCode.GDrankObjects2.length = 0;

gdjs.Main_32sceneCode.eventsList0(runtimeScene);
gdjs.Main_32sceneCode.GDBGObjects1.length = 0;
gdjs.Main_32sceneCode.GDBGObjects2.length = 0;
gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.Main_32sceneCode.GDGame_9595TitleObjects1.length = 0;
gdjs.Main_32sceneCode.GDGame_9595TitleObjects2.length = 0;
gdjs.Main_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32sceneCode.GDXButtonObjects1.length = 0;
gdjs.Main_32sceneCode.GDXButtonObjects2.length = 0;
gdjs.Main_32sceneCode.GDInfoObjects1.length = 0;
gdjs.Main_32sceneCode.GDInfoObjects2.length = 0;
gdjs.Main_32sceneCode.GDrankObjects1.length = 0;
gdjs.Main_32sceneCode.GDrankObjects2.length = 0;


return;

}

gdjs['Main_32sceneCode'] = gdjs.Main_32sceneCode;
