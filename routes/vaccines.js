const express = require('express')
const router = express.Router()
const Record = require('../models/records')

// Getting all
router.get('/', async (req, res) => {
  // try {
  //   const records = await Record.find()

  //   res.json(records)
  // } catch (err) {
  //   res.status(500).json({ message: err.message })
  // }
res.render('register')
})

// Getting One
router.get('/:id', getRecord, (req, res) => {
  // res.json(res.record)
  const record = res.record
  res.render('menu', {record})
})

// // Creating one
// router.post('/', async (req, res) => {
//   const record = new Record({
//     name: req.body.name,
//     subscribedToChannel: req.body.subscribedToChannel
//   })
//   try {
//     const newRecord = await record.save()
//     res.status(201).json(newRecord)
//   } catch (err) {
//     res.status(400).json({ message: err.message })
//   }
// })

// // Updating One
// router.patch('/:id', getRecord, async (req, res) => {
//   if (req.body.name != null) {
//     res.record.name = req.body.name
//   }
//   if (req.body.subscribedToChannel != null) {
//     res.subscriber.subscribedToChannel = req.body.subscribedToChannel
//   }
//   try {
//     const updatedSubscriber = await res.subscriber.save()
//     res.json(updatedSubscriber)
//   } catch (err) {
//     res.status(400).json({ message: err.message })
//   }
// })

// // Deleting One
// router.delete('/:id', getSubscriber, async (req, res) => {
//   try {
//     await res.subscriber.remove()
//     res.json({ message: 'Deleted Subscriber' })
//   } catch (err) {
//     res.status(500).json({ message: err.message })
//   }
// })

async function getRecord(req, res, next) {
  let record
  try {
    record = await Record.findById(req.params.id)
    if (record == null) {
      return res.status(404).json({ message: 'Cannot find record' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.record = record
  next()
}

module.exports = router