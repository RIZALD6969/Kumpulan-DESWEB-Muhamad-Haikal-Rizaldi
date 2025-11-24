const button = document.getElementById('highlightBtn');
const paragraph = document.getElementById('paragraph');
let isHighlighted = false;

button.addEventListener('click', () => {
    if (!isHighlighted) {
        paragraph.innerHTML = paragraph.innerHTML
            .replace("Faculty of Teacher Training and Education, Sebelas Maret University", '<span class="highlight">Faculty of Teacher Training and Education, Sebelas Maret University</span>')
            .replace("Educational Personnel Education Institution (LPTK)", '<span class="highlight">Educational Personnel Education Institution (LPTK)</span>')
            .replace("superior, strong and intelligent educational staff", '<span class="highlight">superior, strong and intelligent educational staff</span>')
            .replace("Informatics and Computer Technology Education (PTIK)", '<span class="highlight">Informatics and Computer Technology Education (PTIK)</span>')
            .replace("Engineering and Vocational Education (PTK)", '<span class="highlight">Engineering and Vocational Education (PTK)</span>')
            .replace("prioritized to teach in vocational/vocational programs", '<span class="highlight">prioritized to teach in vocational/vocational programs</span>')
            .replace("Building Engineering Education", '<span class="highlight">Building Engineering Education</span>')
            .replace("Mechanical Engineering Education", '<span class="highlight">Mechanical Engineering Education</span>')
            .replace("resource sharing with the mathematics study program", '<span class="highlight">resource sharing with the mathematics study program</span>');
        isHighlighted = true;
    } else {
        // hapus highlight dengan reload teks asli
        location.reload();
    }
});
