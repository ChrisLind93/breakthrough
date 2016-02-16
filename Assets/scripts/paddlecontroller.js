var yposition:float = 0;
var zposition:float = 0;
var xboundary:float = 0;
var speed:float = 115;
var maxboundary:float = 20.0;
var ballPrefab:GameObject;
var attachedBall:GameObject = null;
var ballRigidbody:Rigidbody;
var ballspeed:float = 6000;

function Start () {
	spawnBall();
}

function Update () {
	if (Input.GetAxis ("Horizontal") != 0) {
		transform.position = new Vector3(transform.position.x + Input.GetAxis("Horizontal") * speed * Time.deltaTime, yposition, zposition);

		if (transform.position.x < -xboundary + maxboundary) {
			transform.position = new Vector3(-xboundary + maxboundary, yposition, zposition);
		}
		else if (transform.position.x > xboundary - maxboundary) {
			transform.position = new Vector3(xboundary - maxboundary, yposition, zposition);
		}
	}

	if (attachedBall) {
		ballRigidbody = attachedBall.GetComponent.<Rigidbody>();
		ballRigidbody.position = transform.position + new Vector3(0,5.5, 0);

		if (Input.GetButtonDown("Jump")) {
			ballRigidbody.isKinematic = false;
			ballRigidbody.AddForce(0,ballspeed,0);
			attachedBall = null;
		}
	}
}

function spawnBall () {
	attachedBall = Instantiate(ballPrefab, transform.position + new Vector3(0,40,0), Quaternion.identity) as GameObject;
}

function OnCollisionEnter (col:Collision) {
	for (var contact:ContactPoint in col.contacts) {
		if (contact.thisCollider == GetComponent.<Collider>()) {
			var ballangle:float = contact.point.x - transform.position.x;
			contact.otherCollider.GetComponent.<Rigidbody>().AddForce(100*ballangle,0,0);
		}
	}
}