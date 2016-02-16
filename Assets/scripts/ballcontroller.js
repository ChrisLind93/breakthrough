var speed:float = 6000;
var ball:GameObject;
var block:GameObject;

function Start () {

}

function Update () {
	if (transform.position.y < -100) {
		gamecontroller.lives--;

		transform.position.y = GameObject.FindGameObjectWithTag("paddle").transform.position.y+5.5;
		transform.position.y = GameObject.FindGameObjectWithTag("paddle").transform.position.x;
		ball.GetComponent.<Rigidbody>().Sleep();

		var pcontroller:paddlecontroller;

		pcontroller = GameObject.FindGameObjectWithTag("paddle").GetComponent(paddlecontroller);
		pcontroller.attachedBall = this.gameObject;
	}

	if (gamecontroller.lives == 0) {
		Application.LoadLevel("gameover");
	}

	if (GameObject.FindGameObjectsWithTag("block").Length < 1) {
		Application.LoadLevel("youwon");
	}
}

function OnCollisionEnter (col:Collision) {
	if (col.gameObject.tag == "block") {
		Destroy(col.gameObject);

		if (gamecontroller.score >=0) {
			gamecontroller.score = gamecontroller.score + 1;
		}
	}
}