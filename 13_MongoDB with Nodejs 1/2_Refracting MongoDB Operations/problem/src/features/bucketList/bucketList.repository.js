// Please don't change the pre-written code
// Import the necessary modules here
import { getDB } from "../../config/mongodb.js";

class BucketListRepository {
  async addBucketListItem(bucketListItem) {
    // Write your code here
    try {

      {
        const db = getDB();
        console.log('Data before insertion:', bucketListItem);

        await db.collection("bucketListItems").insertOne(bucketListItem);

        return bucketListItem;
      }
    } catch (err) {
      console.error(err)
    }
  }

  async findOneBucketListItem(title) {
    try {
      console.log('Before MongoDB Query');
      const db = getDB();
  
      // Check if title is defined before using it
      if (title) {
        const item = await db.collection("bucketListItems").findOne({ title: title.trim() });
  
        if (!item) {
          console.log('Item not found in the database.');
          return null; // or handle the case when the item is not found
        }
  
        console.log('After MongoDB Query');
        return item;
      } else {
        console.log('Title is undefined.');
        return null; // or handle the case when title is undefined
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  

}

export default BucketListRepository;
