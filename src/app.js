const elements ={
  h1:document.querySelector('h1'),
  titleInput:document.querySelector('#title'),
  textnput:document.querySelector('#text'),
  urlInput:document.querySelector('#url'),
  shareBtn:document.querySelector('#share'),
}
function onShare() {
  console.log('share btn clicked');

  if (navigator.share) {
   
    navigator.share({
      title,
      text,
      url,
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    console.log('navigator not working');
  }
}
elements.shareBtn.addEventListener('click',onShare);