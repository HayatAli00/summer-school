//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

//Branching on elgblity check page
router.post('/eligblitycheck1', function (req, res) {

  var abc = req.session.data['where-do-you-live']

  if (abc == "M-academies"){

    res.redirect('/introduction-page')

  } else {

    res.redirect('/not-eligible-page')

  }

})
//  navigation from ukno to eligable 

router.post('/ukno', function (req, res) {

    {
  
      res.redirect('/eligblitycheck1')
  
    }
  
  })