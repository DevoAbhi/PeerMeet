let senderStream;
let receiverStream;
let peerConnection;

let permission = async () => {
    senderStream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
    document.getElementById('user-1').srcObject = senderStream;

    connection();
}

let connection = async () => {
    peerConnection = new RTCPeerConnection();

    receiverStream = new MediaStream();
    document.getElementById('user-2').srcObject = receiverStream;

    let offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    console.log("Offer : " ,offer);
}

permission();