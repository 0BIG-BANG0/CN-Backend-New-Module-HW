import BucketListModel from "./bucketList.model.js";
import BucketListRepository from "./bucketList.repository.js";

export default class BucketListController {
  constructor() {
    this.bucketListRepository = new BucketListRepository();
  }

  add = async (req, res) => {
    try {
      const { title, description, dateAdded, targetDate, isCompleted } = req.body;
      console.log("Request Body:", req.body);
  
      // Step 1: Create a BucketListModel object
      const bucketListItem = new BucketListModel(
        title,
        description,
        dateAdded,
        targetDate,
        isCompleted
      );
      console.log('Bucket List Item:', bucketListItem);
  
      // Step 2: Pass the BucketListModel object to the repository method
      const item = await this.bucketListRepository.addBucketListItem(
        bucketListItem
      );
  
      // Step 3: Send the response with the inserted item
      res.status(201).send(item);
    } catch (err) {
      // Step 4: Handle errors and send an internal server error response
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
  

  get = async (req, res) => {
    const { title } = req.body;
    console.log("Title from query:", title);
    // Refactor to use the repository method
    const item = await this.bucketListRepository.findOneBucketListItem(title);

    if (!item) {
      res.status(200).send("Item not found.");
    } else {
      res.status(200).send(item);
    }
  };
}
