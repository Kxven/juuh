const btn = document.getElementById('btn')

document.getElementById('btn').addEventListener('click', function() {
    const container = document.querySelector('.container')
    container.classList.add('juh')
    container.classList.remove('container')
    container.innerHTML = '';
    const juhImage = document.createElement('div');
    juhImage.classList.add('juhuh s2.png');
    container.appendChild(juhImage);

})

