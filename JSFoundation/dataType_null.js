let selectedRoom = null; // No room selected yet

function bookRoom(roomNumber) {
  selectedRoom = roomNumber; // Assign a valid room number
  console.log(`Room ${selectedRoom} booked successfully!`);
}
console.log(selectedRoom); //Null : (No room selected)
bookRoom(101); //Now room is selected
console.log(selectedRoom); //Out put after assign value
