const copy_button = document.getElementById("copy-button")

const copyURL = () => {
  if (copy_button) {
    copy_button.addEventListener('click', (event) => {
      const input = document.getElementById("url");
      input.select();
      document.execCommand("copy");

      const linkCopiedSound = document.getElementById('link-copied');
      const linkCopiedSoundPromise = linkCopiedSound.play();
      linkCopiedSound.currentTime = 0;
      if (linkCopiedSoundPromise !== undefined) {
        linkCopiedSoundPromise.then(function() {
          linkCopiedSound.play();
        }).catch(function(error) {
          linkCopiedSound.play();
          console.log("Probleme de chargement du son pour la copie du lien!");
        });
      }
    });
  }
}

export {copyURL};


