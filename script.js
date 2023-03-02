const main = document.querySelector('main');
currentDay.innerHTML = ` <h4>${new Date().toLocaleString()}</h4>`;
let store = localStorage.task ? JSON.parse(localStorage.task) : [];


const handleStore = () => {
    if (!store.length) return;


    store.forEach((task, i) => {
        console.log(i, task);
        $('textarea').eq(i).text(task);
    });
};


const hours = ['8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];

hours.forEach((hour, i) => {
    let rH = i + 8;
    let cH = new Date().getHours;
    // ^ Changed the time to military time .

    main.innerHTML += `
        <div class="row time-block ${rH < cH ? 'past' : rH > cH ? 'future' : 'present'}">
        <div class="col-2 col-md-1 hour text-center py-3">${hour}</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
        </button>
    </div>`;


    // made the rows the length of the array 
});

handleStore();

const handleSave = () => {
    store = [];
    $("textarea").each((i, obj) => store.push(obj.value));
    localStorage.task = JSON.stringify(store);

}

$(".saveBtn").on('click', handleSave);