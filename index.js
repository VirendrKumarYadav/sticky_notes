// color

let textArea_value = document.querySelector('textarea');
let data = document.querySelector('.choose_color');
let color;
addEventListener('change', () => {
    textArea_value.style.color = data.value;
    color=data.value;
});


// Add Notes
let add_btn = document.querySelector('.add');
let crtNotes = document.querySelector('.notes');
add_btn.addEventListener('click', () => {

    let note = document.createElement('div');
    note.classList.add('container-inner');
    note.style.color = color;
    note.innerHTML = `
    <div class="sticky-container">
      <div class="sticky-outer">
        <div class="sticky">
          <svg width="0" height="0">
            <defs>
              <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
                <path
                      d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                      stroke-linejoin="round"
                      stroke-linecap="square"
                      />  
              </clipPath>
            </defs>
          </svg>
          <div class="sticky-content">
          <p class="pin"><span class="material-symbols-outlined">
          shoppingmode
          </span></p>
            ${textArea_value.value}
          </div>
        </div>
      </div>
  </div>`;
    crtNotes.appendChild(note);
});


// reset Notes
let reset_btn = document.querySelector('.reset');
reset_btn.addEventListener('click', () => {
    textArea_value.value = '';
    console.log(textArea_value.value);
});