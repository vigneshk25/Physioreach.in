import mongoose from "mongoose";
import Doctor from "./DoctorSchema.js";

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

reviewSchema.pre(/^find/, function(next){
  this.populate({
    path:'user',
    select:'name photo',

  });
  next()
})

reviewSchema.static.calcAverageRatings = async function(doctorId){
  //this points the current review
  const stats = await this.aggeregate([{
    $math:{doctor:doctorId}
  },{
    $group:{
      _id:"$doctor",
      numOfRating:{$sum:1},
      avgRating:{$avg:'$rating'}
    }
  }
])
  await Doctor.findByIdAndUpdate(doctorId, {
    totalRating: stats[0].numOfRating,
    averageRating:stats[0].averageRating, 
})
}

reviewSchema.post('save', function(){
  this.constructor.calcAverageRatings(this.doctor)
})
export default mongoose.model("Review", reviewSchema);