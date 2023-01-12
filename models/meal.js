import mongoose, { mongo } from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const mealSchema = new Schema({
  name: String
})



const Meal = mongoose.model('Meal', mealSchema)

export {
  Meal
}
