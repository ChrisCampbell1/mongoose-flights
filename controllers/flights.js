import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render('flights/new', {
    title: "Add Flight"
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
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

function edit(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/edit', {
      flight,
      title: "Edit Flight Details"
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

function update(req, res) {
  console.log(req.body)
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(flight => {
    console.log(flight)
    res.redirect(`/flights/${flight._id}`)
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

export {
  newFlight as new,
  create,
  index,
  deleteFlight as delete,
  show,
  edit,
  update
}
