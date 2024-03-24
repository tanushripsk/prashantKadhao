 // fade start
 const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            // entry.target.classList.add('show-left');
        }
        else{
            // for repetation
            entry.target.classList.remove("show");
            // entry.target.classList.add('show-left');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
// const hiddenElements = document.querySelectorAll('.hidden-left');
hiddenElements.forEach((el)=>observer.observe(el));
// fade end

// slide left start
const observer_left = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show-left');
        }
        else{
            // for repetation
            entry.target.classList.remove("show-left");
        }
    });
});

const hiddenElements_left = document.querySelectorAll('.hidden-left');
hiddenElements_left.forEach((el)=>observer_left.observe(el));
// slide left end


// slide right start
const observer_right = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show-right');
        }
        else{
            // for repetation
            entry.target.classList.remove("show-right");
        }
    });
});

const hiddenElements_right = document.querySelectorAll('.hidden-right');
hiddenElements_right.forEach((el)=>observer_right.observe(el));
// slide right end



// slide down start
const observer_down = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show-down');
        }
        else{
            // for repetation
            entry.target.classList.remove("show-down");
        }
    });
});

const hiddenElements_down = document.querySelectorAll('.hidden-down');
hiddenElements_down.forEach((el)=>observer_down.observe(el));
// slide down end


// slide up start
const observer_up = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show-up');
        }
        else{
            // for repetation
            entry.target.classList.remove("show-up");
        }
    });
});

const hiddenElements_up = document.querySelectorAll('.hidden-up');
hiddenElements_up.forEach((el)=>observer_up.observe(el));
// slide up end



// slide zoom start
const observer_zoom = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show-zoom');
        }
        else{
            // for repetation
            // entry.target.classList.remove("show-zoom");
        }
    });
});

const hiddenElements_zoom = document.querySelectorAll('.hidden-zoom');
hiddenElements_zoom.forEach((el)=>observer_zoom.observe(el));
// slide zoom end


var elements = document.getElementsByTagName("*");
for(var id = 0; id < elements.length; ++id) { elements[id].oncontextmenu = null; }