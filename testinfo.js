var testids = ['1234eds', 'asdfff85', 'ouioe78'];
var database ={
    '1234eds': [{
        question: 'What is the best front-end MVC framework?',
        options: ['Spine', 'Angular', 'Backbone']
    }, {
        question: 'What do you use for Javascript testing?',
        options: ['Jasmine', 'JUnit', 'Selenium']
    }, {
        question: 'What is content negotiation?',
        options: ['Resource based', 'Representation Based']
    }],
    'asdfff85': [{
        question: 'What is the best front-end MVC framework?',
        options: ['Spine', 'Angular', 'Backbone']
    }, {
        question: 'What do you use for Javascript testing?',
        options: ['Jasmine', 'JUnit', 'Selenium']
    }, {
        question: 'What is content negotiation?',
        options: ['Resource based', 'Representation Based']
    }],
    'ouioe78': [{
        question: 'What is the best front-end MVC framework?',
        options: ['Spine', 'Angular', 'Backbone']
    }, {
        question: 'What do you use for Javascript testing?',
        options: ['Jasmine', 'JUnit', 'Selenium']
    }, {
        question: 'What is content negotiation?',
        options: ['Resource based', 'Representation Based']
    }]
};
exports.testids = function(){
    return testids;
};

exports.getTestData = function(testid){
    console.log(testid);
    return database[testid];
}