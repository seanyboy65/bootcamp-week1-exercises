App:
    searchbar
    list:
        list element: description, button, (other attributes to add or remove?? prob need ids)
    update/add:
        text input, submit button

I can probably use FancyButton or something like it for the buttons needed. Searchbar will need to talk to the list with a onEvent
for every time text is updated, will prob use filter to render new list(can't actually change list itself). For now list elements will consist of a description and delete button, will prob need 