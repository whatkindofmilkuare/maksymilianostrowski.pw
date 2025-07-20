const names = [
    "maostlab",
    "M. Ostrowski",
    "ten chemik",
    "Maksymilian Ostrowski",
    "M@k$Ym1li4n",
    "TEN CHEMIK",
    "maks",
    "m40$tl48",
    "Mak$ymilian",
    "chemik",
    "Maksymilian Ostr",
    "M.O.",
    "M4k$Ym1l1@n 0$tr0w$k1",
    "t3n ch3m1k",
    "max",
    "M@k$Ym1l14n 0$tR",
    "ch3m1k",
    "Maksymilian O.",
    "ostrowski.m",
    "MaksO",
    "ostro_chemik",
    "MaOst",
    "OstrowSky",
    "Professor M",
    "dr Maks",
    "maksi",
    "Ostry",
    "M.Ost",
    "Mr. M",
    "Mak$",
];

// Function to update the text content of the element with id "nick_names"
function updateName() {
    // Get the current name index from the data attribute or start with 0
    let currentIndex = parseInt(document.getElementById('nick_names').getAttribute('data-index')) || 0;
    
    // Update the text content with the current name
    document.getElementById('nick_names').textContent = names[currentIndex];
    
    // Calculate the next index (circularly)
    const nextIndex = (currentIndex + 1) % names.length;
    
    // Update the data attribute with the next index
    document.getElementById('nick_names').setAttribute('data-index', nextIndex);
}

// Set an interval to update the name every 2 seconds
setInterval(updateName, 310);

// Initial call to set the first name
updateName();