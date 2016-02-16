var block:GameObject;
static var score:int = 0;
static var lives:int = 3;

function Start () {
	createBlocks();
}

function Update () {

}

function OnGUI () {
	GUI.color = Color.white;
	GUI.Label (Rect(300,15,100,50), "Score: " + score);

	GUI.color = Color.white;
	GUI.Label (Rect(1200,15,100,50), "Lives: " + lives);
}


function createBlocks() {
	for (var i:int = -5;i<6;i++) {
		Instantiate(block,Vector3(i*16, 10,0), Quaternion.identity);
	}

	for (var j:int = -5;j<6;j++) {
		Instantiate(block,Vector3(j*16, 15,0), Quaternion.identity);
	}
}