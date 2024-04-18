function decode() {
    var input = document.getElementById('input').value;
    var output = input.replace(/\(([^)]+)\)/g, function(_, text) {
        return text.split('').reverse().join('');
    });
    document.getElementById('output').innerText = output;
}
