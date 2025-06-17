gdjs.Main_32sceneCode = {};
gdjs.Main_32sceneCode.localVariables = [];
gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects1_1final = [];

gdjs.Main_32sceneCode.GDBGObjects1= [];
gdjs.Main_32sceneCode.GDBGObjects2= [];
gdjs.Main_32sceneCode.GDBGObjects3= [];
gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects1= [];
gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects2= [];
gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects3= [];
gdjs.Main_32sceneCode.GDGame_9595TitleObjects1= [];
gdjs.Main_32sceneCode.GDGame_9595TitleObjects2= [];
gdjs.Main_32sceneCode.GDGame_9595TitleObjects3= [];
gdjs.Main_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Main_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Main_32sceneCode.GDNewSpriteObjects3= [];
gdjs.Main_32sceneCode.GDXButtonObjects1= [];
gdjs.Main_32sceneCode.GDXButtonObjects2= [];
gdjs.Main_32sceneCode.GDXButtonObjects3= [];
gdjs.Main_32sceneCode.GDInfoObjects1= [];
gdjs.Main_32sceneCode.GDInfoObjects2= [];
gdjs.Main_32sceneCode.GDInfoObjects3= [];
gdjs.Main_32sceneCode.GDrankObjects1= [];
gdjs.Main_32sceneCode.GDrankObjects2= [];
gdjs.Main_32sceneCode.GDrankObjects3= [];


gdjs.Main_32sceneCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("rank"), gdjs.Main_32sceneCode.GDrankObjects2);
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(2));
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDrankObjects2.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDrankObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(0).getChild("name").getAsString() + " " + runtimeScene.getGame().getVariables().getFromIndex(2).getChild(0).getChild("timing").getAsString() + "\n" + runtimeScene.getGame().getVariables().getFromIndex(2).getChild(1).getChild("name").getAsString() + " " + runtimeScene.getGame().getVariables().getFromIndex(2).getChild(1).getChild("timing").getAsString() + "\n" + runtimeScene.getGame().getVariables().getFromIndex(2).getChild(2).getChild("name").getAsString() + " " + runtimeScene.getGame().getVariables().getFromIndex(2).getChild(2).getChild("timing").getAsString() + "\n" + runtimeScene.getGame().getVariables().getFromIndex(2).getChild(3).getChild("name").getAsString() + " " + runtimeScene.getGame().getVariables().getFromIndex(2).getChild(3).getChild("timing").getAsString() + "\n" + runtimeScene.getGame().getVariables().getFromIndex(2).getChild(4).getChild("name").getAsString() + " " + runtimeScene.getGame().getVariables().getFromIndex(2).getChild(4).getChild("timing").getAsString() + "\n");
}
}}

}


};gdjs.Main_32sceneCode.asyncCallback15029964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32sceneCode.localVariables);

{ //Subevents
gdjs.Main_32sceneCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Main_32sceneCode.localVariables.length = 0;
}
gdjs.Main_32sceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("http://127.0.0.1/rank", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(1)), "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().get("log")), (runtimeScene) => (gdjs.Main_32sceneCode.asyncCallback15029964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32sceneCode.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

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
gdjs.Main_32sceneCode.GDBGObjects3.length = 0;
gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects3.length = 0;
gdjs.Main_32sceneCode.GDGame_9595TitleObjects1.length = 0;
gdjs.Main_32sceneCode.GDGame_9595TitleObjects2.length = 0;
gdjs.Main_32sceneCode.GDGame_9595TitleObjects3.length = 0;
gdjs.Main_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32sceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Main_32sceneCode.GDXButtonObjects1.length = 0;
gdjs.Main_32sceneCode.GDXButtonObjects2.length = 0;
gdjs.Main_32sceneCode.GDXButtonObjects3.length = 0;
gdjs.Main_32sceneCode.GDInfoObjects1.length = 0;
gdjs.Main_32sceneCode.GDInfoObjects2.length = 0;
gdjs.Main_32sceneCode.GDInfoObjects3.length = 0;
gdjs.Main_32sceneCode.GDrankObjects1.length = 0;
gdjs.Main_32sceneCode.GDrankObjects2.length = 0;
gdjs.Main_32sceneCode.GDrankObjects3.length = 0;

gdjs.Main_32sceneCode.eventsList2(runtimeScene);
gdjs.Main_32sceneCode.GDBGObjects1.length = 0;
gdjs.Main_32sceneCode.GDBGObjects2.length = 0;
gdjs.Main_32sceneCode.GDBGObjects3.length = 0;
gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.Main_32sceneCode.GDWhiteSleekButtonObjects3.length = 0;
gdjs.Main_32sceneCode.GDGame_9595TitleObjects1.length = 0;
gdjs.Main_32sceneCode.GDGame_9595TitleObjects2.length = 0;
gdjs.Main_32sceneCode.GDGame_9595TitleObjects3.length = 0;
gdjs.Main_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32sceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Main_32sceneCode.GDXButtonObjects1.length = 0;
gdjs.Main_32sceneCode.GDXButtonObjects2.length = 0;
gdjs.Main_32sceneCode.GDXButtonObjects3.length = 0;
gdjs.Main_32sceneCode.GDInfoObjects1.length = 0;
gdjs.Main_32sceneCode.GDInfoObjects2.length = 0;
gdjs.Main_32sceneCode.GDInfoObjects3.length = 0;
gdjs.Main_32sceneCode.GDrankObjects1.length = 0;
gdjs.Main_32sceneCode.GDrankObjects2.length = 0;
gdjs.Main_32sceneCode.GDrankObjects3.length = 0;


return;

}

gdjs['Main_32sceneCode'] = gdjs.Main_32sceneCode;
