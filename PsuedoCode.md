# Etch-A-Scetch

- The user can click on the grid and drap their mouse in it, creating a line. When they release the mouse button, they stop creating a line.
- When player pushes a button, a pop-up window will appear. 
    - They will be asked how many squares per side they would like to create. Minimal is 1 and max is 100.
    - After putting in a number and pressing ok, the pop-up will disappear and a new grid will appear.
- There is a button where if pressed the grid will clear up any in it.

Functions

```
createGrid(squares){
    set value of cssList property of gridContainer.
    multiply parameter by itself and assign to variable.
    loop through variable to create divs equal to variable.
    For each loop,
        make a div
        Add eventListener to div
            Listen to hover event.
            if hover and mousedown is true
            Change div class to black
}
```

---

Call createGrid and set squares to 16.
