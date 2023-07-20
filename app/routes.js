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

  //navigation from infroductionpage to question1
 
router.post('/introduction-page', function (req, res) {

    {
  
      res.redirect('/question1')
  
    }
  
  })

   //navigation from question1 to question2
 
router.post('/question1', function (req, res) {

    {
  
      res.redirect('/question2')
  
    }
  
  })


  //navigation from question2 to summery
 
  router.post('/question2', function (req, res) {

    {
  
      res.redirect('/summary-page')
  
    }
  
  })



       //navigation from summery to question3
 
router.post('/summary-page', function (req, res) {

    {
  
      res.redirect('/question3')
  
    }
  
  })


         //navigation from question3 to question4
 
router.post('/question3', function (req, res) {

    {
  
      res.redirect('/question4')
  
    }
  
  })



 //navigation from question4 to dateentery
 
router.post('/question4', function (req, res) {

    {
  
      res.redirect('/date')
  
    }
  
  })


  //navigation from date to validation
 
router.post('/date', function (req, res) {

    {
  
      res.redirect('/validation')
  
    }
  
  })



    //navigation from valitation to confomferm
 
router.post('/validation', function (req, res) {

    {
  
      res.redirect('/Confirmation-page')
  
    }
  
  })