window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const contentType = urlParams.get('type'); // 'video', 'model', or 'image'
    const contentId = urlParams.get('id'); // Identifier for the specific content

    const arContent = document.getElementById('ar-content');

    if (contentType === 'video') {
        arContent.innerHTML = `<a-video src="videos/${contentId}.mp4" width="4" height="2.25" position="0 1 0"></a-video>`;
    } else if (contentType === 'model') {
        arContent.innerHTML = `<a-entity gltf-model="models/${contentId}.glb" scale="0.5 0.5 0.5" position="0 0 0"></a-entity>`;
    } else if (contentType === 'image') {
        arContent.innerHTML = `<a-image src="images/${contentId}.jpg" width="2" height="2" position="0 1 0"></a-image>`;
    } else {
        arContent.innerHTML = '<a-text value="Contenido no encontrado" position="0 1 0"></a-text>';
    }
});