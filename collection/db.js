import gun from "gun";
import "gun/sea";
import "gun/axe";

export const db = gun();

    // Create a node with key 'user1' and set some data
gun.get('user1').put({
    name: 'John Doe',
    age: 25,
    email: 'john@example.com'
  });

   // Retrieve data from the 'user1' node
gun.get('user1').val(data => {
    console.log('User Data:', data);
  });

   // Update the 'user1' node with new data
gun.get('user1').put({
    age: 26,
    updated_at: new Date().toISOString()
  });

   // Delete the 'user1' node
gun.get('user1').put(null);
 