import gigModel from "../models/gig.model.js";
import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";

export const createGig = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, "Only sellers can create a gig!"));
  console.log(req.body, req.userId)
  const newGig = new Gig({
    userID: req.body.userId,
    ...req.body,
  });

  try {
    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (err) {
    next(err);
  }
};


export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.ID);

    if (gig.userID !== req.userID)
      return next(createError(403, "You can delete only your Gig"));

      await Gig.findByIdAndDelete(req.params.ID);
      res.status(200).send("Gig has been deleted");
  } catch (err) {
    next(err);
  }
};
export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id).populate('userID');
    if(!gig) next(createError(404, "Gig not found"));
    console.log(gig)
    res.status(200).send(gig);
  } catch (err) {
    next(err);
  }
};
export const getGigs = async (req, res, next) => {    
  const q = req.query;
  console.log(q);
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gt: q.min }),
        ...(q.max && { $lt: q.max }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };
  try {
    // console.log(req.query);
    // res.status(200).send({state:"success"});
    const gigs = await Gig.find(filters).sort({ [q.sort]: -1 }).populate('userID','_id username img');
    console.log(gigs)
    res.status(200).send(gigs);
  } catch (err) {
    next(err);
  }
}; 