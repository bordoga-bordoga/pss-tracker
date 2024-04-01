/*
// This script adds a new input field within a list item in response to button clicks.
// Each button, when clicked, will generate a new list item containing an input field
// within the same unordered list (UL) it belongs to.

// Wait for the DOM to fully load before running the script to ensure all elements are accessible.
document.addEventListener('DOMContentLoaded', function () {

    // Select all buttons present within the document. This is done to attach click events to each button.
    const buttons = document.querySelectorAll('button');
  
    // Iterate over each button to individually assign a click event listener.
    buttons.forEach(function(button) {
  
      // Add an event listener for the 'click' event to each button.
      button.addEventListener('click', function() {
  
        // Use closest to find the nearest ancestor which is an unordered list (UL).
        // This ensures the new list item is added to the correct list.
        const ul = this.closest('ul');
  
        // Create a new list item element. This will contain the new input field.
        const newListItem = document.createElement('li');
  
        // Create a new input element. This is the input field that will be added to the list.
        const inputField = document.createElement('input');
        inputField.type = 'text'; // Set the input type to text for user inputs.
  
        // Append the newly created input field to the new list item.
        newListItem.appendChild(inputField);
  
        // Finally, append the new list item, now containing the input field, to the unordered list.
        ul.appendChild(newListItem);
      });
    });
  });
*/


