const canvas = document.getElementById('thumbnail-canvas');

// 1. Handle Background Upload
document.getElementById('bg-upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            canvas.style.backgroundImage = `url(${event.target.result})`;
        }
        reader.readAsDataURL(file);
    }
});

// 2. Add Text Functionality
document.getElementById('add-text-btn').addEventListener('click', function() {
    const textValue = document.getElementById('text-input').value;
    const styleValue = document.getElementById('text-style').value;
    
    if (!textValue) return alert("Please enter some text first!");

    const textDiv = document.createElement('div');
    textDiv.className = `draggable-text ${styleValue}`;
    textDiv.innerText = textValue;
    
    // Double click to remove
    textDiv.ondblclick = function() {
        textDiv.remove();
    };

    makeDraggable(textDiv);
    canvas.appendChild(textDiv);
    
    document.getElementById('text-input').value = '';
});

// 3. Drag and Drop Logic
function makeDraggable(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    el.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        
        const rect = canvas.getBoundingClientRect();
        const scale = 1280 / rect.width; 
        
        function elementDrag(e) {
            e.preventDefault();
            pos1 = (pos3 - e.clientX) * scale;
            pos2 = (pos4 - e.clientY) * scale;
            pos3 = e.clientX;
            pos4 = e.clientY;
            
            el.style.top = (el.offsetTop - pos2) + "px";
            el.style.left = (el.offsetLeft - pos1) + "px";
            el.style.transform = "translate(0, 0)";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
}

// 4. Toggle Frames
document.getElementById('frame-select').addEventListener('change', function() {
    document.querySelectorAll('.overlay').forEach(el => el.classList.remove('active'));
    const selected = this.value;
    if (selected !== 'none') {
        document.getElementById(selected).classList.add('active');
    }
});

// 5. Export Thumbnail
document.getElementById('export-btn').addEventListener('click', function() {
    const originalTransform = canvas.style.transform;
    canvas.style.transform = "none"; // Temporarily remove scaling for crisp export
    
    html2canvas(canvas, {
        width: 1280,
        height: 720,
        scale: 1 
    }).then(exportedCanvas => {
        canvas.style.transform = originalTransform; // Restore scale
        
        const link = document.createElement('a');
        link.download = 'viral-thumbnail.png';
        link.href = exportedCanvas.toDataURL("image/png");
        link.click();
    });
});
