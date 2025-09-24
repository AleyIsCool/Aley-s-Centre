let page = document;

let link_buttons = {
    menu_button: {button: page.getElementById("menu-button"), page_link: "menu.html"},
    profile_button: {button: page.getElementById("profile-button"), page_link: "profile.html"}
};

let global_buttons = {
    strawberry_cheese_cake_button: page.getElementById("strawberry-cheese-cake-button")
}

let sounds = {
    Strawberrycheesecake: new Audio("sounds/StrawberryCheeseCake.mp3")
}

let links = {

}

function go_to_link(page_link) {
    window.location.href = page_link;
}

function strawberry_cheese_cake_button_click() {
    sounds.Strawberrycheesecake.currentTime = 0
    sounds.Strawberrycheesecake.play();
}

for (const key in link_buttons) {
    if (link_buttons.hasOwnProperty(key)) {
        const button_data = link_buttons[key];
        button_data.button.addEventListener("click", () => {
            go_to_link(button_data.page_link);
        });
    }
}

if (global_buttons.strawberry_cheese_cake_button) {
    global_buttons.strawberry_cheese_cake_button.addEventListener("click", strawberry_cheese_cake_button_click);
}
