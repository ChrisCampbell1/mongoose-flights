import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render('flights/new', {
    title: "new flight"
  })
}

function create(req, res) {
  console.log(req.body)
  if (req.body.departs === '') delete req.body.departs
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights/index')
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights,
      title: "All Flights"
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id)
  .then(flight => {
    res.redirect('/flights/index')
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/show', {
      flight,
      title: "Flight Details"
    })
  })
}

export {
  newFlight as new,
  create,
  index,
  deleteFlight as delete,
  show
}
