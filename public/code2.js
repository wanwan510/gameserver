gdjs.Victory_32SceneCode = {};
gdjs.Victory_32SceneCode.localVariables = [];
gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects1_1final = [];

gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects1_1final = [];

gdjs.Victory_32SceneCode.GDbgObjects1= [];
gdjs.Victory_32SceneCode.GDbgObjects2= [];
gdjs.Victory_32SceneCode.GDbgObjects3= [];
gdjs.Victory_32SceneCode.GDVictoryObjects1= [];
gdjs.Victory_32SceneCode.GDVictoryObjects2= [];
gdjs.Victory_32SceneCode.GDVictoryObjects3= [];
gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects1= [];
gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects2= [];
gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects3= [];
gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects1= [];
gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects2= [];
gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects3= [];
gdjs.Victory_32SceneCode.GDLeaderboaedObjects1= [];
gdjs.Victory_32SceneCode.GDLeaderboaedObjects2= [];
gdjs.Victory_32SceneCode.GDLeaderboaedObjects3= [];


gdjs.Victory_32SceneCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Leaderboaed"), gdjs.Victory_32SceneCode.GDLeaderboaedObjects2);
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(2));
}{for(var i = 0, len = gdjs.Victory_32SceneCode.GDLeaderboaedObjects2.length ;i < len;++i) {
    gdjs.Victory_32SceneCode.GDLeaderboaedObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(0).getChild("name").getAsString() + " " + runtimeScene.getGame().getVariables().getFromIndex(2).getChild(0).getChild("timing").getAsString() + "\n" + runtimeScene.getGame().getVariables().getFromIndex(2).getChild(1).getChild("name").getAsString() + " " + runtimeScene.getGame().getVariables().getFromIndex(2).getChild(1).getChild("timing").getAsString() + "\n" + runtimeScene.getGame().getVariables().getFromIndex(2).getChild(2).getChild("name").getAsString() + " " + runtimeScene.getGame().getVariables().getFromIndex(2).getChild(2).getChild("timing").getAsString() + "\n");
}
}}

}


};gdjs.Victory_32SceneCode.asyncCallback15688700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Victory_32SceneCode.localVariables);

{ //Subevents
gdjs.Victory_32SceneCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Victory_32SceneCode.localVariables.length = 0;
}
gdjs.Victory_32SceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Victory_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/rank", "", "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().get("log")), (runtimeScene) => (gdjs.Victory_32SceneCode.asyncCallback15688700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Victory_32SceneCode.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Victory_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{

gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithShadow"), gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects2);
for (var i = 0, k = 0, l = gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects2.length;i<l;++i) {
    if ( gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects2[k] = gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects2[i];
        ++k;
    }
}
gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects1_1final.indexOf(gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects2[j]) === -1 )
            gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects1_1final.push(gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects1_1final, gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Play Scene", false);
}}

}


{



}


{

gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects2);
for (var i = 0, k = 0, l = gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects2.length;i<l;++i) {
    if ( gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects2[k] = gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects2[i];
        ++k;
    }
}
gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects1_1final.indexOf(gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects2[j]) === -1 )
            gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects1_1final.push(gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects1_1final, gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.Victory_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Victory_32SceneCode.GDbgObjects1.length = 0;
gdjs.Victory_32SceneCode.GDbgObjects2.length = 0;
gdjs.Victory_32SceneCode.GDbgObjects3.length = 0;
gdjs.Victory_32SceneCode.GDVictoryObjects1.length = 0;
gdjs.Victory_32SceneCode.GDVictoryObjects2.length = 0;
gdjs.Victory_32SceneCode.GDVictoryObjects3.length = 0;
gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects3.length = 0;
gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects1.length = 0;
gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects2.length = 0;
gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects3.length = 0;
gdjs.Victory_32SceneCode.GDLeaderboaedObjects1.length = 0;
gdjs.Victory_32SceneCode.GDLeaderboaedObjects2.length = 0;
gdjs.Victory_32SceneCode.GDLeaderboaedObjects3.length = 0;

gdjs.Victory_32SceneCode.eventsList2(runtimeScene);
gdjs.Victory_32SceneCode.GDbgObjects1.length = 0;
gdjs.Victory_32SceneCode.GDbgObjects2.length = 0;
gdjs.Victory_32SceneCode.GDbgObjects3.length = 0;
gdjs.Victory_32SceneCode.GDVictoryObjects1.length = 0;
gdjs.Victory_32SceneCode.GDVictoryObjects2.length = 0;
gdjs.Victory_32SceneCode.GDVictoryObjects3.length = 0;
gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects2.length = 0;
gdjs.Victory_32SceneCode.GDRedButtonWithShadowObjects3.length = 0;
gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects1.length = 0;
gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects2.length = 0;
gdjs.Victory_32SceneCode.GDGreenButtonWithShadowObjects3.length = 0;
gdjs.Victory_32SceneCode.GDLeaderboaedObjects1.length = 0;
gdjs.Victory_32SceneCode.GDLeaderboaedObjects2.length = 0;
gdjs.Victory_32SceneCode.GDLeaderboaedObjects3.length = 0;


return;

}

gdjs['Victory_32SceneCode'] = gdjs.Victory_32SceneCode;
